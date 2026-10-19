import { useState } from 'react'
import { Buttons } from './Buttons'
import Education from './Education'
import Experience from './Experience'
import { Skills } from './Skills'

export function Resume() {
    const [activeSection, setActiveSection] = useState("Skills")
    return (
        <section id='resume' className='scroll-mt-28 w-[90%] h-[85vh] mt-25 m-auto flex gap-12.5'>

            <div className='w-[30%]'>
                {/* <h1 className='text-(--darkblue)] text-[42px] relative top-5 font-bold'>Why Hire Me?</h1> */}

                <h1 className='text-(--darkblue) text-[42px] font-bold mb-5'>Why Hire Me?</h1>
                <p className='text-[#555] leading-[1.8] mb-7.5'>

                    {/* <p className='text-[#555] leading-[1.8] relative top-7.5'> */}
                    Passionate Computer Science student with experience in web
                    development, databases, software engineering, and IoT systems.
                </p>
                <div>
                    <Buttons onClick={() => setActiveSection("Skills")} isActive={activeSection === "Skills"} themeAware buttonName='Skills' />
                    <Buttons onClick={() => setActiveSection("Education")} isActive={activeSection === "Education"} themeAware buttonName='Education' />
                    <Buttons onClick={() => setActiveSection("Experience")} isActive={activeSection === "Experience"} themeAware buttonName='Experience' />
                </div>
            </div>

            <div className='w-[70%]'>

                {activeSection === "Skills" && <Skills />}
                {activeSection === "Education" && <Education />}
                {activeSection === "Experience" && <Experience />}

            </div>

        </section>
    )
}