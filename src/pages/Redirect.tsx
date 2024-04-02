import { useLocation } from "react-router-dom";
import { useRedirects } from "../features/shorten/useRedirects";
import { Tables } from "../types";
import { getRedirect } from "../utils/getRedirect";
import { doesPathExist } from "../utils/doesPathExist";

import FullPageSpinner from "../ui/FullPageSpinner";
import NotFound from "./NotFound";

function Redirect() {
    const location = useLocation();
    const path = location.pathname.slice(1);
    const { redirects, isLoading } = useRedirects();

    if (isLoading) return <FullPageSpinner />;

    if (doesPathExist(path, redirects as Tables<"redirects">[])) {
        const redirect = getRedirect(path, redirects as Tables<"redirects">[])!;
        window.location.href = redirect;
    } else {
        return <NotFound />;
    }
}

export default Redirect;
