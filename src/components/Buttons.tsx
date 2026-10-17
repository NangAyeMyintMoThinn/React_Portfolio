
type ButtonProps = {
    buttonName: string
    onClick: () => void
    isActive: boolean
}

export function Buttons({ buttonName, onClick, isActive }: ButtonProps) {

    return (
        <button
            onClick={onClick}
            className={`w-full h-14.25 p-4.5 rounded-[10px] text-[18px] transition duration-150 cursor-pointer
                    ${isActive
                    ? "bg-[#0D47A1] text-white"
                    : "bg-[#f5f5f5] text-[#222222] hover:bg-[#40BDFF]"
                }`}

        >{buttonName}
        </button>
    )
}