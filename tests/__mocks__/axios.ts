const axios = jest.genMockFromModule('axios');

// tslint:disable no-object-mutation
(axios as any).request = (params?: any) => {
  const method = params.method || 'GET';
  const accessToken = params.headers?.Authorization
    ? params.headers.Authorization.split(' ')[1]
    : 'no_access_token_provided';

  if (accessToken && accessToken === 'invalid_access_token') {
    // tslint:disable-next-line: no-reject
    return Promise.reject({
      response: {
        status: 401,
        error: 'invalid_token',
      },
      data: {
        status: 401,
        message: 'invalid_access_token',
      },
    });
  }

  return Promise.resolve({
    data: {
      title: `sample mocked data for ${method} request to ${params.url}`,
      headers: params.headers || { data: 'default sample headers' },
      params: params.params || { data: 'default sample params' },
      access_token: accessToken,
    },
  });
};
// tslint:enable no-object-mutation

export default axios;
