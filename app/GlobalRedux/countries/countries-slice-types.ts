// Country Info

export interface CountryName {
  common: string;
  official: string;
  nativeName: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
};

export interface Currency {
  name: string;
  symbol: string;
}

export interface IDD {
  root: string;
  suffixes: string[];
}

export interface Demonym {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface CapitalInfo {
  latlng: [number, number];
}

export interface PostalCode {
  format: string;
  regex: string;
}

export interface CountryData {
  name: CountryName
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key: string]: Currency;
  };
  idd: IDD;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  latlng: [number, number];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: {
    [key: string]: Demonym;
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: {
    [key: string]: number;
  };
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

// Country State

export interface CountryState {
  countryData: CountryData[] | null;
  isLoading: boolean;
  errorText: string;
}

export type FetchCountryDataPayload = {
  countryCode: string;
};