// Still don't know how to avoid shipping this file in dist build
// https://github.com/Microsoft/TypeScript/issues/10908

declare module Types {
  /** Common */
  type Uri = string;
  type HostUri = string;

  /** Regions */
  type RegionId = number;
  type RegionIdKey = string;
  type RegionIdAsNumberOrString = RegionId | RegionIdKey;
  type RegionIdArray = RegionId[];
  type RegionName = string;
  type RegionNameArray = RegionName[];

  /** Locales */
  type Locale = string;
  type LocaleArray = Locale[];

  /** Default locales */
  type DefaultLocaleIndex = number;
  type DefaultLocaleIndexArray = DefaultLocaleIndex[];
  type RegionApiHostUri = Uri;

  /** StarCraft II realms  */
  type Sc2Realm = number;
  type Sc2RealmList = Sc2Realm[];

  /** OAuth */
  type AuthorizeUri = Uri;
  type TokenUri = Uri;
  type CheckTokenUri = Uri;
}