import Link from "next/link";
import React from "react";

interface IProps {
    items: { label: string | React.ReactNode; href: string }[];
}

export default function Breadcrumbs({ items }: IProps) {
    return (
        <ul className="flex flex-wrap gap-x-4">
            {items.map(({ href, label }, index) => (
                <React.Fragment key={index}>
                    <li className="flex items-center">
                        <Link
                            className="hover:text-blue-500 transition-all"
                            href={href}
                        >
                            {label}
                        </Link>
                    </li>
                    {index < items.length - 1 ? <span>/</span> : null}
                </React.Fragment>
            ))}
        </ul>
    );
}
