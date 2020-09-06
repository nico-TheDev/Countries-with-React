import React, { useContext } from "react";
import Search from "./Search";
import { CountryContext } from "../contexts/CountryContext";
import Card from "./Card";
import { ThemeContext } from "../contexts/ThemeContext";
import Loader from './Loader';

export default function Header() {
    const { countries } = useContext(CountryContext);
    const {lightMode} = useContext(ThemeContext);
    return (
        <header className={lightMode ? 'header lightModeBg' : 'header darkMode'}>
            <div className="container">
                <Search />
                <div className="countries">
                    <Loader/>
                    {countries.length >= 1 &&
                        countries.map((country) => (
                            <Card key={country.alpha3Code} details={country} />
                        ))}
                </div>
            </div>
        </header>
    );
}
