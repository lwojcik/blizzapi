import { Regions, Locales, DefaultLocales, Sc2Realms } from './localization';

import '../types';

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

  export function getRegionNameById(regionId: Types.RegionIdAsNumberOrString) {
    return Regions.getRegionNameById(regionId);
  }

  export function validateRegionId(regionId: Types.RegionIdAsNumberOrString) {
    return Regions.validateRegionId(regionId);
  }

  export function getRegionIdByName(regionName: Types.RegionName) {
    return Regions.getRegionIdByName(regionName);
  }

  export function validateRegionName(regionName: Types.RegionName) {
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

    /** StarCraft II realms */

    export function getAllSc2Realms() {
      return Sc2Realms.getAllSc2Realms();
    }
}
