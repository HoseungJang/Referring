import React from "react";

import { Home as Desktop } from "./Desktop";
import { Home as Mobile } from "./Mobile";

import { useMediaQuery } from "../../hooks/useMediaQuery";

export const Home = () => {
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
