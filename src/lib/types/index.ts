// Still don't know how to avoid shipping this file in dist build
// https://github.com/Microsoft/TypeScript/issues/10908

/** Common */
export type Uri = string;
export type HostUri = string;

/** Regions */
export type RegionId = number;
export type RegionIdKey = string;
export type RegionIdAsNumberOrString = RegionId | RegionIdKey;
export type RegionIdArray = RegionId[];
export type RegionName = string;
export type RegionNameArray = RegionName[];

/** Locales */
export type Locale = string;
export type LocaleArray = Locale[];

/** Default locales */
export type DefaultLocaleIndex = number;
export type DefaultLocaleIndexArray = DefaultLocaleIndex[];
export type RegionApiHostUri = Uri;

/** StarCraft II realms  */
export type Sc2Realm = number;
export type Sc2RealmList = Sc2Realm[];

/** OAuth */
export type AuthorizeUri = Uri;
export type TokenUri = Uri;
export type CheckTokenUri = Uri;
