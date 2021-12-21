import { constants } from "../../../../src/constants";

const { REGIONS } = constants;

describe("REGIONS", () => {
  it("should be defined", () => {
    expect(REGIONS).toBeDefined();
  });

  it("should be frozen", () => {
    expect(Object.isFrozen(REGIONS)).toBe(true);
  });
  it("should match snapshot", () => {
    expect(REGIONS).toMatchSnapshot();
  });
});
