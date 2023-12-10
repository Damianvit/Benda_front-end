import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ItemsRow from "./ItemsRow";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    button: {
        // Add any custom styles here
    },
    logo: {
        width: "50px", // Specify the width of the logo image
        height: "50px", // Specify the height of the logo image
        objectFit: "contain", // Specify how the image is resized to fit the space
        // Add any other styles here
    },
    buttonWrapper: {
        margin: "10px 0", // Add space between the buttons
    },
});

const logos = {
    MTN: "mtn.png",
    Airtel: "airtel.png",
    Glo: "glo.png",
    NineMobile: "mobile.png",
};

const NetworkSelection = () => {
    const classes = useStyles();
    const [network, setNetwork] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Add any logic here to fetch the data and airtime plans, validate the input, or display an error message
    }, [network]);

    return (
        <div className={classes.root}>
            {Object.keys(logos).map((key) => (
                <ItemsRow
                    key={key}
                    items={[
                        <div className={classes.buttonWrapper}>
                            <Button
                                onClick={() => setNetwork(key)}
                                selected={network === key}
                                variant={
                                    network === key ? "contained" : "outlined"
                                }
                                className={classes.button}
                            >
                                <img
                                    src={logos[key]}
                                    alt={key}
                                    className={classes.logo}
                                />
                            </Button>
                        </div>,
                    ]}
                    onClick={() => navigate(`/${key}`)} // Pass the click handler directly
                />
            ))}
        </div>
    );
};

export default NetworkSelection;
