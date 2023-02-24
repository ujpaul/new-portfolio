import React, { useState,useRef } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import emailjs from "@emailjs/browser";
import "./Footer.scss";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const form = useRef()
  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      setShowError(false);
      setLoading(true);

      const contact = {
        _type: "contact",
        name: name,
        email: email,
        message: message,
      };

      client.create(contact).then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      });
      emailjs
        .sendForm(
          "service_fo2bj2u",
          "template_cku0jtb",
          form.current,
          "MEjhmVEh5fQbPPhTF"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
            console.log('message sent')
          }
        );
  };

  return (
    <>
      <h2 className='head-text'>Take a coffe & chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:uwimanajeanpaul3@gmail.com' className='p-text'>
            uwimanajeanpaul3@gmail.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='email' />
          <a href='tel: +250781935130' className='p-text'>
            +250 781 935 130
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form className='app__footer-form app__flex' ref={form} onSubmit={handleSubmit}>
            <div className='app__flex'>
              <input
                type='text'
                className='p-text'
                // value={name}
                name='to_name'
              placeholder='your name'
              required
                onChange={handleChangeInput}
                onKeyUp={() => setShowError(false)}
              />
            </div>
            <div className='app__flex'>
              <input
                type='text'
                className='p-text'
                // value={email}
                name='from_name'
                placeholder='your email'
                onChange={handleChangeInput}
              onKeyUp={() => setShowError(false)}
              required
              />
            </div>
            <div>
              <textarea
                className='p-text'
                placeholder='Your Message'
                // value={message}
                name='message'
                onChange={handleChangeInput}
              onKeyUp={() => setShowError(false)}
              required
              />
            </div>
            {showError ? (
              <span style={{ color: "red", fontSize: 13 }}>
                Ensure all fieds filled!
              </span>
            ) : (
              <></>
            )}
            <button type='submit' className='p-text'>
              {loading ? "Sending..." : "Send Message"}
            </button>
        </form>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
