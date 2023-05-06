/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormik, FormikProvider } from 'formik';

import { validationCreateForm } from 'core/utils/validationForm';
import { useCreatePokemon } from 'core/hooks/useCreatePokemon';
import { createPokemonAdapter } from 'core/utils/adapters/createPokemon';
import { typesOptionsPokemon } from 'core/utils/typesOptionsPokemon';
import { typesPokemons } from 'core/utils/translates/typesPokemons';

import plus from 'app/assets/images/plus.png';

import InputText from 'app/components/InputText';
import InputNumber from 'app/components/InputNumber';
import Button from 'app/components/Button';
import MultiSelect from 'app/components/MultiSelect';

import Divide from 'app/components/Modal/common/Divide';
import Picture from 'app/components/Modal/common/Picture';

import { useModal } from 'core/hooks/useModal';
import * as S from './styled';

const initialValues = {
  name: '',
  height: '',
  weight: '',
  image: '',
  hp: '',
  abilityOne: '',
  abilityTwo: '',
  abilityThree: '',
  abilityFour: '',
  stats: {
    defense: '',
    attack: '',
    'special-attack': '',
    'special-defense': '',
    speed: '',
  },
  types: [] as string[],
};

const CreateModal: React.FC = () => {
  const { createPokemon } = useCreatePokemon();
  const { closeModal } = useModal();

  const formik = useFormik({
    initialValues,
    validationSchema: validationCreateForm,
    onSubmit: (values, { resetForm }) => {
      createPokemon(createPokemonAdapter(values));

      resetForm();

      closeModal();
    },
  });

  return (
    <S.Wrapper data-testid="create-modal">
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <S.Picture>
            <Picture
              error={formik.touched.image && Boolean(formik.errors.image)}
              image={formik.values.image}
              content={
                <S.AddPicture>
                  <label htmlFor="image">
                    <img src={plus} alt="add-picture" />
                  </label>
                  <input
                    data-testid="image-input"
                    type="file"
                    onChange={(file) =>
                      formik.setFieldValue(
                        'image',
                        URL.createObjectURL(file?.target?.files?.[0] as Blob),
                      )
                    }
                    id="image"
                    name="image"
                  />
                </S.AddPicture>
              }
            />
          </S.Picture>
          <S.Infos>
            <InputText
              type="text"
              placeholder="Nome"
              name="name"
              className="infos"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={(formik.touched.name && formik.errors.name) || ''}
            />
            <InputNumber
              placeholder="HP"
              label="HP"
              name="hp"
              className="infos"
              value={formik.values.hp}
              onChange={(e) => formik.setFieldValue('hp', e || '')}
              error={(formik.touched.hp && formik.errors.hp) || ''}
            />
            <InputNumber
              placeholder="Peso"
              label="PESO"
              suffix="Kg"
              className="infos"
              name="weight"
              value={formik.values.weight}
              onChange={(e) => formik.setFieldValue('weight', e || '')}
              error={(formik.touched.weight && formik.errors.weight) || ''}
            />
            <InputNumber
              placeholder="Altura"
              label="ALTURA"
              name="height"
              suffix="Cm"
              className="infos"
              value={formik.values.height}
              onChange={(e) => formik.setFieldValue('height', e || '')}
              error={(formik.touched.height && formik.errors.height) || ''}
            />
          </S.Infos>
          <Divide
            title="Tipo"
            content={
              <S.Types>
                <MultiSelect
                  translate={typesPokemons}
                  placeholder="Selecione o(s) tipo(s)"
                  name="types"
                  limitSelected={2}
                  options={typesOptionsPokemon}
                  onChange={(e) => formik.setFieldValue('types', e)}
                  error={
                    (formik.touched.types &&
                      String(formik.errors.types || '')) ||
                    ''
                  }
                />
              </S.Types>
            }
          />
          <Divide
            title="HABILIDADES"
            content={
              <S.Abilities>
                <InputText
                  className="abilities"
                  type="select"
                  placeholder="Habilidade 1"
                  name="abilityOne"
                  value={formik.values.abilityOne}
                  onChange={formik.handleChange}
                  error={
                    (formik.touched.abilityOne && formik.errors.abilityOne) ||
                    ''
                  }
                />
                <InputText
                  className="abilities"
                  type="select"
                  placeholder="Habilidade 2"
                  name="abilityTwo"
                  value={formik.values.abilityTwo}
                  onChange={formik.handleChange}
                  error={
                    (formik.touched.abilityTwo && formik.errors.abilityTwo) ||
                    ''
                  }
                />
                <InputText
                  className="abilities"
                  type="select"
                  placeholder="Habilidade 3"
                  name="abilityThree"
                  value={formik.values.abilityThree}
                  onChange={formik.handleChange}
                  error={
                    (formik.touched.abilityThree &&
                      formik.errors.abilityThree) ||
                    ''
                  }
                />
                <InputText
                  className="abilities"
                  type="select"
                  placeholder="Habilidade 4"
                  name="abilityFour"
                  value={formik.values.abilityFour}
                  onChange={formik.handleChange}
                  error={
                    (formik.touched.abilityFour && formik.errors.abilityFour) ||
                    ''
                  }
                />
              </S.Abilities>
            }
          />
          <Divide
            title="ESTATÍSTICAS"
            content={
              <S.Stats>
                <InputNumber
                  placeholder="00"
                  label="DEFESA"
                  name="stats.defense"
                  className="stats"
                  value={formik.values.stats.defense}
                  onChange={(e) =>
                    formik.setFieldValue('stats.defense', e || '')
                  }
                  error={
                    (formik.touched.stats?.defense &&
                      formik.errors.stats?.defense) ||
                    ''
                  }
                />
                <InputNumber
                  placeholder="00"
                  label="ATAQUE"
                  name="stats.attack"
                  className="stats"
                  value={formik.values.stats.attack}
                  onChange={(e) =>
                    formik.setFieldValue('stats.attack', e || '')
                  }
                  error={
                    (formik.touched.stats?.attack &&
                      formik.errors.stats?.attack) ||
                    ''
                  }
                />
                <InputNumber
                  placeholder="00"
                  label="DEFESA ESPECIAL"
                  name="stats.special-defense"
                  className="stats"
                  value={formik.values.stats?.['special-defense']}
                  onChange={(e) =>
                    formik.setFieldValue('stats.special-defense', e || '')
                  }
                  error={
                    (formik.touched.stats?.['special-defense'] &&
                      formik.errors.stats?.['special-defense']) ||
                    ''
                  }
                />
                <InputNumber
                  placeholder="00"
                  label="ATAQUE ESPECIAL"
                  name="stats.special-attack"
                  className="stats"
                  value={formik.values.stats['special-attack']}
                  onChange={(e) =>
                    formik.setFieldValue('stats.special-attack', e || '')
                  }
                  error={
                    (formik.touched.stats?.['special-attack'] &&
                      formik.errors.stats?.['special-attack']) ||
                    ''
                  }
                />
                <InputNumber
                  placeholder="00"
                  label="VELOCIDADE"
                  name="stats.speed"
                  className="stats"
                  value={formik.values.stats.speed}
                  onChange={(e) => formik.setFieldValue('stats.speed', e || '')}
                  error={
                    (formik.touched.stats?.speed &&
                      formik.errors.stats?.speed) ||
                    ''
                  }
                />
              </S.Stats>
            }
          />
          <S.CreatePokemon>
            <Button text="CRIAR POKEMON" type="submit" />
          </S.CreatePokemon>
        </form>
      </FormikProvider>
    </S.Wrapper>
  );
};

export default CreateModal;
