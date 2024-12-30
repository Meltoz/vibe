import { $fetch } from 'ofetch';

export const useFetchCustom = async (url: string, options = {}) => {
  const config = useRuntimeConfig();
  const response = await $fetch(url, {
    baseURL: config.public.apiBaseUrl,
    ...options,
  });
  return response;
};
