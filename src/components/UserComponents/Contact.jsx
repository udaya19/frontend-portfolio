import React from "react";
import {
  AiOutlineContacts,
  AiOutlineMail,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div className="bg-primary p-3 ">
      <div className="educationTitle flex justify-center gap-2 mt-8">
        <span>
          <AiOutlineContacts className="text-white font-semibold mt-1" />
        </span>
        <h1 className="text-white font-bold text-4xl">Contact</h1>
      </div>
      <div className="contact-body flex gap-14 p-16 ">
        <div className="contact-container w-1/2">
          <p className="text-white text-2xl p-3">
            If you are new to Computer Science Engineering and looking for
            mentorship please feel free to contact me. I will guide you through
            right steps and procedure in order to suceed in your career. You can
            DM me on LinkedIn or Instagram.
          </p>
        </div>
        <div className="contact-detials mt-2">
          <h3 className="text-white text-lg font-bold">Get in Touch</h3>
          <p className="text-white">
            You can contact me through social media handles and gmail{" "}
          </p>
          <div className="contact-details-info flex items-center mt-5">
            <AiOutlineMail className="text-white" />
            <a
              href="mailto:gudaya2002@gmail.com"
              className="text-white font-bold ml-2"
            >
              gudaya2002@gmail.com
            </a>
          </div>
          <div className="social-media flex text-white text-xl gap-3 mt-5">
            <a href="https://www.linkedin.com/in/gonuguntla-udaya-kiran-469751202/">
              <AiFillLinkedin />
            </a>
            <a href="https://www.instagram.com/udaya_kiran_gonuguntla/">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
