import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

const Background = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled(animated.div)`
    width: 80%;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 1000;
    border-radius: 10px;
    background: #fff;
    padding: 10px;
    overflow: auto;
`;

const CloseModalButton = styled.button`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    background: #999;
    color: #fff;
    font-size: 24px;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Modal = ({ showModal, setShowModal, title, content }) => {
    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    });

    return (
        <>
            {showModal ? (
                <Background>
                    <ModalWrapper style={animation}>
                        <h2>{title}</h2>
                        <p>{content}</p>
                        <CloseModalButton
                            onClick={() => setShowModal((prev) => !prev)}
                        >
                            X
                        </CloseModalButton>
                    </ModalWrapper>
                </Background>
            ) : null}
        </>
    );
};

export default Modal;
