import { constants } from "../../../../src/constants";

const { REGION_API_HOSTS } = constants;

describe("REGION_API_HOSTS", () => {
  it("should be defined", () => {
    expect(REGION_API_HOSTS).toBeDefined();
  });

  it("should be frozen", () => {
    expect(Object.isFrozen(REGION_API_HOSTS)).toBe(true);
  });

  it("should match snapshot", () => {
    expect(REGION_API_HOSTS).toMatchSnapshot();
  });
});
