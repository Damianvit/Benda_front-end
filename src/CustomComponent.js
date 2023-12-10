import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "60vw", // 60% of the viewport width
        position: "relative",
        border: "1px solid black", // Add a border to the div
    },
    arrow: {
        position: "absolute",
        right: 0,
    },
});

const CustomComponent = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {children}
            <ArrowForwardIosIcon className={classes.arrow} />
        </div>
    );
};

export default CustomComponent;
