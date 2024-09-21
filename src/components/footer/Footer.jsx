import './footer.scss';
import { ChevronRight, Instagram, Mail, Reddit, X } from '@mui/icons-material';
import emailjs from "@emailjs/browser";

const handleSubmit = (e) => {
    e.preventDefault()

    const sm = document.getElementById('sm');

    emailjs.init({
        publicKey: 'yFNDsfwT8__PnMjDk',
    });

    emailjs.sendForm('service_ey11r7z', 'template_w947vqt', '#myForm').then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            sm.style.color = 'green';
            sm.innerHTML = "Great! Message Sent!";
        },
        (error) => {
            console.log('FAILED...', error);
            sm.style.color = 'red';
            sm.innerHTML = "Failed!! Message Not Sent! Try Again!";

        },
    );
};

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="mail">
                    <p>
                        Stay updated!
                        Enter your email to get discounts, news & updates.
                    </p>
                    <form action="" onSubmit={handleSubmit} id='myForm'>
                        <div className="txt">
                            <label htmlFor="from_email">Email Address</label>
                            <input type="email" name="from_email" placeholder="email@example.com" />
                        </div>
                        <button type="submit">Get Started <ChevronRight /></button>
                        <small id="sm"></small>
                    </form>
                </div>

                <div className="wrapper">
                    <ul>
                        <li><a href="/privacy">Privacy Policies & Cookies</a></li>
                        {/* <li><a href="">About</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">About</a></li> */}
                    </ul>
                    <ul>
                        <li><a href="https://x.com/"><X /></a></li>
                        <li><a href="https://instagram.com/"><Instagram /></a></li>
                        <li><a href="https://reddit.com/"><Reddit /></a></li>
                        <li><a href="mailto:"><Mail /></a></li>
                    </ul>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/pages" style={{ display: "flex", gap: "5px", alignItems: "center" }}><X /> Pages</a></li>
                        <li><a href="/merch">Merch</a></li>
                        <li><a href="/creators">Creators</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/faqs">FAQs</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer