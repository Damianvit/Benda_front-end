import React from "react";
import styled from "styled-components";
import { GoPaperAirplane } from "react-icons/go";

const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    align-items: center;
    justify-content: space-between;
    margin: 10px auto;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background-color: #f2f2f2;

    &:active {
        background-color: #ddd; // Change the color when clicked
    }
`;

const Item = styled.span`
    margin: 0 10px;
    font-size: 16px;
`;

const ItemsRow = ({ items, onClick }) => {
    const handleClick = (event) => {
        if (onClick) {
            onClick();
        }
        event.stopPropagation(); // Prevent the click event from propagating up
    };

    return (
        <StyledRow onClick={handleClick}>
            {items.map((item, index) => (
                <Item key={index}>{item}</Item>
            ))}
            <GoPaperAirplane />
        </StyledRow>
    );
};

export default ItemsRow;
