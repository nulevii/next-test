"use client";

import { COUTRY_URL } from "@/app/urls";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    CountryData,
    CountryState,
    FetchCountryDataPayload,
} from "./countries-slice-types";

export const initialState: CountryState = {
    countryData: null,
    isLoading: false,
    errorText: "",
};

export const fetchCountryData = createAsyncThunk<
    CountryData[],
    FetchCountryDataPayload,
    { rejectValue: string }
>("countries/fetchCountryData", async ({ countryCode }) => {
    const res = await fetch(`${COUTRY_URL}${countryCode}`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
});

export const counterSlice = createSlice({
    name: "country",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCountryData.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCountryData.fulfilled, (state, action) => {
            state.countryData = action.payload;
            state.isLoading = false;
            state.errorText = "";
        });
        builder.addCase(fetchCountryData.rejected, (state, action) => {
            console.log(action.error);
            state.isLoading = false;
            state.errorText = action.error.message || "Unknown error";
        });
    },
});

export default counterSlice.reducer;
