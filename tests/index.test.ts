import { BlizzAPI } from "../src";
import { RegionName } from "../src/types";

describe("index", () => {
  it("should export BlizzAPI", () => {
    expect(BlizzAPI).toBeDefined();
  });

  it("BlizzAPI should be a class", () => {
    const blizzapi = new BlizzAPI({
      region: "" as RegionName,
      clientId: "",
      clientSecret: "",
    });
    expect(blizzapi instanceof BlizzAPI).toBe(true);
  });
});
