import * as regions from './localization/regions';

// todo: interfaces

export module BattleNetUtils {
  export function getAllRegions() {
    return regions.getAllRegions();
  }

  export function getAllRegionNames() {
    return regions.getAllRegionNames();
  }

  export function getAllRegionIds() {
    return regions.getAllRegionIds();
  }

  export function getRegionNameById(regionId: number): string | string[] {
    return regions.getRegionNameById(regionId);
  }
}
