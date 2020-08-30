import React from "react";

import { TitleBar as Desktop } from "./Desktop";
import { TitleBar as Mobile } from "./Mobile";

import { useMediaQuery } from "../../../hooks/useMediaQuery";

export const TitleBar: React.FC = () => {
    return (
        <>
            {
                {
                    desktop: <Desktop/>,
                    mobile: <Mobile />
                }[useMediaQuery()]
            }
        </>
    )
};
