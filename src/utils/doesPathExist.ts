import { Tables } from "../types";

export function doesPathExist(
    path: string,
    redirects: Tables<"shortened_links">[],
) {
    const paths = redirects.map((redirect) => redirect.path);
    return paths.includes(path);
}
