import { fetchFromUri } from "../../../../src/helpers/fetch/fetchFromUri";
import { HttpMethod } from "../../../../src/types";

describe("fetchFromUri()", () => {
  it("should be defined", () => {
    expect(fetchFromUri).toBeDefined();
  });

  it("should be function", () => {
    expect(fetchFromUri).toBeTruthy();
    expect(typeof fetchFromUri).toBe("function");
  });

  it("returns correct response for GET request to a valid uri", async () => {
    expect.assertions(1);
    const response = await fetchFromUri({
      uri: "http://example.org/valid/endpoint",
    });
    expect(response).toMatchSnapshot();
  });

  it("returns correct response for POST request to a valid uri", async () => {
    expect.assertions(1);
    const response = await fetchFromUri({
      uri: "http://example.org/valid/endpoint",
      method: "POST" as HttpMethod,
    });
    expect(response).toMatchSnapshot();
  });

  it("returns correct response for GET request with headers to a valid uri", async () => {
    expect.assertions(1);
    const response = await fetchFromUri({
      uri: "http://example.org/valid/endpoint",
      method: "GET" as HttpMethod,
      headers: {
        data: "sample headers",
      },
    });
    expect(response).toMatchSnapshot();
  });

  it("returns correct response for GET request to uri containing regional characters", async () => {
    expect.assertions(1);
    const response = await fetchFromUri({
      uri: "http://ęxąmple.org/zażółćgęśląjaźń/гордунни/좋은경기",
      method: "GET" as HttpMethod,
    });
    expect(response).toMatchSnapshot();
  });

  it("returns correct response for GET request with params to a valid uri", async () => {
    expect.assertions(1);
    const response = await fetchFromUri({
      uri: "http://example.org/valid/endpoint",
      method: "GET" as HttpMethod,
      params: {
        data: "custom params",
      },
    });
    expect(response).toMatchSnapshot();
  });

  it('returns correct response for GET request with "last-modified" header', async () => {
    expect.assertions(1);
    const response = await fetchFromUri({
      uri: "http://example.org/valid/endpoint/lastModified",
      method: "GET" as HttpMethod,
      params: {
        data: "custom params",
      },
    });
    expect(response).toMatchSnapshot();
  });
});
