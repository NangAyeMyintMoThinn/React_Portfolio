import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser"
import { Buttons } from "./Buttons";
import { FormField } from "./FormField";

export function Contact() {
    const [isSending, setIsSending] = useState(false);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        const form = e.currentTarget;

        const templateParams = {
            form_name: (form.elements.namedItem("name") as HTMLInputElement).value,
            form_email: (form.elements.namedItem("email") as HTMLInputElement).value,
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        };
        try {
            await emailjs.send("service_3ls1d6q", "template_qk1i0d3", templateParams, "pfhOiOx0dCbv8uV-X");
            alert("Message send successfully!");
            form.reset();
        } catch (error) {
            console.error("EmailJS error: ", error);
            alert("Failed to send message. Please try again.")
        } finally {
            setIsSending(false);
        }

    };
    return (
        <section className=" w-[85%] h-[85vh] mt-22.5 m-auto flex justify-between gap-15">
            {/* <!-- Left Side --> */}
            <div className="flex-2">

                <h1 className="text-[40px] text-[#0D47A1] mb-3.75 font-bold">Get In Touch</h1>

                <form id="contactForm" onSubmit={handleSubmit} className="flex flex-col gap-5">

                    <FormField id="name" placeholder="Your Name" required />
                    <FormField type="email" id="email" placeholder="Your Email" required />
                    <FormField id="message" placeholder="Write a message" multiline required />

                    <Buttons buttonName={isSending ? "Sending..." : "Send Message"} variant="submit" type="submit" />

                </form>

            </div>

            {/* <!-- Right Side --> */}
            <div className="flex-1">

                <h1 className="text-[40px] text-[#0D47A1] mb-8.75 font-bold">My Contact Details</h1>

                <div className="flex gap-4.5 items-center mb-7.5">
                    <i className="text-[28px] w-12.5 fa-solid fa-envelope text-[#EA4335]"></i>

                    <div>
                        <h4 className="text-[#0D47A1] mb-1.25 uppercase tracking-wide font-bold">Email</h4>
                        <p className="text-[#555]">nangayemyintmothinn@gmail.com</p>
                    </div>
                </div>

                <div className="flex gap-4.5 items-center mb-7.5">
                    <i className="text-[28px] w-12.5 fa-brands fa-telegram text-[#229ED9]"></i>

                    <div>
                        <h4 className="text-[#0D47A1] mb-1.25 uppercase tracking-wide font-bold">Telegram</h4>
                        <p className="text-[#555]">@nangayemyintmothinn</p>
                    </div>
                </div>

                <div className="flex gap-4.5 items-center mb-7.5">
                    <i className="text-[28px] w-12.5 fa-brands fa-github text-[#181717]"></i>

                    <div>
                        <h4 className="text-[#0D47A1] mb-1.25 uppercase tracking-wide font-bold">GitHub</h4>
                        <p className="text-[#555]">github.com/NangAyeMyintMoThinn</p>
                    </div>
                </div>

                <div className="flex gap-4.5 items-center mb-7.5">
                    <i className="text-[28px] w-12.5 fa-brands fa-facebook text-[#1877F2]"></i>

                    <div>
                        <h4 className="text-[#0D47A1] mb-1.25 uppercase tracking-wide font-bold">Facebook</h4>
                        <p className="text-[#555]">Account : Myint Mo</p>
                    </div>
                </div>

            </div>
        </section>
    )
}