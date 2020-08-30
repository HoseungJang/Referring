import React from "react";
import styled from "styled-components";

import { Warning } from "@material-ui/icons";
import { Typography } from "../../../components/Desktop/Typography";
import { Button } from "../../../components/Desktop/Button";

export const NotFound: React.FC = () => {
    return (
        <Container>
            <div className="wrap">
                <Warning style={{ fontSize: 120 }} />
                <div className="wrap-msg">
                    <Typography.ErrorMessage>페이지를 찾을 수 없습니다</Typography.ErrorMessage>
                </div>
                <div className="wrap-button">
                    <Button path="/">홈으로 돌아가기</Button>
                </div>
            </div>
        </Container>
    )
};

const Container = styled.div`
    width: 100%;

    .wrap {
        width: 100%;
        height: 100%;
        padding-top: 15%;
        color: darkgrey;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .wrap-msg {
        margin-top: 20px;
    }

    .wrap-button {
        margin-top: 10px;
    }
`;
