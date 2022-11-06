import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p8nku0n', 'template_48f8iri', form.current, '3gjWMGJYKzarOHGgc')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__box'>
          <article className="contact__symbol">
          <MdOutlineEmail className='contact__symbol-icons'/>
          <h4>Email</h4>
          <h5>andika.ap757@gmail.com</h5>
          <a href="mailto:andika.ap757@gmail.com" target='_blank' rel="noreferrer">
            Send a message</a>
          </article>
        <article className="contact__symbol">
          <BsWhatsapp/>
          <h4>Whatsapp</h4>
          <h5>+62 851-5625-6357</h5>
          <a href="https://api.whatsapp.com/send?phone=6285156256357" target='_blank' rel="noreferrer">
            Send a message</a>
          </article>
        <article className="contact__symbol">
          <RiMessengerLine/>
          <h4>Messenger</h4>
          <h5>Dhitama</h5>
          <a href="https://m.me/dhitama" target='_blank' rel="noreferrer">
            Send a message</a>
          </article>
      </div>
      {/* END OF CONTACT OPTION */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your email' required/>
        <textarea type="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact