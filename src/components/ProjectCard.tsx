import { ProjectDescription } from "./ProjectDescription"
import { ProjectImage } from "./ProjectImage"

type ProjectCardProps = {
    reverse?: boolean
    pjNumber: string
    pjName: string
    technologies: string
    role: string
}


export function ProjectCard({ reverse, pjNumber, pjName, technologies, role }: ProjectCardProps) {
    if (reverse) {
        return (
            <div className="flex flex-row-reverse items-center justify-between gap-12.5 mb-22.5">

                <div className="flex-1">

                    <span className="text-[80px] font-extrabold leading-none [-webkit-text-stroke:2px_var(--skyblue)] text-transparent">{pjNumber}</span>

                    <div className="flex gap-3.75">
                        <h2 className="font-bold max-w-72.5 text-[22px] text-[var(--text-color)] my-3.75">{pjName}</h2>

                        <a className="w-11.25 h-11.25 flex items-center justify-center rounded-[50%] bg-[var(--bg-color)] text-[var(--text-color)] shadow-[0_5px_15px_var(--shadow-color)] text-2xl transition duration-150 hover:-translate-y-1.5 hover:rotate-10 hover:bg-[var(--skyblue)] hover:text-white" href="https://github.com/NangAyeMyintMoThinn/Pizza-Ordering-System" target="_blank">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>

                    <p className="text-[var(--skyblue)] font-medium my-2.5"><strong>Technologies:</strong>{technologies}</p>

                    <p><strong>Role:</strong> {role}</p>

                    <ProjectDescription projectName={pjName} />
                    <div className="w-full h-0.5 bg-[var(--divider-color)] my-5 mx-auto"></div>


                </div>

                <ProjectImage projectName={pjName} />

            </div>
        )
    }
    return (
        <div className="flex items-center justify-between gap-12.5 mb-22.5">

            <div className="flex-1">

                <span className="text-[80px] font-extrabold leading-none [-webkit-text-stroke:2px_var(--skyblue)] text-transparent">{pjNumber}</span>

                <div className="flex gap-3.75">
                    <h2 className="font-bold max-w-72.5 text-[22px] text-[var(--text-color)] my-3.75">{pjName}</h2>

                    <a className="w-11.25 h-11.25 flex items-center justify-center rounded-[50%] bg-[var(--bg-color)] text-[var(--text-color)] shadow-[0_5px_15px_var(--shadow-color)] text-2xl transition duration-150 hover:-translate-y-1.5 hover:rotate-10 hover:bg-[var(--skyblue)] hover:text-white" href="https://github.com/NangAyeMyintMoThinn/Pizza-Ordering-System" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>

                <p className="text-[var(--skyblue)] font-medium my-2.5"><strong>Technologies:</strong>{technologies}</p>

                <p><strong>Role:</strong> {role}</p>

                <ProjectDescription projectName={pjName} />
                <div className="w-full h-0.5 bg-[var(--divider-color)] my-5 mx-auto"></div>

            </div>

            <ProjectImage projectName={pjName} />

        </div>
    )
}