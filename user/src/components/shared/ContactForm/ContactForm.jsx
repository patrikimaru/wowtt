import "./ContactForm.css";
import Input from '../Input/Input';
import Button from "../Button/Button";
import emailjs from "@emailjs/browser";
import { useRef } from 'react';


const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lol22d9', 'template_767fs4o', form.current, 'vtXLr4r1SnXfOFrHj')
      .then((result) => {
          console.log(result.text);
          alert("Your Message was succesfully sent");
      }, (error) => {
          console.log(error.text);
          alert("Your Message wasn't sent");
      });
  };

  return (
    <form className="ContactForm" ref={form} onSubmit={sendEmail}>
      <div className="ContactFormLabel">
        <label>Name</label>
        <div className='ContactFormInput'>
          <Input type="text" placeholder="John" name="from_name"/>
        </div>
      </div>
       
      <div className="ContactFormLabel">
        <label>Email</label>
        <div className='ContactFormInput'>
          <Input type="email" placeholder="johndoe123@gmail.com" name="user_email"/>
        </div>
      </div>
      <div className="ContactFormLabel">
        <label>Message</label>
        <div className='ContactFormInput'>
          <textarea name="message" rows="4" cols="50" />
        </div>
      </div>
      <Button type="submit" variant="light" size="full" className="ContactFormButton">Submit</Button>
    </form>
  );
};

export default ContactForm;