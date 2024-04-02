import { useMutation } from "@tanstack/react-query";
import { createRedirect as apiCreateRedirect } from "../../services/apiRedirects";
import toast from "react-hot-toast";

interface ParameterTypes {
    path: string;
    redirect: string;
}

export function useCreateRedirect() {
    const { mutate: createRedirect, isPending } = useMutation({
        mutationFn: ({ path, redirect }: ParameterTypes) =>
            apiCreateRedirect(path, redirect),
        onError: () =>
            toast.error("An error occurred while creating your shortened link"),
    });

    return { createRedirect, isPending };
}
