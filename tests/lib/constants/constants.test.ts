import { constants } from "../../../src/constants";

describe("CONSTANTS class", () => {
  it("should be defined", () => {
    expect(constants).toBeDefined();
  });

  it("should match snapshot", () => {
    expect(constants).toMatchSnapshot();
  });
});
