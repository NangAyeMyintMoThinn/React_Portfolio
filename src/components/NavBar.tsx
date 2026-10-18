import { Buttons } from "./Buttons";

export function NavBar() {
    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
    return (
        <nav className="sticky top-0 w-full h-16.25 flex justify-around items-center p-4.5 border-b-2 border-b-solid border-b-[#40BDFF] shadow-[0_2px_10px_rgba(0,0,0,0.15)] z-50 bg-white">

            <div
                onClick={() => scrollToSection("home")}
                className="cursor-pointer text-[22px] text-[#40BDFF] font-bold">
                Myint Mo
            </div>

            {/* <!-- Hamburger Button --> */}
            <div>
                <i className="fa-solid fa-bars"></i>
            </div>

            <div className="flex items-center  text-[16px] gap-9 text-center">
                <button onClick={() => scrollToSection("home")} className="text-[#40BDFF] min-w-12 duration-100 transition hover:scale-[1.1] hover:font-medium">Home</button>
                <button onClick={() => scrollToSection("resume")} className="text-[#40BDFF] min-w-12 duration-100 transition hover:scale-[1.1] hover:font-medium">Resume</button>
                <button onClick={() => scrollToSection("works")} className="text-[#40BDFF] min-w-12 duration-100 transition hover:scale-[1.1] hover:font-medium">Works</button>
                <button onClick={() => scrollToSection("contact")} className="text-[#40BDFF] min-w-12 duration-100 transition hover:scale-[1.1] hover:font-medium">Contact</button>
                <a
                    className="text-[#40BDFF] min-w-12 duration-100 transition hover:scale-[1.1] hover:font-medium"
                    href="/files/NangAyeMyintMoThinn.pdf"
                    download="Nang_Aye_Myint_Mo_Thinn_CV.pdf"
                >Download CV</a>

                <Buttons buttonName="Dark Mode" variant="darkMode" />
            </div>

        </nav>
    )
}