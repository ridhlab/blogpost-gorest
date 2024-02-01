import Link from "next/link";
import React from "react";

interface IProps {
    items: { label: string; href: string }[];
}

export default function Breadcrumbs({ items }: IProps) {
    return (
        <ul className="flex flex-wrap gap-x-4 text-sm">
            {items.map(({ href, label }, index) => (
                <React.Fragment key={index}>
                    <li>
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
