import React from "react";
import styled from "styled-components";

import { Warning } from "@material-ui/icons";
import { Typography } from "../../components/Typography";
import { LinkButton } from "../../components/Button";

import { Color } from "../../constants/color";
import { Device } from "../../constants/device";

export const NotFound: React.FC = () => {
  return (
    <Container>
      <div className="wrap">
        <Warning className="wrap-img" />
        <div className="wrap-msg">
          <Typography.ErrorMessage>
            페이지를 찾을 수 없습니다
          </Typography.ErrorMessage>
        </div>
        <div className="wrap-button">
          <LinkButton path="/">홈으로 돌아가기</LinkButton>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  .wrap {
    width: 100%;
    height: 100%;
    color: ${Color.Grey1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .wrap-button {
      width: 250px;
    }

    .wrap-img {
      font-size: 130px;
    }

    @media ${Device.mobile} {
      .wrap-button {
        width: 300px;
      }

      .wrap-img {
        font-size: 150px;
      }
    }

    @media ${Device.tablet} {
      .wrap-button {
        width: 350px;
      }

      .wrap-img {
        font-size: 130px;
      }
    }

    @media ${Device.desktop} {
      .wrap-button {
        width: 400px;
      }

      .wrap-img {
        font-size: 120px;
      }
    }

    .wrap-msg {
      margin-top: 20px;
    }

    .wrap-button {
      margin-top: 10px;
    }
  }
`;
