const axios = jest.genMockFromModule('axios');

// tslint:disable no-object-mutation
(axios as any).get = (uri: string, params?: any) => {
  const accessToken = params.headers && params.headers.Authorization
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
      }
    });
  }
  
  return Promise.resolve({
    data: {
      title: `sample mocked data for ${params.method} request to ${uri}`,
      headers: params.headers || { data: 'default sample headers' },
      access_token: accessToken,
    }
  });
}
// tslint:enable no-object-mutation

export default axios;