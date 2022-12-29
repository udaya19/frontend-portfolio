import React from "react";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="body-header">
      <nav className="flex list-none gap-5 p-2 pt-3 justify-center cursor-pointer text-white text-xl">
        <li className="hover:pl-1 transition">Home</li>
        <li className="hover:pl-1 transition">About</li>
        <li className="hover:pl-1 transition">Education</li>
        <li className="hover:pl-1 transition">Experience</li>
        <li className="hover:pl-1 transition">Projects</li>
        <li className="hover:pl-1 transition">Contact</li>
        <Link to="/login">
          <li className=" hover:pl-1">Login</li>
        </Link>
      </nav>
      <div className="body-name-social flex-col mt-36">
        <h1 className="text-white font-bold text-5xl text-center">
          Gonuguntla Udaya Kiran
        </h1>
        <div className="social-icons flex justify-center gap-8 mt-12 ">
          <div>
            <a href="https://www.linkedin.com/in/gonuguntla-udaya-kiran-469751202/">
              <AiFillLinkedin
                color="white"
                size={20}
                className="hover:opacity-75"
              />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/udaya_kiran_gonuguntla/">
              <AiOutlineInstagram
                color="white"
                size={20}
                className="hover:opacity-75"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
