import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <nav className="flex justify-center items-center space-x-1 mt-4">
            {links.map((link, index) => {
                return (
                    <Link
                        key={index}
                        href={link.url || "#"}
                        className={`px-4 py-2 text-sm font-medium rounded-md ${link.url
                                ? link.active
                                    ? "bg-blue-600 text-white dark:bg-blue-500"
                                    : "bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                                : "bg-gray-100 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400"
                            } transition-colors duration-150 ease-in-out`}
                        preserveState
                        preserveScroll
                    >
                        <span
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    </Link>
                );
            })}
        </nav>
    );
}
