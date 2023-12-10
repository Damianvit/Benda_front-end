import React from "react";
import ItemsRow from "./ItemsRow";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
// Import the images
import MTNLogo from "./assets/mtn.png";
import AirtelLogo from "./assets/airtel.png";
import GloLogo from "./assets/glo.png";
import NineMobileLogo from "./assets/mobile.png";
const data = [
    {
        network: "MTN",
        products: {
            "SME DATA": {
                "1GB": {
                    price: "N300",
                    duration: "30 days",
                },
                "2GB": {
                    price: "N500",
                    duration: "30 days",
                },
                "5GB": {
                    price: "N1000",
                    duration: "30 days",
                },
            },
        },
    },
    {
        network: "Glo",
        products: {
            "SME DATA": {
                "1GB": {
                    price: "N300",
                    duration: "30 days",
                },
                "2GB": {
                    price: "N500",
                    duration: "30 days",
                },
                "5GB": {
                    price: "N1000",
                    duration: "30 days",
                },
            },
        },
    },
    {
        network: "Airtel",
        products: {
            "SME DATA": {
                "1GB": {
                    price: "N300",
                    duration: "30 days",
                },
                "2GB": {
                    price: "N500",
                    duration: "30 days",
                },
                "5GB": {
                    price: "N1000",
                    duration: "30 days",
                },
            },
        },
    },
    {
        network: "NineMobile",
        products: {
            "SME DATA": {
                "1GB": {
                    price: "N300",
                    duration: "30 days",
                },
                "2GB": {
                    price: "N500",
                    duration: "30 days",
                },
                "5GB": {
                    price: "N1000",
                    duration: "30 days",
                },
            },
        },
    },
    // Add the other networks and products here
];
const Logo = styled.img`
    width: 50px;
    margin-top: 10px;
`;

const logos = {
    MTN: MTNLogo,
    Airtel: AirtelLogo,
    Glo: GloLogo,
    NineMobile: NineMobileLogo,
};
const DataPlans = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const network = location.state?.network;

    // Find the correct network data
    const networkData = data.find((net) => net.network === network);

    if (!networkData) {
        // Handle the case when networkData is not found
        return <div>Network data not found</div>;
    }

    return (
        <div>
            <Logo src={`${logos[network]}`} alt={network} />
            {Object.entries(networkData.products["SME DATA"]).map(
                ([key, value]) => {
                    const items = [key, value.price, value.duration];
                    return (
                        <ItemsRow
                            key={key}
                            items={items}
                            onClick={() =>
                                navigate("/PurchaseData", {
                                    state: {
                                        network: network,
                                        plan: items,
                                    },
                                })
                            }
                        />
                    );
                }
            )}
        </div>
    );
};

export default DataPlans;
