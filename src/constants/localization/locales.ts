/**
 * List of available locales for each region
 * via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import { RegionIdProperties, LocaleArray, RegionId, Locale } from "../../types";

export const locales: RegionIdProperties<LocaleArray> = Object.freeze({
  [RegionId.us]: Object.freeze([Locale.en_US, Locale.es_MX, Locale.pt_BR]),
  [RegionId.eu]: Object.freeze([
    Locale.en_GB,
    Locale.es_ES,
    Locale.fr_FR,
    Locale.ru_RU,
    Locale.de_DE,
    Locale.pt_PT,
    Locale.it_IT,
  ]),
  [RegionId.kr]: Object.freeze([Locale.ko_KR, Locale.zh_TW]),
  [RegionId.cn]: Object.freeze([Locale.zh_CN]),
});
