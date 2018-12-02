import { Regions, Locales, DefaultLocales } from './localization';

import { RegionId, RegionName, RegionIdAsNumberOrString, RegionNameArray } from '../types/localization';

export namespace BattleNetUtils {
  /** Regions */

  export function getAllRegions() {
    return Regions.getAllRegions();
  }

  export function getAllRegionNames() {
    return Regions.getAllRegionNames();
  }

  export function getAllRegionIds() {
    return Regions.getAllRegionIds();
  }

  export function getRegionNameById(regionId: RegionIdAsNumberOrString): RegionNameArray {
    return Regions.getRegionNameById(regionId);
  }

  export function validateRegionId(regionId: RegionIdAsNumberOrString) {
    return Regions.validateRegionId(regionId);
  }

  export function getRegionIdByName(regionName: RegionName): RegionId {
    return Regions.getRegionIdByName(regionName);
  }

  export function validateRegionName(regionName: RegionName) {
    return Regions.validateRegionName(regionName);
  }

  /** Locales */

  export function getAllLocales() {
    return Locales.getAllLocales();
  }

  export function getAllLocaleNames() {
    return Locales.getAllLocaleNames();
  }

  /** Default locales */

  export function getAllDefaultLocaleIndexes() {
    return DefaultLocales.getAllDefaultLocaleIndexes();
  }
}
