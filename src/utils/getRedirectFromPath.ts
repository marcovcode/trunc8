import { Tables } from "../types";

export function getRedirect(
    path: string,
    redirects: Tables<"shortened_links">[],
) {
    return redirects.filter((redirect) => path === redirect.path)[0].redirect;
}
