export default function Footer() {
    return (
        <footer className="px-8 md:px-20 py-4">
            <div className="max-w-6xl mx-auto bg-slate-200 dark:bg-slate-700 text-center">
                Copyright &copy;{" "}
                <a href={"https://github.com/ridhlab"} target="_blank">
                    {"Muhammad Ridwan"}
                </a>{" "}
                {new Date().getFullYear()} All rights Reserved
            </div>
        </footer>
    );
}
