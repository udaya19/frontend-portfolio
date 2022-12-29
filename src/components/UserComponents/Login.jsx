import React from "react";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-10 items-center justify-center login-component w-screen h-screen">
        <h2 className="text-primary font-bold text-xl">Login For Admin</h2>
        <div className="login-form">
          <form action="">
            <div className="flex gap-5 flex-col">
              <div className="flex items-center">
                <AiOutlineMail size={20} className="relative left-7" />
                <input
                  type="text"
                  placeholder="Email ID"
                  className="login-input"
                />
              </div>
              <div className="flex items-center">
                <AiOutlineLock size={20} className="relative left-7" />
                <input
                  type="password"
                  placeholder="Password"
                  className="login-input"
                />
              </div>
              <button className="text-white bg-primary w-1/2 ml-16">
                Login
              </button>
              <Link to="/">Home</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
