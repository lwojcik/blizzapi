import * as localization from './localization';

import '../types';

/** Regions */

export function getAllRegions() {
  return localization.getAllRegions();
}

export function getAllRegionNames() {
  return localization.getAllRegionNames();
}

export function getAllRegionIds() {
  return localization.getAllRegionIds();
}

export function getRegionNameById(regionId: Types.RegionIdAsNumberOrString) {
  return localization.getRegionNameById(regionId);
}

export function validateRegionId(regionId: Types.RegionIdAsNumberOrString) {
  return localization.validateRegionId(regionId);
}

export function getRegionIdByName(regionName: Types.RegionName) {
  return localization.getRegionIdByName(regionName);
}

export function validateRegionName(regionName: Types.RegionName) {
  return localization.validateRegionName(regionName);
}

/** Locales */

export function getAllLocales() {
  return localization.getAllLocales();
}

export function getAllLocaleNames() {
  return localization.getAllLocaleNames();
}

/** Default locales */

export function getAllDefaultLocaleIndexes() {
  return localization.getAllDefaultLocaleIndexes();
}

/** StarCraft II realms */

export function getAllSc2Realms() {
  return localization.getAllSc2Realms();
}
