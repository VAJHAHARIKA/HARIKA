import "./contact.css";
import Phone from "../../img/phone.jpeg";
import Email from "../../img/mail.png";
import Address from "../../img/address.jpeg";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fo1ta62",
        "template_d6jrs5z",
        formRef.current,
        "user_iWUiAnnRewoUFA6vrYioQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 9346935169
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              harikavajha@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Hyderabad, India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-right">
            <b>What’s your project about?</b> Get in touch. Always available for
             tech projects.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Your email has been sent!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;