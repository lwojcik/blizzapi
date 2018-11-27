import * as regions from './regions';

// todo: interfaces

export default class BattleNetUtils {
  public static getAllRegions() {
    return regions.getAllRegions();
  }

  public static getAllRegionNames() {
    return regions.getAllRegionNames();
  }

  public static getAllRegionIds() {
    return regions.getAllRegionIds();
  }

  public static getRegionNameById(regionId: number): string | string[] {
    return regions.getRegionNameById(regionId);
  }
}
