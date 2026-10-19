export function Skills() {
    return (
        <div id="skills">

            <h2 className="text-[var(--darkblue)] font-bold text-[40px] mb-5">My Skills</h2>

            <p className="text-[#555] mb-6.25">
                Technologies and tools that I use to build web, desktop,
                and database applications.
            </p>

            <div className="grid grid-cols-4 auto-cols-fr gap-5">

                <div className="bg-[var(--container-background)] rounded-[15px] h-37.5 flex flex-col justify-center items-center transition duration-150 hover:-translate-y-2">
                    <i className="fa-brands fa-html5 text-[50px] mb-3.75 text-[#E34F26]"></i>
                    <span className="font-semibold">HTML</span>
                </div>

                <div className="bg-[var(--container-background)] rounded-[15px] h-37.5 flex flex-col justify-center items-center transition duration-150 hover:-translate-y-2">
                    <i className="fa-brands fa-css3-alt text-[50px] mb-3.75 text-[#1572B6]"></i>
                    <span className="font-semibold">CSS</span>
                </div>

                <div className="bg-[var(--container-background)] rounded-[15px] h-37.5 flex flex-col justify-center items-center transition duration-150 hover:-translate-y-2">
                    <i className="fa-brands fa-js text-[50px] mb-3.75 text-[#F7DF1E]"></i>
                    <span className="font-semibold">JavaScript</span>
                </div>

                <div className="bg-[var(--container-background)] rounded-[15px] h-37.5 flex flex-col justify-center items-center transition duration-150 hover:-translate-y-2">
                    <i className="fa-brands fa-react text-[50px] mb-3.75 text-[#3e889c]"></i>
                    <span className="font-semibold">React</span>
                </div>

                <div className="bg-[var(--container-background)] rounded-[15px] h-37.5 flex flex-col justify-center items-center transition duration-150 hover:-translate-y-2">
                    <i className="fa-brands fa-java text-[50px] mb-3.75 text-[#F89820]"></i>
                    <span className="font-semibold">Java</span>
                </div>

                <div className="bg-[var(--container-background)] rounded-[15px] h-37.5 flex flex-col justify-center items-center transition duration-150 hover:-translate-y-2">
                    <i className="fa-solid fa-database text-[50px] mb-3.75 text-[#FF2D20]"></i>
                    <span className="font-semibold">SQL</span>
                </div>

                <div className="bg-[var(--container-background)] rounded-[15px] h-37.5 flex flex-col justify-center items-center transition duration-150 hover:-translate-y-2">
                    <i className="fa-brands fa-laravel text-[50px] mb-3.75 text-[#336791]"></i>
                    <span className="font-semibold">Laravel</span>
                </div>

                <div className="bg-[var(--container-background)] rounded-[15px] h-37.5 flex flex-col justify-center items-center transition duration-150 hover:-translate-y-2">
                    <i className="fa-solid fa-leaf text-[50px] mb-3.75 text-[#6DB33F]"></i>
                    <span className="font-semibold">Spring Boot</span>
                </div>

            </div>

        </div>
    )
}