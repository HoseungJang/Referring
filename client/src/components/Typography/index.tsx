import styled from "styled-components";

import { Device } from "../../constants/device";

export const Typography = {
  Title: styled.div`
    font-size: 24px;

    @media ${Device.mobile} {
      font-size: 30px;
    }

    @media ${Device.desktop} {
      font-size: 34px;
    }
  `,
  ErrorMessage: styled.div`
    font-size: 20px;
  `,
};
