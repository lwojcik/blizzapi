import { constants } from "../../../../src/constants";

const { DEFAULT_LOCALES } = constants;

describe("DEFAULT_LOCALES", () => {
  it("should be defined", () => {
    expect(DEFAULT_LOCALES).toBeDefined();
  });

  it("should be frozen", () => {
    expect(Object.isFrozen(DEFAULT_LOCALES)).toBe(true);
  });

  it("should match snapshot", () => {
    expect(DEFAULT_LOCALES).toMatchSnapshot();
  });
});
