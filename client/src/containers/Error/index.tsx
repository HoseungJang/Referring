import React from "react";

import { NotFound as Desktop } from "./Desktop";
import { NotFound as Mobile } from "./Mobile";

import { useMediaQuery } from "../../hooks/useMediaQuery";

export const NotFound = () => {
    return (
        <>
            {
                {
                    desktop: <Desktop />,
                    mobile: <Mobile />
                }[useMediaQuery()]
            }
        </>
    )
};
