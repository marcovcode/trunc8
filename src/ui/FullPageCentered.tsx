import { PropsWithChildren } from "react";

function FullPageCentered({ children }: PropsWithChildren) {
    return (
        <div className="flex h-screen items-center justify-center">
            {children}
        </div>
    );
}

export default FullPageCentered;
