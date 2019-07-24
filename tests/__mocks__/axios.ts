const axios = jest.genMockFromModule('axios');

// tslint:disable no-object-mutation
(axios as any).get = (uri: string, params?: any) => {
  // tslint:disable-next-line: variable-name
  const access_token = params.headers && params.headers.Authorization
    ? params.headers.Authorization.split(' ')[1]
    : 'no access token provided';
  console.log(access_token);
  return Promise.resolve({
    data: {
      title: `sample mocked data for ${params.method} request to ${uri}`,
      headers: params.headers || { data: 'default sample headers' },
      access_token: 'valid_access_token',
    }
  });
}
// tslint:enable no-object-mutation

export default axios;