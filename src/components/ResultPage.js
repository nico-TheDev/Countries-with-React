import React from "react";
import Nav from "./Nav";
import CountryContextProvider from "../contexts/CountryContext";
import ResultDisplay from "./ResultDisplay";
import ThemeContextProvider from "../contexts/ThemeContext";

export default function ResultPage() {


    return (
        <ThemeContextProvider>
            <CountryContextProvider>
                <Nav />
                <ResultDisplay />
            </CountryContextProvider>
        </ThemeContextProvider>
    );
}
