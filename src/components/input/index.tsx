import Icon from "@/assets/[slug]/icon";
import { useState } from "react";

type InputProps = {
    placeholder: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | undefined;
    size: "small" | "medium" | "large" | "extraLarge";
    enableLabel: boolean;
    inputType: "text" | "password" | "select";
    showPassword?: boolean;
}

export default function Input(props: InputProps) {
    const [inputType, setInputType] = useState(props.inputType);

    const sizeClass = {
        small: "w-[100px]",
        medium: "w-[200px]",
        large: "w-[80%]",
        extraLarge: "w-full"
    }

    const togglePasswordVisibility = () => {
        setInputType((prev) => (prev === "password" ? "text" : "password"));
    };

    return (
        <div className={`${sizeClass[props.size]} flex flex-col gap-[5px]`}>
            {props.enableLabel && <label className="text-black">{props.label}</label>}
            <div className="w-full  border-[var(--border-color)] border-solid border-2 h-[56px] pl-[15px] rounded-[10px] flex items-center justify-between pr-[15px]">
                <input
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    value={props.value}
                    className="outline-none w-full bg-transparent text-[var(--text-color)]"
                    type={inputType}
                >
                </input>
                {props.inputType === "password" && (
                    <div onClick={togglePasswordVisibility} className="cursor-pointer">
                        <Icon
                            params={{
                                slug: inputType === "password" ? "show" : "hide",
                                width: 20,
                                height: 20,
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}