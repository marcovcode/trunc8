import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCreateRedirect } from "./useCreateRedirect";
import { generateRandomString } from "../../utils/generateRandomString";
import { useRedirects } from "./useRedirects";
import { checkPathAvailability } from "../../utils/checkPathAvailability";
import { Tables } from "../../types";

const PATH_LENGTH = 4;

function ShortenForm() {
    const { register, formState, handleSubmit } = useForm();
    const { createRedirect, isPending } = useCreateRedirect();
    const { redirects } = useRedirects();

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        // generating and checking path availability
        const path = generateRandomString(PATH_LENGTH);
        const isAvailable = checkPathAvailability(
            path,
            redirects as Tables<"redirects">[],
        );
        if (!isAvailable) onSubmit(formData); // don't know how to test this code, hope it works ;)

        // creating redirect
        const { url } = formData;
        createRedirect({ path, redirect: url });
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <input
                type="url"
                className={`input input-bordered ${formState.errors.url && "input-error"}`}
                placeholder="Enter an URL to shorten..."
                value="http://ciao"
                required
                {...register("url", {})}
            />

            <button className="btn btn-primary">
                {isPending ? (
                    <span className="loading loading-spinner loading-sm text-primary-content"></span>
                ) : (
                    "Shorten"
                )}
            </button>
        </form>
    );
}

export default ShortenForm;
