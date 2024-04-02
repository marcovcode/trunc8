import { useLocation } from "react-router-dom";
import { useShortenedLinks } from "../features/shorten/useShortenedLinks";
import { Tables } from "../types";
import { getRedirect } from "../utils/getRedirectFromPath";
import { doesPathExist } from "../utils/doesPathExist";

import FullPageSpinner from "../ui/FullPageSpinner";
import NotFound from "./NotFound";

function Redirect() {
    const location = useLocation();
    const path = location.pathname.slice(1);
    const { shortenedLinks, isLoading } = useShortenedLinks();

    if (isLoading) return <FullPageSpinner />;

    if (doesPathExist(path, shortenedLinks as Tables<"shortened_links">[])) {
        const redirect = getRedirect(
            path,
            shortenedLinks as Tables<"shortened_links">[],
        )!;
        window.location.href = redirect;
    } else {
        return <NotFound />;
    }
}

export default Redirect;
