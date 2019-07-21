const axios = jest.genMockFromModule('axios');

// tslint:disable no-object-mutation
(axios as any).get = (uri: string, params?: any) => Promise.resolve({
  data: {
    title: `sample mocked data for ${params.method} request to ${uri}`,
  }
});

module.exports = axios;
// tslint:enable no-object-mutation
