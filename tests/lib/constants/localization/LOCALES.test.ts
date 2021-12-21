import { constants } from "../../../../src/constants";

const { LOCALES } = constants;

describe("LOCALES", () => {
  it("should be defined", () => {
    expect(LOCALES).toBeDefined();
  });

  it("should be frozen", () => {
    expect(Object.isFrozen(LOCALES)).toBe(true);
  });

  it("should match snapshot", () => {
    expect(LOCALES).toMatchSnapshot();
  });
});
