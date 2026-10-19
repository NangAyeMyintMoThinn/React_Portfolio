import { ProjectData } from "./ProjectData";

type ProjectDescriptionProps = {
    projectName: string;
};

export function ProjectDescription({
    projectName
}: ProjectDescriptionProps) {

    const project = ProjectData.find((item) => item.projectName === projectName)

    const descriptions = project?.descriptions ?? [];

    return (
        <ul className="text-[15px] text-(--secondary-text)] list-disc leading-[1.7] pl-4.5">
            {descriptions.map((description, index) => (
                <li key={index}>{description}</li>
            ))}
        </ul>
    );
}