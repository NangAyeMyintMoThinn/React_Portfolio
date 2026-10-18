import { Buttons } from "./Buttons";

export function NavBar() {
    return (
        <nav className="sticky top-0 w-full h-16.25 flex justify-around items-center p-4.5 border-b-2 border-b-solid border-b-[#40BDFF] shadow-[0_2px_10px_rgba(0,0,0,0.15)] z-50 bg-white">

            <div className="cursor-pointer text-[22px] text-[#40BDFF] font-bold">
                <a href="#">Myint Mo</a>
            </div>

            {/* <!-- Hamburger Button --> */}
            <div>
                <i></i>
            </div>

            <div className="flex items-center  text-[16px] gap-9 text-center">
                <a className="text-[#40BDFF] min-w-12 duration-100 transition hover:scale-[1.1] hover:font-medium" href="#">Home</a>
                <a className="text-[#40BDFF] min-w-12 duration-100 transition hover:scale-[1.1] hover:font-medium" href="#">Resume</a>
                <a className="text-[#40BDFF] min-w-12 duration-100 transition hover:scale-[1.1] hover:font-medium" href="#">Works</a>
                <a className="text-[#40BDFF] min-w-12 duration-100 transition hover:scale-[1.1] hover:font-medium" href="#">About Me</a>
                <a className="text-[#40BDFF] min-w-12 duration-100 transition hover:scale-[1.1] hover:font-medium" href="#">Contact</a>

                <Buttons buttonName="Dark Mode" variant="darkMode" />
            </div>

        </nav>
    )
}