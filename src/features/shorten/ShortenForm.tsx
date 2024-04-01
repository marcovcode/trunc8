import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

function ShortenForm() {
    const { register, formState, handleSubmit } = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        const { url } = formData;
        console.log(url);
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

            <button className="btn btn-primary">Shorten!</button>
        </form>
    );
}

export default ShortenForm;
