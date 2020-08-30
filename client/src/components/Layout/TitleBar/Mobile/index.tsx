import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Typography } from "../../../Mobile/Typography";

export const TitleBar: React.FC = () => {
    return (
        <>
            <Padding />
            <Container>
                <Link to="/">
                    <Typography.Title>Reffering</Typography.Title>
                </Link>
            </Container>
        </>
    );
};

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid grey;
    text-align: center;
    color: #555555;
    box-shadow: 3px 0 3px grey;

    a {
        color: #555555;
        text-decoration: none;
    }
`;

const Padding = styled.div`
    height: 50px;
`
