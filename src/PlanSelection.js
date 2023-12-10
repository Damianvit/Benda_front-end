import React, { useState } from "react";
import { Button, ButtonGroup, Box, Typography } from "@material-ui/core";

// The data array is given as a prop to the component
const PlanSelection = ({ data }) => {
    // Assume the default network is MTN
    const [network, setNetwork] = useState("MTN");
    // Initialize the selected product as null
    const [product, setProduct] = useState(null);

    // Find the network object in the data array
    const networkObj = data.find((obj) => obj.network === network);

    // Get the product names from the network object
    const productNames = Object.keys(networkObj.products);

    // Handle the product button click
    const handleProductClick = (name) => {
        // Set the selected product to the name
        setProduct(name);
    };

    // Render the product buttons in a row
    const renderProductButtons = () => {
        return (
            <ButtonGroup variant="contained" color="primary">
                {productNames.map((name) => (
                    <Button key={name} onClick={() => handleProductClick(name)}>
                        {name}
                    </Button>
                ))}
            </ButtonGroup>
        );
    };

    // Render the product details in a row
    const renderProductDetails = () => {
        // Get the product object from the network object
        const productObj = networkObj.products[product];

        // Get the keys and values from the product object
        const keys = Object.keys(productObj);
        const values = Object.values(productObj);

        return (
            <Box
                display="flex"
                justifyContent="space-around"
                alignItems="center"
            >
                {keys.map((key, index) => (
                    <Box key={key} display="flex" flexDirection="column">
                        <Typography variant="h6">{key}</Typography>
                        <Typography variant="body1">
                            {JSON.stringify(values[index])}
                        </Typography>
                    </Box>
                ))}
            </Box>
        );
    };

    return (
        <Box>
            <Typography variant="h4">Plan Selection</Typography>
            <Typography variant="h5">Network: {network}</Typography>
            <Box>{renderProductButtons()}</Box>
            {product && <Box>{renderProductDetails()}</Box>}
        </Box>
    );
};

export default PlanSelection;
