import { useEffect, useState } from "react";
import { ProjectData } from "./ProjectData";

type ProjectImageProps = {
    projectName: string;
};

export function ProjectImage({ projectName }: ProjectImageProps) {
    const project = ProjectData.find((item) => item.projectName === projectName);

    const images = project?.images ?? [];

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Open the modal
    function openModal(index: number) {
        setCurrentIndex(index);
        setIsOpen(true);
    }

    // Close the modal
    function closeModal() {
        setIsOpen(false);
    }

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                closeModal();
            }

            if (e.key === "ArrowRight") {
                setCurrentIndex((prev) =>
                    (prev + 1) % images.length
                );
            }

            if (e.key === "ArrowLeft") {
                setCurrentIndex((prev) =>
                    (prev - 1 + images.length) % images.length
                );
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, images.length]);

    return (
        <>
            {/* Project image gallery */}
            <div className="project-image-gallery flex-1 max-w-full max-[768px]:w-full flex gap-3 overflow-x-auto scroll-smooth p-1.25">
                {images.map((image, index) => (
                    <img src={image} key={image} onClick={() => openModal(index)} className="h-[200px] w-[280px] object-cover max-[768px]:h-[180px] max-[768px]:w-[240px] max-[480px]:h-[150px] max-[480px]:w-[200px] object-cover rounded-xl shrink-0 cursor-pointer"
                    />
                ))}
            </div>

            {/* Image modal */}
            {isOpen && images.length > 0 && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-5"
                    onClick={closeModal} >
                    {/* Close button */}
                    <button onClick={closeModal} className="absolute top-5 right-7 text-white text-4xl cursor-pointer" aria-label="Close image"
                    >&times;</button>

                    {/* Previous image */}
                    <button onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex((prev) =>
                            (prev - 1 + images.length) % images.length
                        );
                    }}
                        className="absolute left-3 md:left-8 text-white text-4xl cursor-pointer"
                        aria-label="Previous image"
                    >&#10094;</button>

                    {/* Selected image */}
                    <img src={images[currentIndex]} onClick={(e) => e.stopPropagation()} className="max-w-[85vw] max-h-[85vh] object-contain rounded-lg"
                    />

                    {/* Next image */}
                    <button onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex((prev) =>
                            (prev + 1) % images.length
                        );
                    }}
                        className="absolute right-3 md:right-8 text-white text-4xl cursor-pointer"
                        aria-label="Next image"
                    > &#10095;</button>
                </div>
            )}
        </>
    );
}
