import axios, { AxiosRequestConfig } from 'axios';

import { pokemonApi } from 'core/api/pokemonApi';

const fetch = axios.create({ baseURL: pokemonApi });

const httpClient = () => {
  const get = async <Data = any>(
    url: string,
    options?: AxiosRequestConfig,
  ): Promise<Data> => {
    try {
      const { data } = await fetch.get(url, options);

      return data;
    } catch (e: any) {
      return e;
    }
  };

  return {
    get,
  };
};

export default httpClient();
