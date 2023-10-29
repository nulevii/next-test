export interface ICountriesList {
  [key: string]: {
    country: string;
    region: string;
  };
};

export interface ISelectOption {
  value: string;
  label: string;
};

export interface ISelectBlock {
  countryNamesList: ISelectOption[];
}