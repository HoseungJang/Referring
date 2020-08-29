import React from "react";
import styled from "styled-components";

export const TitleBar: React.FC = () => {
    return (
        <Container>
            <h2>Reffering</h2>
        </Container>
    )
};

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid grey;
    text-align: center;
    color: #555555;
    box-shadow: 5px 0 5px grey;
`;
