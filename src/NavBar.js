import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    IoMdHome,
    IoMdSearch,
    IoMdPerson,
    IoMdMail,
    IoMdStats,
    IoMdTime,
} from "react-icons/io";

const styles = {
    root: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#262738",
        borderTop: "1px solid black",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px 0",
    },
    icon: {
        fontSize: "2rem",
        color: "white",
    },
    text: {
        fontSize: "0.75rem",
        color: "white",
    },
};

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // This should be replaced with real authentication logic

    return (
        <div style={styles.root}>
            <NavLink to="/" style={{ color: "yellow" }}>
                <div style={{ textAlign: "center" }}>
                    <IoMdHome style={styles.icon} />
                </div>
            </NavLink>
            <NavLink to="/mail" style={{ color: "yellow" }}>
                <div style={{ textAlign: "center" }}>
                    <IoMdMail style={styles.icon} />
                </div>
            </NavLink>
            <NavLink to="/stats" style={{ color: "yellow" }}>
                <div style={{ textAlign: "center" }}>
                    <IoMdStats style={styles.icon} />
                </div>
            </NavLink>
            <NavLink to="/history" style={{ color: "yellow" }}>
                <div style={{ textAlign: "center" }}>
                    <IoMdTime style={styles.icon} />
                </div>
            </NavLink>
            {isLoggedIn ? (
                <NavLink
                    to="/profile"
                    style={{ color: "yellow" }}
                    onClick={() => setIsLoggedIn(false)}
                >
                    <div style={{ textAlign: "center" }}>
                        <IoMdPerson style={styles.icon} />
                    </div>
                </NavLink>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Sign In</button>
            )}
        </div>
    );
};

export default NavBar;
