import { useMutation } from "@tanstack/react-query";
import { createRedirect as apiCreateRedirect } from "../../services/apiRedirects";

interface ParameterTypes {
    path: string;
    redirect: string;
}

export function useCreateRedirect() {
    const { mutate: createRedirect, isPending } = useMutation({
        mutationFn: ({ path, redirect }: ParameterTypes) =>
            apiCreateRedirect(path, redirect),
    });

    return { createRedirect, isPending };
}
