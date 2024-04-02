import { useMutation } from "@tanstack/react-query";
import { createShortenedLink as apiCreateRedirect } from "../../services/apiShortenedLinks";

import toast from "react-hot-toast";

interface ParameterTypes {
    path: string;
    redirect: string;
}

export function useCreateShortenedLink() {
    const { mutate: createShortenedLink, isPending } = useMutation({
        mutationFn: ({ path, redirect }: ParameterTypes) =>
            apiCreateRedirect(path, redirect),
        onError: () =>
            toast.error("An error occurred while creating your shortened link"),
    });

    return { createShortenedLink, isPending };
}
