import { Tables } from "../types";

export function checkPathAvailability(
    path: string,
    redirects: Tables<"redirects">[],
) {
    const paths = redirects.map((redirect) => redirect.path);
    return !paths.includes(path);
}
