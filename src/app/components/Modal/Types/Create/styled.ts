import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  form {
    width: 100%;
  }

  .picture {
    margin: 0 auto;
  }
`;

export const Abilities = styled.div`
  width: 100%;
  padding: 30px 0;

  input {
    margin-bottom: 10px;
  }
`;

export const Types = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
`;

export const Stats = styled.div`
  width: 100%;
  padding: 30px 0;

  .stats {
    margin-bottom: 15px;
  }
`;

export const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  .infos {
    margin-bottom: 25px;
  }
`;

export const Picture = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const AddPicture = styled.div`
  position: relative;
  width: 100%;

  input {
    display: none;
  }

  label {
    width: 30px;
    height: 30px;
    background-color: #ff3d71;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff;
    right: 70px;
    top: 15px;
    position: absolute;
    cursor: pointer;

    img {
      width: 15px;
      height: 15px;
    }
  }
`;

export const CreatePokemon = styled.div`
  bottom: 40px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31))
    drop-shadow(0px 20px 32px rgba(9, 30, 66, 0.25));
`;
