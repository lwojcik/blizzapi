import * as localization from './localization';

import { RegionId, RegionName, RegionIdAsNumberOrString, RegionNameArray } from '../types/localization';

export namespace BattleNetUtils {

  /** Regions */

  export function getAllRegions() {
    return localization.Regions.getAllRegions();
  }

  export function getAllRegionNames() {
    return localization.Regions.getAllRegionNames();
  }

  export function getAllRegionIds() {
    return localization.Regions.getAllRegionIds();
  }

  export function getRegionNameById(regionId: RegionIdAsNumberOrString): RegionNameArray {
    return localization.Regions.getRegionNameById(regionId);
  }

  export function validateRegionId(regionId: RegionIdAsNumberOrString) {
    return localization.Regions.validateRegionId(regionId);
  }

  export function getRegionIdByName(regionName: RegionName): RegionId {
    return localization.Regions.getRegionIdByName(regionName);
  }

  export function validateRegionName(regionName: RegionName) {
    return localization.Regions.validateRegionName(regionName);
  }

  /** Default locales */

  export function getAllDefaultLocaleIndexes() {
    return localization.DefaultLocales.getAllDefaultLocaleIndexes();
  }
  
}
