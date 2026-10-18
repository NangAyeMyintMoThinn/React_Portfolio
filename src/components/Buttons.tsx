
type ButtonProps = {
    buttonName: string
    onClick?: () => void
    isActive?: boolean
    variant?: "default" | "darkMode" | "submit"
    type?: "button" | "submit"
}

export function Buttons({ buttonName, onClick, isActive = false, variant = "default", type = "button" }: ButtonProps) {
    const baseStyle = "transition duration-150 cursor-pointer"
    const styles = {
        default: `w-full p-4.5 mb-3.75 rounded-[10px] text-[18px]
            ${isActive
                ? "bg-[#0D47A1] text-white"
                : "bg-[#f5f5f5] text-[#222222] hover:bg-[#40BDFF]"
            }`,
        darkMode: "w-25 text-[13px] bg-[#0D47A1] text-white rounded-[30px] p-2.5 font-bold hover:text-[#0D47A1] hover:bg-[#40BDFF]",

        submit: "w-[180px] p-2.5 rounded-[30px] bg-[#0D47A1] text-white font-bold hover:text-[#0D47A1] hover:bg-[#40BDFF]"
    }
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyle} ${styles[variant]}`}

        >{buttonName}
        </button>
    )
}