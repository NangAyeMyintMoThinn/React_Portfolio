import { ProjectCard } from "./ProjectCard";

export function Works() {
    return (
        <section id="works" className="scroll-mt-28 w-[85%] mt-22.5 mb-20 mx-auto">

            {/* <!-- Project 1 --> */}
            <ProjectCard
                pjNumber="01"
                pjName="Frontend Cinema Project"
                technologies=" HTML, CSS, JavaScript, Bootstrap"
                role=" Frontend Developer (Personal Project)"
            />

            {/* <!-- Project 2 --> */}
            <ProjectCard
                reverse
                pjNumber="02"
                pjName="Pizza Ordering System"
                technologies=" HTML, CSS, JavaScript, Bootstrap, PHP, MySQL"
                role=" Full Stack Developer (Personal Project)"
            />

            {/* <!-- Project 3 --> */}
            <ProjectCard
                pjNumber="03"
                pjName="Restaurant Ordering & Management System"
                technologies=" Java, Spring Boot, React.js, MySQL, GitHub"
                role=" Full Stack Developer (Academic Team Project)"
            />

            {/* <!-- Project 4 --> */}
            <ProjectCard
                reverse
                pjNumber="04"
                pjName="Disaster Preparedness & Weather Forecasting System"
                technologies=" React.js, OpenWeatherMap API, React Leaflet, OpenStreetMap"
                role=" Full Stack Developer (Academic Team Project)"
            />

            {/* <!-- Project 5 --> */}
            <div className="flex items-center justify-between gap-13">
                <div className="flex-1">

                    <span className="text-[80px] font-extrabold leading-none [-webkit-text-stroke:2px_var(--skyblue)] text-transparent">05</span>

                    <div className="flex gap-3.75">
                        <h2 className="font-bold max-w-72.5 text-[22px] text-[var(--text-color)] my-3.75">Smart Home Automation Prototype</h2>

                        <a className="w-11.25 h-11.25 flex items-center justify-center rounded-[50%] bg-[var(--bg-color)] text-[var(--text-color)] shadow-[0_5px_15px_var(--shadow-color)] text-2xl transition duration-150 hover:-translate-y-1.5 hover:rotate-10 hover:bg-[var(--skyblue)] hover:text-white" href="https://github.com/NangAyeMyintMoThinn/SmartHomePrototype.git" target="_blank">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>

                    <p className="text-[var(--skyblue)] font-medium my-2.5"><strong>Technologies:</strong> C#, Windows Forms, SQLite, MQTT, ESP32</p>

                    <p><strong>Role:</strong> Software Developer (Academic Team Project)</p>

                    <ul className="text-[15px] text-[var(--secondary-text)] list-disc leading-[1.7] pl-4.5">
                        <li>Developed the Windows Forms dashboard for device monitoring and control.</li>
                        <li>Designed and managed the SQLite database structure.</li>
                    </ul>

                    <div className="w-full h-px bg-[var(--divider-color)] my-5 mx-auto"></div>

                </div>

                <div className="bg-[var(--card-color)] rounded-[20px] p-7.5 shadow-[0_10px_25px_var(--shadow-color)]">

                    <div className="text-center mb-5">
                        <i className="text-[60px] text-[var(--skyblue)] fa-solid fa-house"></i>
                        <h3 className="mt-2.5 text-[var(--text-color)] text-xl">Smart Home</h3>
                    </div>

                    <div className="grid grid-cols-3 gap-3">

                        <div className="bg-[var(--bg-color)] border-px border-[var(--shadow-color)] p-4.5 rounded-xl text-center transition duration-150 hover:-translate-y-2 cursor-default">
                            <i className="text-[26px] mb-2 text-[var(--skyblue)] fa-solid fa-lightbulb"></i>
                            <span className="block text[14px] text-[var(--text-color)]">Lighting</span>
                        </div>

                        <div className="bg-[var(--bg-color)] border-px border-[var(--shadow-color)] p-4.5 rounded-xl text-center transition duration-150 hover:-translate-y-2 cursor-default">
                            <i className="text-[26px] mb-2 text-[var(--skyblue)] fa-solid fa-fan"></i>
                            <span className="block text[14px] text-[var(--text-color)]">Fan</span>
                        </div>

                        <div className="bg-[var(--bg-color)] border-px border-[var(--shadow-color)] p-4.5 rounded-xl text-center transition duration-150 hover:-translate-y-2 cursor-default">
                            <i className="text-[26px] mb-2 text-[var(--skyblue)] fa-solid fa-door-open"></i>
                            <span className="block text[14px] text-[var(--text-color)]">Door</span>
                        </div>

                        <div className="bg-[var(--bg-color)] border-px border-[var(--shadow-color)] p-4.5 rounded-xl text-center transition duration-150 hover:-translate-y-2 cursor-default">
                            <i className="text-[26px] mb-2 text-[var(--skyblue)] fa-solid fa-cloud-sun"></i>
                            <span className="block text[14px] text-[var(--text-color)]">Weather</span>
                        </div>

                        <div className="bg-[var(--bg-color)] border-px border-[var(--shadow-color)] p-4.5 rounded-xl text-center transition duration-150 hover:-translate-y-2 cursor-default">
                            <i className="text-[26px] mb-2 text-[var(--skyblue)] fa-solid fa-bell"></i>
                            <span className="block text[14px] text-[var(--text-color)]">Alerts</span>
                        </div>

                        <div className="bg-[var(--bg-color)] border-px border-[var(--shadow-color)] p-4.5 rounded-xl text-center transition duration-150 hover:-translate-y-2 cursor-default">
                            <i className="text-[26px] mb-2 text-[var(--skyblue)] fa-solid fa-wifi"></i>
                            <span className="block text[14px] text-[var(--text-color)]">MQTT</span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}