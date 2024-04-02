import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCreateShortenedLink } from "./useCreateShortenedLink";
import { generateRandomString } from "../../utils/generateRandomString";
import { useShortenedLinks } from "./useShortenedLinks";
import { doesPathExist } from "../../utils/doesPathExist";
import { Tables } from "../../types";
import { useState } from "react";
import { HiLink } from "react-icons/hi2";

const PATH_LENGTH = 4;

function ShortenForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [shortenedLink, setShortenedLink] = useState("");

    const { register, handleSubmit } = useForm();
    const { createShortenedLink, isPending } = useCreateShortenedLink();
    const { shortenedLinks } = useShortenedLinks();

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        // generating and checking path availability
        const path = generateRandomString(PATH_LENGTH);
        const isAvailable = !doesPathExist(
            path,
            shortenedLinks as Tables<"shortened_links">[],
        );

        if (!isAvailable) onSubmit(formData); // don't know how to test this code, hope it works ;)

        // creating redirect
        const { url } = formData;
        createShortenedLink(
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
                <label
                    className={`input input-bordered flex items-center gap-2`}
                >
                    <HiLink />
                    <input
                        type="url"
                        className="grow"
                        placeholder="Enter an URL to shorten..."
                        required
                        {...register("url", {})}
                    />
                </label>

                <button className="btn btn-primary">
                    {isPending ? (
                        <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                        "Shorten"
                    )}
                </button>
            </form>
        </>
    );
}

export default ShortenForm;
