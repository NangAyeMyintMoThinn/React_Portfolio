
type ButtonProps = {
    buttonName: string
    onClick?: () => void
    isActive?: boolean
    variant?: "default" | "darkMode" | "submit"
    type?: "button" | "submit"
    themeAware?: boolean
}

export function Buttons({ buttonName, onClick, isActive = false, variant = "default", type = "button", themeAware = false }: ButtonProps) {
    const baseStyle = "transition duration-150 cursor-pointer"
    const styles = {
        default: `w-full p-4.5 mb-3.75 rounded-[10px] text-[18px]
            ${isActive
                ? "bg-[var(--darkblue)] text-white"
                : "bg-[#f5f5f5] text-(--text-color)] hover:bg-[var(--skyblue)]"
            }`,
        darkMode: "w-25 text-[13px] bg-[var(--darkblue)] text-white rounded-[30px] p-2.5 font-bold hover:text-(--darkblue)] hover:bg-[var(--skyblue)]",

        submit: "w-[180px] p-[14px] max-[768px]:w-full max-[480px]:p-3 max-[480px]:text-sm rounded-[30px] bg-[var(--darkblue)] text-white font-bold hover:text-(--darkblue)] hover:bg-[var(--skyblue)]"
    }
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyle} ${styles[variant]} ${themeAware ? "theme-aware-button" : ""}`}

        >{buttonName}
        </button>
    )
}