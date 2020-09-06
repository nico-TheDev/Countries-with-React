import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import ResultPage from './components/ResultPage';
import "./main.scss";

export default function App() {
    return (
        <Router>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/country/:id" component={ResultPage}></Route>
        </Router>
    );
}
