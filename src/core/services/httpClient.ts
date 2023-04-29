import axios from 'axios';

const fetch = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' });

const httpClient = {
  get: async (url: string) => {
    try {
      const { data } = await fetch(url);

      return data;
    } catch (e) {
      return e;
    }
  },
};

export default httpClient;
