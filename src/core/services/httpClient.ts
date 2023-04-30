import axios, { AxiosRequestConfig } from 'axios';

import { pokemonApi } from 'core/api/pokemonApi';

const fetch = axios.create({ baseURL: pokemonApi });

const httpClient = {
  get: async (url: string, options?: AxiosRequestConfig) => {
    try {
      const { data } = await fetch.get(url, options);

      return data;
    } catch (e) {
      return e;
    }
  },
};

export default httpClient;
