"use client";

import { Provider } from "react-redux";
import { store } from "../GlobalRedux/store";

export function Providers({ children }: { children: JSX.Element }) {
    return <Provider store={store}>{children}</Provider>;
}
