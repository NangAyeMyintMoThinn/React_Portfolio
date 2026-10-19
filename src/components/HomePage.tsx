import '@fortawesome/fontawesome-free/css/all.min.css';

export function HomePage() {
    return (
        <div id='home' className="scroll-mt-28 h-[90vh] p-5 max-[768px]:mt-22.5 max-[480px]:mt-20 max-[480px]:p-3.75 m-auto flex flex-col justify-around text-center">
            <p className="text-[28px]">Hello, I'm</p>
            <h1 className="text-[45px] max-[768px]:text-[32px] max-[768px]:leading-[1.3] max-[480px]:text-[26px] max-[480px]:leading-[1.4] max-[320px]:text-[22px] font-bold">Nang Aye Myint Mo Thinn</h1>
            <div className="relative w-70 h-70 max-[768px]:w-60 max-[768px]:h-60 max-[480px]:w-45 max-[480px]:h-45 max-[320px]:w-40 max-[320px]:h-40 mx-auto">
                {/* rotating ring */}
                <div className="absolute inset-0 rounded-full border-[5px] border-transparent border-t-(--skyblue) border-r-(--skyblue) animate-[spin_4s_linear_infinite]"></div>

                <div className="absolute inset-2 object-cover rounded-full overflow-hidden bg-white">
                    <img className="w-full h-full object-cover object-center rounded-full" src="/images/image_1.jpg" alt="Profile Photo" />
                </div>
            </div>
            <p className="text-[20px]">
                Welcome to my <span>PORTFOLIO</span>.....
            </p>

            <div className='mt-2 flex justify-center gap-5 max-[768px]:gap-3.75 max-[480px]:gap-3 max-[768px]:flex-wrap5'>

                <a className='text-[#1877F2] max-[768px]:h-11.25 max-[768px]:w-11.25 max-[768px]:text-lg max-[480px]:h-10 max-[480px]:w-10 max-[480px]:text-base max-[320px]:h-9 max-[320px]:w-9 max-[320px]:text-sm border-2 border-[#187FF2] hover:text-white hover:bg-[#1877F2] w-12.5 h-12.5 flex justify-center items-center rounded-full text-[20px] duration-150 transition hover:-translate-y-1.5 hover:scale-[1.1]' href="https://www.facebook.com/myint.moh.574562/" target="_blank">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>

                <a className='text-[#229ED9] max-[768px]:h-11.25 max-[768px]:w-11.25 max-[768px]:text-lg max-[480px]:h-10 max-[480px]:w-10 max-[480px]:text-base max-[320px]:h-9 max-[320px]:w-9 max-[320px]:text-sm border-2 border-[#229ED9] hover:text-white hover:bg-[#229ED9] w-12.5 h-12.5 flex justify-center items-center rounded-full text-[20px] duration-150 transition hover:-translate-y-1.5 hover:scale-[1.1]' href="https://t.me/nangayemyintmothinn" target="_blank">
                    <i className="fa-brands fa-telegram"></i>
                </a>

                <a className='text-[#EA4335] max-[768px]:h-11.25 max-[768px]:w-11.25 max-[768px]:text-lg max-[480px]:h-10 max-[480px]:w-10 max-[480px]:text-base max-[320px]:h-9 max-[320px]:w-9 max-[320px]:text-sm border-2 border-[#EA4335] hover:text-white hover:bg-[#EA4335] w-12.5 h-12.5 flex justify-center items-center rounded-full text-[20px] duration-150 transition hover:-translate-y-1.5 hover:scale-[1.1]' href="mailto:nangayemyintmothinn@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                </a>

                <a className='text-(--text-color)] max-[768px]:h-11.25 max-[768px]:w-11.25 max-[768px]:text-lg max-[480px]:h-10 max-[480px]:w-10 max-[480px]:text-base max-[320px]:h-9 max-[320px]:w-9 max-[320px]:text-sm border-2 border-(--text-color) hover:text-(--bg-color) hover:bg-(--text-color) w-12.5 h-12.5 flex justify-center items-center rounded-full text-[20px] duration-150 transition hover:-translate-y-1.5 hover:scale-[1.1]' href="https://github.com/NangAyeMyintMoThinn" target="_blank">
                    <i className="fa-brands fa-github"></i>
                </a>

                <a className='text-[#0A66C2] max-[768px]:h-11.25 max-[768px]:w-11.25 max-[768px]:text-lg max-[480px]:h-10 max-[480px]:w-10 max-[480px]:text-base max-[320px]:h-9 max-[320px]:w-9 max-[320px]:text-sm border-2 border-[#0A66C2] hover:text-white hover:bg-[#0A66C2] w-12.5 h-12.5 flex justify-center items-center rounded-full text-[20px] duration-150 transition hover:-translate-y-1.5 hover:scale-[1.1]' href="https://www.linkedin.com/in/nang-aye-myint-mo-thinn-05711a262/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B1OqI%2Ft7DSj2rn%2BSBurvMyQ%3D%3D" target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>

            </div>
        </div>
    )
}