import { useMedia } from "use-media";

const mobileMediaQuery = "(max-width: 1023px)"

export const useMediaQuery = () => {
    if (useMedia(mobileMediaQuery, window.matchMedia(mobileMediaQuery).matches)) {
        return "mobile";
    } else {
        return "desktop";
    }
};
