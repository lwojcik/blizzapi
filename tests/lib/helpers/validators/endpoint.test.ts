import { endpoint as validateEndpoint } from "../../../../src/helpers/validators";

import endpointsJson from "../../../__testData__/endpoints.json";
import invalidEndpointsJson from "../../../__testData__/invalidEndpoints.json";

describe("validateEndpoint()", () => {
  it("should be defined", () => {
    expect(validateEndpoint).toBeDefined();
  });

  it("should be function", () => {
    expect(validateEndpoint).toBeTruthy();
    expect(typeof validateEndpoint).toBe("function");
  });

  (endpointsJson as ReadonlyArray<string>).forEach((endpoint) => {
    it(`should return true for ${endpoint} as valid endpoint`, () => {
      expect(validateEndpoint(endpoint)).toBe(true);
    });
  });

  (invalidEndpointsJson as ReadonlyArray<string>).forEach((invalidEndpoint) => {
    it(`should return false for ${invalidEndpoint} as valid endpoint`, () => {
      expect(validateEndpoint(invalidEndpoint)).toBe(false);
    });
  });
});
