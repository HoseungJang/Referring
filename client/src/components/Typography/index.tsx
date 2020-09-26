import styled from "styled-components";

import { Device } from "../../constants/device";

export const Typography = {
  Title: styled.div`
    font-size: 24px;

    @media ${Device.mobile} {
      font-size: 30px;
    }

    @media ${Device.tablet} {
      font-size: 32px;
    }

    @media ${Device.desktop} {
      font-size: 34px;
    }
  `,
  ErrorMessage: styled.div`
    font-size: 18px;

    @media ${Device.mobile} {
      font-size: 22px;
    }

    @media ${Device.tablet} {
      font-size: 24px;
    }

    @media ${Device.desktop} {
      font-size: 25px;
    }
  `,
  ModalTitle: styled.div`
    font-size: 15px;

    @media ${Device.mobile} {
      font-size: 20px;
    }

    @media ${Device.tablet} {
      font-size: 25px;
    }

    @media ${Device.desktop} {
      font-size: 30px;
    }
  `,
};
