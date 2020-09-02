import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Typography } from "../../../Desktop/Typography";

import { Color } from "../../../../constants/color";

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
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid ${Color.MainColor};
    text-align: center;
    box-shadow: 0 0 10px ${Color.MainColor};

    a {
        color: ${Color.MainColor};
        text-decoration: none;
    }
`;

const Padding = styled.div`
    height: 72px;
`
