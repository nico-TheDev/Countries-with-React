import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import CountryContextProvider from "../contexts/CountryContext";
import ThemeContextProvider from "../contexts/ThemeContext";

export default function Home() {
    return (
        <div>
            <ThemeContextProvider>
                <CountryContextProvider>
                    <Nav />
                    <Header />
                </CountryContextProvider>
            </ThemeContextProvider>
        </div>
    );
}
