import '@fortawesome/fontawesome-free/css/all.min.css';

export function HomePage() {
    return (
        <div className="w-[90%] h-[85vh] mt-7 m-auto flex flex-col text-center">
            <p className="text-[28px]">Hello, I'm</p>
            <h1 className="text-[45px] font-bold">Nang Aye Myint Mo Thinn</h1>
            <div className="relative w-82.5 h-82.5 my-1.25 mx-auto">
                {/* rotating ring */}
                <div className="absolute inset-0 rounded-full border-[5px] border-transparent border-t-[#40BDFF] border-r-[#40BDFF] animate-[spin_4s_linear_infinite]"></div>

                <div className="absolute inset-2.5 rounded-full overflow-hidden bg-white">
                    <img className="w-full h-full object-cover object-center rounded-full" src="/images/image_1.jpg" alt="Profile Photo" />
                </div>
            </div>
            <p className="text-[20px]">
                Welcome to my <span>PORTFOLIO</span>.....
            </p>

            <div className='relative top-2 flex justify-center gap-5'>

                <a className='text-[#1877F2] border-2 border-[#187FF2] hover:text-white hover:bg-[#1877F2] w-12.5 h-12.5 flex justify-center items-center rounded-full text-[20px] duration-150 transition hover:-translate-y-1.5 hover:scale-[1.1]' href="https://www.facebook.com/myint.moh.574562/" target="_blank">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>

                <a className='text-[#229ED9] border-2 border-[#229ED9] hover:text-white hover:bg-[#229ED9] w-12.5 h-12.5 flex justify-center items-center rounded-full text-[20px] duration-150 transition hover:-translate-y-1.5 hover:scale-[1.1]' href="https://t.me/nangayemyintmothinn" target="_blank">
                    <i className="fa-brands fa-telegram"></i>
                </a>

                <a className='text-[#EA4335] border-2 border-[#EA4335] hover:text-white hover:bg-[#EA4335] w-12.5 h-12.5 flex justify-center items-center rounded-full text-[20px] duration-150 transition hover:-translate-y-1.5 hover:scale-[1.1]' href="mailto:nangayemyintmothinn@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                </a>

                <a className='text-[#222222] border-2 border-[#222222] hover:text-white hover:bg-[#222222] w-12.5 h-12.5 flex justify-center items-center rounded-full text-[20px] duration-150 transition hover:-translate-y-1.5 hover:scale-[1.1]' href="https://github.com/NangAyeMyintMoThinn" target="_blank">
                    <i className="fa-brands fa-github"></i>
                </a>

                <a className='text-[#0A66C2] border-2 border-[#0A66C2] hover:text-white hover:bg-[#0A66C2] w-12.5 h-12.5 flex justify-center items-center rounded-full text-[20px] duration-150 transition hover:-translate-y-1.5 hover:scale-[1.1]' href="https://www.linkedin.com/in/nang-aye-myint-mo-thinn-05711a262/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B1OqI%2Ft7DSj2rn%2BSBurvMyQ%3D%3D" target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>

            </div>
        </div>
    )
}