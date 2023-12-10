import "./App.css";
import AppBar from "./AppBar";
import NavBar from "./NavBar";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import DataPlans from "./DataPlans";
import React from "react";
import PurchaseData from "./PurchaseData";
import Network from "./Network";
import AirtimePlan from "./AirtimePlan";
const networks = ["MTN", "Glo", "Airtel", "NineMobile"]; // fix: use an array

function App() {
    return (
        <div className="App">
            <AppBar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {networks.map((network) => (
                        <React.Fragment key={network}>
                            <Route
                                path={`/${network}`}
                                element={<Network network={network} />}
                            />
                            <Route
                                path={`/${network}/Dataplan`}
                                element={<DataPlans network= {network}/>}
                            />
                            <Route
                                path={`/${network}/Airtimeplan`}
                                element={<AirtimePlan network={network} />}
                            />
                            } />
                            <Route
                                path="/PurchaseData"
                                element={<PurchaseData />}
                            />
                        </React.Fragment>
                    ))}
                </Routes>
            </main>
            <NavBar />
        </div>
    );
}

export default App;
