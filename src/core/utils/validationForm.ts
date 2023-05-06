import * as yup from 'yup';

export const validationCreateForm = yup.object({
  name: yup.string().required('Nome é um campo obrigatório!'),
  height: yup.string().required('Altura é um campo obrigatório!'),
  weight: yup.string().required('Peso de série é um campo obrigatório!'),
  image: yup.string().required('Imagem é um campo obrigatório!'),
  hp: yup.string().required('HP é um campo obrigatório!'),
  abilityOne: yup.string().required('Habilidade 1 é um campo obrigatório!'),
  abilityTwo: yup.string().required('Habilidade 2 é um campo obrigatório!'),
  abilityThree: yup.string().required('Habilidade 3 é um campo obrigatório!'),
  abilityFour: yup.string().required('Habilidade 4 é um campo obrigatório!'),
  stats: yup.object({
    defense: yup.string().required('Defesa é um campo obrigatório!'),
    attack: yup.string().required('Ataque é um campo obrigatório!'),
    'special-attack': yup
      .string()
      .required('Ataque Especial é um campo obrigatório!'),
    'special-defense': yup
      .string()
      .required('Defesa Especial é um campo obrigatório!'),
    speed: yup.string().required('Velocidade é um campo obrigatório!'),
  }),
  types: yup.array().min(1, 'Tipo é um campo obrigatório!'),
});
