/**
 * List of available locales for each region
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import {
  RegionIdProperties,
  LocaleArray,
  Locale,
  RegionIdEnum,
} from "../../types";

export const locales: RegionIdProperties<LocaleArray> = Object.freeze({
  [RegionIdEnum.us]: Object.freeze([Locale.en_US, Locale.es_MX, Locale.pt_BR]),
  [RegionIdEnum.eu]: Object.freeze([
    Locale.en_GB,
    Locale.es_ES,
    Locale.fr_FR,
    Locale.ru_RU,
    Locale.de_DE,
    Locale.pt_PT,
    Locale.it_IT,
  ]),
  [RegionIdEnum.kr]: Object.freeze([Locale.ko_KR, Locale.zh_TW]),
  [RegionIdEnum.cn]: Object.freeze([Locale.zh_CN]),
});
