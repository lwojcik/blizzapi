import { constants } from "../../../../src/constants";

const { SC2_REALMS } = constants;

describe("SC2_REALMS", () => {
  it("should be defined", () => {
    expect(SC2_REALMS).toBeDefined();
  });

  it("should be frozen", () => {
    expect(Object.isFrozen(SC2_REALMS)).toBe(true);
  });

  it("should match snapshot", () => {
    expect(SC2_REALMS).toMatchSnapshot();
  });
});
