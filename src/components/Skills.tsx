export function Skills() {
    return (
        <div id="skills">

            <h2 className="text-(--darkblue)] max-[768px]:text-[30px] max-[768px]:text-center max-[480px]:text-2xl max-[320px]:text-[22px] font-bold text-[40px] mb-5">My Skills</h2>

            <p className="text-[#555] mb-6.25">
                Technologies and tools that I use to build web, desktop,
                and database applications.
            </p>

            <div className="grid grid-cols-3 gap-4 max-[768px]:grid-cols-2 max-[768px]:gap-[15px] max-[480px]:grid-cols-1">

                <div className="bg-[var(--container-background)] rounded-[15px] h-[120px] max-[480px]:h-[120px] max-[320px]:h-[100px] flex flex-col justify-center items-center transition duration-150 hover:-translate-y-2">
                    <i className="fa-brands fa-html5 mb-2.5 text-[40px] max-[320px]:text-[35px] text-[#E34F26]"></i>
                    <span className="font-semibold">HTML</span>
                </div>

                <div className="bg-[var(--container-background)] rounded-[15px] h-[120px] max-[480px]:h-[120px] max-[320px]:h-[100px] flex flex-col justify-center items-center transition duration-150 hover:-translate-y-2">
                    <i className="fa-brands fa-css3-alt mb-2.5 text-[40px] max-[320px]:text-[35px] text-[#1572B6]"></i>
                    <span className="font-semibold">CSS</span>
                </div>

                <div className="bg-[var(--container-background)] rounded-[15px] h-[120px] max-[480px]:h-[120px] max-[320px]:h-[100px] flex flex-col justify-center items-center transition duration-150 hover:-translate-y-2">
                    <i className="fa-brands fa-js mb-2.5 text-[40px] max-[320px]:text-[35px] text-[#F7DF1E]"></i>
                    <span className="font-semibold">JavaScript</span>
                </div>

                <div className="bg-[var(--container-background)] rounded-[15px] h-[120px] max-[480px]:h-[120px] max-[320px]:h-[100px] flex flex-col justify-center items-center transition duration-150 hover:-translate-y-2">
                    <i className="fa-brands fa-react mb-2.5 text-[40px] max-[320px]:text-[35px] text-[#3e889c]"></i>
                    <span className="font-semibold">React</span>
                </div>

                <div className="bg-[var(--container-background)] rounded-[15px] h-[120px] max-[480px]:h-[120px] max-[320px]:h-[100px] flex flex-col justify-center items-center transition duration-150 hover:-translate-y-2">
                    <i className="fa-brands fa-java mb-2.5 text-[40px] max-[320px]:text-[35px] text-[#F89820]"></i>
                    <span className="font-semibold">Java</span>
                </div>

                <div className="bg-[var(--container-background)] rounded-[15px] h-[120px] max-[480px]:h-[120px] max-[320px]:h-[100px] flex flex-col justify-center items-center transition duration-150 hover:-translate-y-2">
                    <i className="fa-solid fa-database mb-2.5 text-[40px] max-[320px]:text-[35px] text-[#FF2D20]"></i>
                    <span className="font-semibold">SQL</span>
                </div>

                <div className="bg-[var(--container-background)] rounded-[15px] h-[120px] max-[480px]:h-[120px] max-[320px]:h-[100px] flex flex-col justify-center items-center transition duration-150 hover:-translate-y-2">
                    <i className="fa-brands fa-laravel mb-2.5 text-[40px] max-[320px]:text-[35px] text-[#336791]"></i>
                    <span className="font-semibold">Laravel</span>
                </div>

                <div className="bg-[var(--container-background)] rounded-[15px] h-[120px] max-[480px]:h-[120px] max-[320px]:h-[100px] flex flex-col justify-center items-center transition duration-150 hover:-translate-y-2">
                    <i className="fa-solid fa-leaf mb-2.5 text-[40px] max-[320px]:text-[35px] text-[#6DB33F]"></i>
                    <span className="font-semibold">Spring Boot</span>
                </div>

            </div>

        </div>
    )
}