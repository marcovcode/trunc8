import { useQuery } from "@tanstack/react-query";
import { getShortenedLinks } from "../../services/apiShortenedLinks";

export function useShortenedLinks() {
    const { data: shortenedLinks, isLoading } = useQuery({
        queryFn: getShortenedLinks,
        queryKey: ["shortenedLinks"],
    });

    return { shortenedLinks, isLoading };
}
