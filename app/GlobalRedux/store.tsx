"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countries/countries-slice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

const rootReducer = combineReducers({
    countries: countriesReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
