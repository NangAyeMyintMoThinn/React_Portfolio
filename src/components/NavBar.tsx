import { useState } from "react";
import { Buttons } from "./Buttons";
import { useTheme } from "./ThemeContext";


export function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
    return (
        <nav className="sticky top-0 w-full h-16.25 flex items-center justify-around max-[768px]:justify-between max-[768px]:px-5 max-[768px]:py-[15px] max-[390px]:px-4 max-[390px]:py-3 border-b-2 border-b-solid border-b-[var(--skyblue)] shadow-[0_2px_10px_rgba(0,0,0,0.15)] z-50 bg-(--bg-color)">

            <div
                onClick={() => scrollToSection("home")}
                className="cursor-pointer text-[22px] text-(--skyblue) font-bold">
                Myint Mo
            </div>

            {/* Menu toggle button */}
            <button
                className="hidden max-[768px]:block text-[22px] max-[390px]:text-2xl text-(--skyblue) cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>

            {/* <div className={` flex items-center text-[16px] gap-9 text-center`}> */}
            <div
                className={`flex items-center gap-9 text-center
                        max-[768px]:absolute max-[768px]:top-16.25 max-[768px]:left-0
                        max-[768px]:w-full max-[768px]:flex-col max-[768px]:gap-0
                        max-[768px]:py-5 max-[768px]:bg-(--card-color)
                        max-[768px]:border-b-2 max-[768px]:border-(--skyblue)
                        max-[768px]:shadow-[0_5px_10px_rgba(0,0,0,0.1)]
                        max-[768px]:transition-all max-[768px]:duration-300
                        ${menuOpen
                        ? "max-[768px]:translate-y-0 max-[768px]:opacity-100"
                        : "max-[768px]:-translate-y-[150%] max-[768px]:opacity-0 max-[768px]:pointer-events-none"
                    }`}>
                <button onClick={() => scrollToSection("home")} className="text-(--skyblue) min-w-12 my-3 text-base max-[480px]:text-[15px] duration-100 transition hover:scale-[1.1] hover:font-medium cursor-pointer">Home</button>
                <button onClick={() => scrollToSection("resume")} className="text-(--skyblue) min-w-12 my-3 text-base max-[480px]:text-[15px] duration-100 transition hover:scale-[1.1] hover:font-medium cursor-pointer">Resume</button>
                <button onClick={() => scrollToSection("works")} className="text-(--skyblue) min-w-12 my-3 text-base max-[480px]:text-[15px] duration-100 transition hover:scale-[1.1] hover:font-medium cursor-pointer">Works</button>
                <button onClick={() => scrollToSection("contact")} className="text-(--skyblue) min-w-12 my-3 text-base max-[480px]:text-[15px] duration-100 transition hover:scale-[1.1] hover:font-medium cursor-pointer">Contact</button>
                <a
                    className="text-(--skyblue) min-w-12 my-3 text-base max-[480px]:text-[15px] duration-100 transition hover:scale-[1.1] hover:font-medium "
                    href="/files/NangAyeMyintMoThinn.pdf"
                    download="Nang_Aye_Myint_Mo_Thinn_CV.pdf"
                >Download CV</a>

                <Buttons buttonName={isDark ? "Light Mode" : "Dark Mode"} variant="darkMode" onClick={toggleTheme} />
            </div>

        </nav>
    )
}