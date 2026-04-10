import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export const client = (() => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Accept: 'application/json, text/plain, */*',
    },
  });
})();

client.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // const accessToken = tokenService.getAccessToken();
    // if (accessToken) {
    //     config.headers.Authorization = `Bearer ${accessToken}`;
    // }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  async err => {
    const status = err.response ? err.response.status : null;

    if (status === 401) {
      try {
        // refresh token
        return;
      } catch (error) {
        return Promise.reject(error);
      }
    }

    if (status === 403 && err.response.data) {
      return Promise.reject(err.response.data);
    }

    return Promise.reject(err);
  }
);

export const request = async (options: AxiosRequestConfig, withCount?: boolean) => {
  const onSuccess = (response: AxiosResponse) => {
    const { data, headers } = response;

    if (withCount) {
      return { data, count: parseInt(headers['x-data-count'], 10) };
    }

    return data;
  };

  const onError = function (error: AxiosError) {
    return Promise.reject({
      message: error.message,
      code: error.code,
      response: error.response,
    });
  };

  return client(options).then(onSuccess).catch(onError);
};
