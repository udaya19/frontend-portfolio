import React, { useState } from "react";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import { loginUserApi } from "../../api/userApi";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const loginHandler = async (e) => {
    e.preventDefault();
    const response = await (await loginUserApi(email, password)).data;
    if (response.success) {
      alert(response.message);
      localStorage.setItem("token", response.token);
      navigate("/");
      window.location.reload(true);
    } else {
      alert(response.error);
    }
  };
  return (
    <div className="">
      <div className="flex flex-col gap-10 items-center justify-center login-component w-screen h-screen">
        <h2 className="text-primary font-bold text-xl">Login For Admin</h2>
        <div className="login-form">
          <form action="" onSubmit={loginHandler}>
            <div className="flex gap-5 flex-col">
              <div className="flex items-center">
                <AiOutlineMail size={20} className="relative left-7" />
                <input
                  type="text"
                  placeholder="Email ID"
                  className="login-input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex items-center">
                <AiOutlineLock size={20} className="relative left-7" />
                <input
                  type="password"
                  placeholder="Password"
                  className="login-input"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="text-white bg-primary w-1/2 ml-16"
              >
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
