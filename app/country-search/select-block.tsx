"use client";
import Select, { SingleValue } from "react-select";
import { useAppSelector, useAppDispatch } from "../GlobalRedux/store";
import CountryInfo from "./country-info";
import { fetchCountryData } from "../GlobalRedux/countries/countries-slice";
import { ISelectBlock, ISelectOption } from "./countrie-search.types";

function SelectBlock({ countryNamesList }: ISelectBlock) {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state.countries.isLoading);

    return (
        <main className="flex flex-col items-center justify-between p-4">
            <Select
                instanceId="select-country"
                onChange={(e: SingleValue<ISelectOption>) => {
                    dispatch(fetchCountryData({ countryCode: e?.value || "" }));
                }}
                options={countryNamesList}
                placeholder="Ukraine"
                className="w-96"
            />
            {isLoading ? <div>Loading...</div> : <CountryInfo />}
        </main>
    );
}

export default SelectBlock;
