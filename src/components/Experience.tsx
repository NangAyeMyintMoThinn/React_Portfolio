
const Experience = () => {
    return (
        <div id="experience">

            <h2 className="text-(--darkblue) font-bold text-[40px] mb-5">Experience</h2>

            <div className="bg-[var(--container-background)] p-3.75 mb-3 rounded-2xl">
                <h3 className="text-(--darkblue) text-[18.8px] font-bold mb-2">Frontend Developer Volunteer</h3>
                <p className="text-[#555] mb-6.25">The Blossoms Free Organization</p>
                <small>Volunteer Experience</small>
            </div>
            <div className="bg-[var(--container-background)] p-3.75 mb-3 rounded-2xl">
                <h3 className="text-(--darkblue) text-[18.8px] font-bold mb-2">Software Development Team Member</h3>
                <p className="text-[#555] mb-6.25">University Academic Projects</p>
                <small>
                    Collaborated with team members using GitHub, Java, C#, databases, and Agile development practices.
                </small>
            </div>
            <div className="bg-[var(--container-background)] p-3.75 mb-3 rounded-2xl">
                <h3 className="text-(--darkblue) text-[18.8px] font-bold mb-2">Independent Software Developer</h3>
                <p className="text-[#555] mb-6.25">Personal Projects & Self-Learning</p>
                <small>
                    Designed and developed web, desktop, database, and IoT applications independently.
                </small>
            </div>

        </div>
    )
}

export default Experience