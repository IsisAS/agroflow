
type ButtonProps = {
    size: "small" | "medium" | "large";
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    backgroundColor: "primary" | "secondary" | "danger";
}
export default function Button(props: ButtonProps) {
    const sizeClass = {
        small: "w-[100px]",
        medium: "w-[160px]",
        large: "w-[80%]"
    }

    const colorClass = {
        primary: "bg-[var(--primary-color)]",
        secondary: "bg-[var(--secondary-color)]",
        danger: "bg-[var(--danger-color)]",
    };

    return (
        <button
            className={`${sizeClass[props.size]} ${colorClass[props.backgroundColor]} py-2 px-4 rounded-md text-white`}
            onClick={(e) => props.onClick(e)}
            type="submit"
        >
            {props.label}
        </button>
    )
}