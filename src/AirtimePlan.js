import ItemsRow from "./ItemsRow";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
// Import the images
import MTNLogo from "./assets/mtn.png";
import AirtelLogo from "./assets/airtel.png";
import GloLogo from "./assets/glo.png";
import NineMobileLogo from "./assets/mobile.png";
import {
    Input,
    Logo,
    logos,
    RowContainer,
    StyledRow,
    StyledR,
    Container,
    Form,
    Button,
} from "./PurchaseData";

const AirtimePlan = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const network = location.state?.network;
    const [phoneNumber, setPhoneNumber] = useState("");
    const [Amount, setAmount] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(
            `Purchased ${Amount} Naira  ${network} Airtime. Airtime  will be sent to ${phoneNumber}.`
        );
    };

    return (
        <Container>
            <Logo src={`${logos[network]}`} alt={network} />
            <h1>Airtime</h1>
            <RowContainer>
                <StyledRow>Phone Number</StyledRow>
                <StyledR>
                    <label htmlFor="phoneNumber"></label>
                    <Input
                        id="phoneNumber"
                        type="tel"
                        value={phoneNumber}
                        placeHolder="Enter Reciever's Number here"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </StyledR>
            </RowContainer>
            <RowContainer>
                <StyledRow>Amount</StyledRow>
                <StyledR>
                    <label htmlFor="Amount"></label>
                    <Input
                        id="Amount"
                        type="tel"
                        value={Amount}
                        placeHolder="Enter Amount to be Recharged"
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </StyledR>
            </RowContainer>
            <Form onSubmit={handleSubmit}>
                <Button type="submit">Buy Now</Button>
            </Form>
        </Container>
    );
};

export default AirtimePlan;
