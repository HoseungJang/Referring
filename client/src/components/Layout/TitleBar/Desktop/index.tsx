import React from "react";
import styled from "styled-components";

import { Typography } from "../../../Desktop/Typography";

export const TitleBar: React.FC = () => {
    return (
        <>
            <Padding />
            <Container>
                <Typography.Title>Reffering</Typography.Title>
            </Container>
        </>
    )
};

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid grey;
    text-align: center;
    color: #555555;
    box-shadow: 5px 0 5px grey;
`;

const Padding = styled.div`
    height: 72px;
`
