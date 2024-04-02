import CreateShortenedLink from "../ui/CreateShortenedLink";
import FullPageCentered from "../ui/FullPageCentered";
import NotFoundTitle from "../ui/NotFoundTitle";

function NotFound() {
    return (
        <FullPageCentered>
            <div className="flex flex-col gap-4">
                <NotFoundTitle />
                <CreateShortenedLink />
            </div>
        </FullPageCentered>
    );
}

export default NotFound;
