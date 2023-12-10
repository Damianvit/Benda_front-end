import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaMobileAlt } from "react-icons/fa";
import MTNLogo from "./assets/mtn.png";
import AirtelLogo from "./assets/airtel.png";
import GloLogo from "./assets/glo.png";
import NineMobileLogo from "./assets/mobile.png";

export const Container = styled.div`
    text-align: center;
    margin: 2em;
`;

export const Title = styled.h1`
    color: #333;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px;
`;

export const Input = styled.input`
    width: 95%;
    margin: 10px 0;
    padding: 10px;
`;

export const Button = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export const RowContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 -1px;
`;

export const StyledRow = styled.div`
    flex: 1;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background-color: #f2f2f2;
`;

export const StyledR = styled.div`
    flex: 2;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img`
    width: 50px;
    margin-top: 10px;
`;

export const logos = {
    MTN: MTNLogo,
    Airtel: AirtelLogo,
    Glo: GloLogo,
    NineMobile: NineMobileLogo,
};

const PurchaseData = () => {
    const location = useLocation();
    const { network, plan } = location.state;
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(
            `Purchased ${plan[0]} for ${network} network. Data will be sent to ${phoneNumber}.`
        );
    };

    return (
        <Container>
            <Title>
                <FaMobileAlt /> <br /> Purchase {plan[0]} Data
            </Title>
            <Logo src={logos[network]} alt={network} />
            <RowContainer>
                <StyledRow>Price</StyledRow>
                <StyledR>{plan[1]}</StyledR>
            </RowContainer>
            <RowContainer>
                <StyledRow>Duration</StyledRow>
                <StyledR>{plan[2]}</StyledR>
            </RowContainer>
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
            <Form onSubmit={handleSubmit}>
                <Button type="submit">Buy Now</Button>
            </Form>
        </Container>
    );
};

export default PurchaseData;
