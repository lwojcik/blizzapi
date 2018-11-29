import * as regions from './localization/regions';

import { RegionIdAsIntOrString, RegionNameArray } from '../types/localization';

export namespace BattleNetUtils {
  export function getAllRegions() {
    return regions.getAllRegions();
  }

  export function getAllRegionNames() {
    return regions.getAllRegionNames();
  }

  export function getAllRegionIds() {
    return regions.getAllRegionIds();
  }

  export function getRegionNameById(regionId: RegionIdAsIntOrString): RegionNameArray {
    return regions.getRegionNameById(regionId);
  }
}
