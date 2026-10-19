type FormFieldProps = {
    type?: string
    id: string
    name?: string
    rows?: number
    placeholder: string
    required?: boolean
    multiline?: boolean
}

export function FormField({ type = "text", id, placeholder, rows, required = false, multiline = false }: FormFieldProps) {
    if (multiline) {
        return (
            <textarea
                id={id}
                name={id}
                rows={rows}
                placeholder={placeholder}
                required={required}
                className="w-full h-48 max-[480px]:p-3 max-[480px]:text-sm p-4 rounded-xl border-2 border-[#d6e8f7] placeholder:text-(--secondary-text)] text-[16px] outline-0 resize-none transition duration-150 focus:border-[var(--skyblue)] focus:shadow-[0_0_10px_var(--skyblue)33]"
            ></textarea>
        )
    }
    return (
        <input
            type={type}
            id={id}
            name={id}
            placeholder={placeholder}
            required={required}
            className="w-full h-14.25 max-[480px]:p-3 max-[480px]:text-sm p-4 rounded-xl border-2 border-[#d6e8f7] placeholder:text-(--secondary-text)] text-[16px] outline-0 transition duration-150 focus:border-[var(--skyblue)] focus:shadow-[0_0_10px_var(--skyblue)33]"
        />
    )
}