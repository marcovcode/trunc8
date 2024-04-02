function NotFoundTitle() {
    return (
        <p className="flex flex-col items-center gap-4 text-center sm:flex-row">
            <span className="text-4xl font-extrabold">404</span>
            <span>Your shortened link was not found.</span>
        </p>
    );
}

export default NotFoundTitle;
