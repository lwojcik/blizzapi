import * as regions from './localization/regions';

import { RegionIdAsNumberOrString, RegionNameArray } from '../types/localization';

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

  export function getRegionNameById(regionId: RegionIdAsNumberOrString): RegionNameArray {
    return regions.getRegionNameById(regionId);
  }

  export function validateRegionId(regionId: RegionIdAsNumberOrString): Boolean {
    return regions.validateRegionId(regionId);
  }
}
