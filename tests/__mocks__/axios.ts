const axios = jest.createMockFromModule("axios");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(axios as any).request = (params?: any) => {
  const method = params.method || "GET";
  const accessToken = params.headers?.Authorization
    ? params.headers.Authorization.split(" ")[1]
    : "no_access_token_provided";
  const { timeout } = params;

  if (accessToken && accessToken === "invalid_access_token") {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      response: {
        status: 401,
        error: "invalid_token",
      },
      data: {
        status: 401,
        message: "invalid_access_token",
      },
    });
  }

  const fetchHeaders = params.headers || {
    data: "default sample headers",
    ...(params.url.includes("lastModified") && {
      "last-modified": "mocked_last_modified_date",
    }),
  };

  const fetchParams = params.params || {
    data: "default sample params",
  };

  return Promise.resolve({
    headers: fetchHeaders,
    params: fetchParams,
    data: {
      title: `sample mocked data for ${method} request to ${params.url}`,
      access_token: accessToken,
      headers: fetchHeaders,
      params: fetchParams,
      timeout,
    },
  });
};

// eslint-disable-next-line import/no-default-export
export default axios;
