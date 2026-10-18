
const Experience = () => {
    return (
        // <div id="experience" className="flex flex-col gap-6">

        //     <h2 className="text-[#0D47A1] font-bold text-[40px]">Experience</h2>

        //     <div className="flex flex-col gap-2.5">
        //         <div className="bg-[#81d0fb] h-34.25 rounded-2xl relative">
        //             <div className="w-[97%] h-[45%] top-4 flex flex-col justify-center absolute right-0 gap-2">
        //                 <h3 className="text-[#0D47A1] text-[18.8px] font-bold">Frontend Developer Volunteer</h3>
        //                 <p className="text-[#555]">The Blossoms Free Organization</p>
        //             </div>
        //             <small className="w-[97%] absolute right-0 bottom-4">Volunteer Experience</small>
        //         </div>
        //         <div className="bg-[#81d0fb] h-34.25 rounded-2xl relative">
        //             <div className="w-[97%] h-[45%] top-4 flex flex-col justify-center absolute right-0 gap-2">
        //                 <h3 className="text-[#0D47A1] text-[18.8px] font-bold">Software Development Team Member</h3>
        //                 <p className="text-[#555]">University Academic Projects</p>
        //             </div>
        //             <small className="w-[97%] absolute right-0 bottom-4">
        //                 Collaborated with team members using GitHub, Java, C#,
        //                 databases, and Agile development practices.
        //             </small>
        //         </div>
        //         <div className="bg-[#81d0fb] h-34.25 rounded-2xl relative">
        //             <div className="w-[97%] h-[45%] top-4 flex flex-col justify-center absolute right-0 gap-2">
        //                 <h3 className="text-[#0D47A1] text-[18.8px] font-bold">Independent Software Developer</h3>
        //                 <p className="text-[#555]">Personal Projects & Self-Learning</p>
        //             </div>
        //             <small className="w-[97%] absolute right-0 bottom-4">
        //                 Designed and developed web, desktop, database, and IoT
        //                 applications independently.
        //             </small>
        //         </div>
        //     </div>

        // </div>
        <div id="experience">

            <h2 className="text-[#0D47A1] font-bold text-[40px] mb-5">Experience</h2>

            <div className="bg-[#81d0fb] p-3.75 mb-3 rounded-2xl">
                <h3 className="text-[#0D47A1] text-[18.8px] font-bold mb-2">Frontend Developer Volunteer</h3>
                <p className="text-[#555] mb-6.25">The Blossoms Free Organization</p>
                <small>Volunteer Experience</small>
            </div>
            <div className="bg-[#81d0fb] p-3.75 mb-3 rounded-2xl">
                <h3 className="text-[#0D47A1] text-[18.8px] font-bold mb-2">Software Development Team Member</h3>
                <p className="text-[#555] mb-6.25">University Academic Projects</p>
                <small>
                    Collaborated with team members using GitHub, Java, C#, databases, and Agile development practices.
                </small>
            </div>
            <div className="bg-[#81d0fb] p-3.75 mb-3 rounded-2xl">
                <h3 className="text-[#0D47A1] text-[18.8px] font-bold mb-2">Independent Software Developer</h3>
                <p className="text-[#555] mb-6.25">Personal Projects & Self-Learning</p>
                <small>
                    Designed and developed web, desktop, database, and IoT applications independently.
                </small>
            </div>

        </div>
    )
}

export default Experience