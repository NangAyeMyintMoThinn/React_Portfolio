import { useState } from 'react'
import { Buttons } from './Buttons'
import Education from './Education'
import Experience from './Experience'
import { Skills } from './Skills'

export function Resume() {
    const [activeSection, setActiveSection] = useState("Skills")
    return (
        <section className='w-[90%] h-[85vh] relative top-30 left-15 flex gap-12.5'>

            <div className='w-[30%] flex flex-col justify-start gap-6'>
                {/* <h1 className='text-[#0D47A1] text-[42px] relative top-5 font-bold'>Why Hire Me?</h1> */}

                <h1 className='text-[#0D47A1] text-[42px] font-bold'>Why Hire Me?</h1>
                <p className='text-[#555] leading-[1.8]'>

                    {/* <p className='text-[#555] leading-[1.8] relative top-7.5'> */}
                    Passionate Computer Science student with experience in web
                    development, databases, software engineering, and IoT systems.
                </p>
                <div className='flex flex-col gap-4'>
                    <Buttons onClick={() => setActiveSection("Skills")} isActive={activeSection === "Skills"} buttonName='Skills' />
                    <Buttons onClick={() => setActiveSection("Education")} isActive={activeSection === "Education"} buttonName='Education' />
                    <Buttons onClick={() => setActiveSection("Experience")} isActive={activeSection === "Experience"} buttonName='Experience' />
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