import * as localization from './localization';

import { RegionName, RegionIdAsNumberOrString, Locale } from '../types';

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

export function getRegionNameById(regionId: RegionIdAsNumberOrString) {
  return localization.getRegionNameById(regionId);
}

export function validateRegionId(regionId: RegionIdAsNumberOrString) {
  return localization.validateRegionId(regionId);
}

export function getRegionIdByName(regionName: RegionName) {
  return localization.getRegionIdByName(regionName);
}

export function validateRegionName(regionName: RegionName) {
  return localization.validateRegionName(regionName);
}

/** Locales */

export function getAllLocales() {
  return localization.getAllLocales();
}

export function getAllLocaleNames() {
  return localization.getAllLocaleNames();
}

export function getLocalesByRegionId(regionId: RegionIdAsNumberOrString) {
  return localization.getLocalesByRegionId(regionId);
}

export function checkIfLocaleLooksValid(locale: Locale) {
  return localization.checkIfLocaleLooksValid(locale);
}

export function validateLocale(locale: Locale) {
  return localization.validateLocale(locale);
}

export function isLocaleValidForRegionId(locale: Locale, regionId: RegionIdAsNumberOrString) {
  return localization.isLocaleValidForRegionId(locale, regionId);
}

/** Default locales */

export function getAllDefaultLocaleIndexes() {
  return localization.getAllDefaultLocaleIndexes();
}

export function getAllDefaultLocaleNames() {
  return localization.getAllDefaultLocaleNames();
}

export function getDefaultLocaleIndexForRegionId(regionId: RegionIdAsNumberOrString) {
  return localization.getDefaultLocaleIndexForRegionId(regionId);
}

export function getDefaultLocaleNameForRegionId(regionId: RegionIdAsNumberOrString) {
  return localization.getDefaultLocaleNameForRegionId(regionId);
}

/** StarCraft II realms */

export function getAllSc2Realms() {
  return localization.getAllSc2Realms();
}
