import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppBar from "./AppBar";
import NavBar from "./NavBar";
import NetworkSelection from "./NetworkSelection";
import PlanSelection from "./PlanSelection";
import DataPlans from "./DataPlans";
import ItemsRow from "./ItemsRow";
import CustomComponent from "./CustomComponent";
function Home() {
    return (
        <div className="App">
            <NetworkSelection />
        </div>
    );
}

export default Home;
