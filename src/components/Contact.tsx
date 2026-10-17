export function Contact() {
    return (
        <section className="contact-container animate__animated animate__fadeIn">

            {/* <!-- Left Side --> */}
            <div className="contact-form animate__animated animate__fadeInLeft">

                <h1 className="animate__animated animate__fadeInDown">Get In Touch</h1>

                <form id="contactForm">

                    <input type="text" id="name" placeholder="Your Name" required>

                        <input type="email" id="email" placeholder="Your Email" required>

                            <textarea id="message" rows="8" placeholder="Write a Message" required></textarea>

                            <button type="submit">Send Message</button>
                        </form>

                    </div>

                    {/* <!-- Right Side --> */}
                    <div className="contact-info animate__animated animate__fadeInRight">

                        <h1 className="animate__animated animate__fadeInDown">My Contact Details</h1>

                        <div className="info-item animate__animated animate__fadeInUp">
                            <i className="fa-solid fa-envelope"></i>

                            <div>
                                <h4>Email</h4>
                                <p>nangayemyintmothinn@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item animate__animated animate__fadeInUp">
                            <i className="fa-brands fa-telegram"></i>

                            <div>
                                <h4>Telegram</h4>
                                <p>@nangayemyintmothinn</p>
                            </div>
                        </div>

                        <div className="info-item animate__animated animate__fadeInUp">
                            <i className="fa-brands fa-github"></i>

                            <div>
                                <h4>GitHub</h4>
                                <p>github.com/NangAyeMyintMoThinn</p>
                            </div>
                        </div>

                        <div className="info-item animate__animated animate__fadeInUp">
                            <i className="fa-brands fa-facebook"></i>

                            <div>
                                <h4>Facebook</h4>
                                <p>Account : Myint Mo</p>
                            </div>
                        </div>

                    </div>

                </section>
                )
}