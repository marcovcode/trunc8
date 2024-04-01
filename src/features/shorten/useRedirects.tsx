import { useQuery } from "@tanstack/react-query";
import { getRedirects } from "../../services/apiRedirects";

export function useRedirects() {
    const { data: redirects, isLoading } = useQuery({
        queryFn: getRedirects,
        queryKey: ["redirects"],
    });

    return { redirects, isLoading };
}
