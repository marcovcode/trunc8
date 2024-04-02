import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCreateRedirect } from "./useCreateRedirect";
import { generateRandomString } from "../../utils/generateRandomString";
import { useRedirects } from "./useRedirects";
import { checkPathAvailability } from "../../utils/checkPathAvailability";
import { Tables } from "../../types";
import { useState } from "react";

const PATH_LENGTH = 4;

function ShortenForm() {
    const { register, formState, handleSubmit } = useForm();
    const { createRedirect, isPending } = useCreateRedirect();
    const { redirects } = useRedirects();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [shortenedLink, setShortenedLink] = useState("");

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
        createRedirect(
            { path, redirect: url },
            {
                onSuccess: () => {
                    const protocol = location.protocol;
                    const host = location.host;
                    setShortenedLink(`${protocol}//${host}/${path}`);
                    setIsModalOpen(true);
                },
            },
        );
    };

    function handleCloseForm() {
        setIsModalOpen(false);
    }

    return (
        <>
            <input
                type="checkbox"
                className="modal-toggle"
                checked={isModalOpen}
            />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">
                        Your shortened link was created successfully!
                    </h3>
                    <p className="py-4">
                        Your shortened link is:{" "}
                        <a href={shortenedLink} className="link">
                            {shortenedLink}
                        </a>
                    </p>
                    <div className="modal-action">
                        <label className="btn" onClick={handleCloseForm}>
                            Close
                        </label>
                    </div>
                </div>
            </div>

            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
            >
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
        </>
    );
}

export default ShortenForm;
