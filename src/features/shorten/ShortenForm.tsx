import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCreateRedirect } from "./useCreateRedirect";
import { generateRandomString } from "../../utils/generateRandomString";

const PATH_LENGTH = 4;

function ShortenForm() {
    const { register, formState, handleSubmit } = useForm();
    const { createRedirect, isPending } = useCreateRedirect();

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        const path = generateRandomString(PATH_LENGTH);
        const { url } = formData;
        createRedirect({ path, redirect: url });
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <input
                type="url"
                className={`input input-bordered ${formState.errors.url && "input-error"}`}
                placeholder="Enter an URL to shorten..."
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
