function Contact() {
    return (
        <div className="contact-page">
            <div className="hero-section">
                <h1>Contact Us</h1>
                <p className="subtitle">We'd love to hear from you</p>
            </div>
            <div className="contact-form">
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;