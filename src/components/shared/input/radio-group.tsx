import React from "react";

interface IProps {
    items: { label: React.ReactNode; value: string }[];
    name: string;
    value?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function RadioGroup({
    items,
    name,
    value: valueGroup,
    onChange,
}: IProps) {
    return (
        <div className="flex gap-x-4 gap-y-2 flex-wrap">
            {items.map(({ label, value }, index) => (
                <div key={index} className="flex items-center gap-x-1">
                    <input
                        type="radio"
                        name={name}
                        id={value}
                        value={value}
                        checked={value === valueGroup}
                        onChange={onChange}
                    />
                    <label htmlFor={value}>{label}</label>
                </div>
            ))}
        </div>
    );
}
