import ShortenForm from "../features/shorten/ShortenForm";
import ShortenTitle from "../features/shorten/ShortenTitle";
import FullPageCentered from "../ui/FullPageCentered";

function Shorten() {
    return (
        <FullPageCentered>
            <div className="flex w-96 flex-col gap-4">
                <ShortenTitle />
                <ShortenForm />
            </div>
        </FullPageCentered>
    );
}

export default Shorten;
