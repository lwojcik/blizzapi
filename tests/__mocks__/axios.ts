const axios = jest.genMockFromModule('axios');

// tslint:disable no-object-mutation
(axios as any).get = (uri: string, params?: any) => Promise.resolve({
  data: {
    title: `sample mocked data for ${params.method} request to ${uri}`,
    headers: params.headers || { data: 'default sample headers' },
    access_token: 'sample mocked access token',
  }
});
// tslint:enable no-object-mutation

export default axios;