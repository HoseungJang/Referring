import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Color } from "../../../constants/color";

export const Button: React.FC<{ path: string }> = (props) => {
    return (
        <Container>
            <Link to={props.path}>
                <div className="wrap-text">
                    {props.children}
                </div>
            </Link>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    text-align: center;

    a {
        width: 300px;
        border: 2px solid ${Color.ButtonBorder};
        color: ${Color.MainColor};
        text-decoration: none;

        .wrap-text {
            padding: 10px;
        }
    }
`;
