import { useNavigate } from "react-router-dom";

function CreateShortenedLink() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    return (
        <button className="btn btn-primary" onClick={handleClick}>
            Create a shortened link
        </button>
    );
}

export default CreateShortenedLink;
