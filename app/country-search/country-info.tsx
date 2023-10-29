import React from "react";
import { useAppSelector } from "../GlobalRedux/store";
import Image from "next/image";

function CountryInfo() {
    const countryData = useAppSelector(
        (state) => state.countries.countryData?.[0]
    );
    const errorText = useAppSelector((state) => state.countries.errorText);

    if (errorText) {
        return <div className="text-red-500">{errorText}</div>;
    }

    if (!countryData) {
        return (
            <div className="mt-2">Please select a country from the list</div>
        );
    }

    const {
        name: { official: countryName },
        capital: [capital],
        region,
        subregion,
        borders,
        population,
        languages,
        currencies,
        timezones,
        flags: { png: flagPng, svg: flagSvg, alt: flagAlt },
    } = countryData;

    const [currencyName, currencySymbol] = Object.values(currencies || {}).map(
        (currency) => [currency.name, currency.symbol]
    );

    const languageList = Object.values(languages || {}).join(", ");
    const borderList = borders?.join(", ") || "N/A";
    const timezoneList = timezones?.join(", ") || "N/A";

    return (
        <section className="mt-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4">{countryName}</h1>
            <div className="border border-gray-700 rounded-md overflow-hidden mb-4 h-auto">
                <Image
                    width={500}
                    height={333.33}
                    src={flagSvg}
                    alt={flagAlt || "Country flag"}
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="text-left">
                    <p className="font-bold">Capital:</p>
                    <p>{capital}</p>
                    <p className="font-bold">Region:</p>
                    <p>{region}</p>
                    <p className="font-bold">Subregion:</p>
                    <p>{subregion}</p>
                    <p className="font-bold">Borders:</p>
                    <p>{borderList}</p>
                </div>
                <div className="text-left">
                    <p className="font-bold">Population:</p>
                    <p>{population}</p>
                    <p className="font-bold">Languages:</p>
                    <p>{languageList}</p>
                    <p className="font-bold">Currencies:</p>
                    <p>{`${currencyName} ${currencySymbol || ""}`}</p>
                    <p className="font-bold">Timezones:</p>
                    <p>{timezoneList}</p>
                </div>
            </div>
        </section>
    );
}

export default CountryInfo;
