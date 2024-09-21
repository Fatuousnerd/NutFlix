import './contact.scss';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import emailjs from "@emailjs/browser";

const handleSubmit = (e) => {
  e.preventDefault()

  const sm = document.getElementById('sm');

  emailjs.init({
    publicKey: 'yFNDsfwT8__PnMjDk',
  });

  emailjs.sendForm('service_ey11r7z', 'template_76uicad', '#myForm').then(
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

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact">
        <div className="wrapper">
          <div className="top">
            Contact us now!
          </div>

          <div className="pic">
            <img src="./Media/red-bikini-v0-9hkbusyzgpfd1.webp" alt="" />
          </div>

          <div className="form">
            <div className="yap">
              Let us know your questions,
              suggestions and concerns by filling out the contact form.
            </div>

            <div className="ac-form">
              <form action="" id='myForm' onSubmit={handleSubmit}>
                <div className="det">
                  <div className="hl">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="from_name" placeholder="Name*" autoComplete='name' required/>
                  </div>

                  <div className="hl">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="from_email" placeholder="Email*" autoComplete='email' required/>
                  </div>

                </div>

                <textarea name="message" placeholder="Message"></textarea>
                <button type="submit">Contact Us</button>
                <small id="sm"></small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact