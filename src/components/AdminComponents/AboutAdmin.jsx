import React, { useState, useEffect } from "react";
import FormData from "form-data";

import Title from "../Title";
import { addAboutApi } from "../../api/about";

const AboutAdmin = () => {
  const [addAbout, setAddAbout] = useState();
  const formData = new FormData();
  formData.append("content", addAbout);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const { success, message, error } = await (
        await addAboutApi(formData)
      ).data;
      if (success) {
        alert(message);
      } else {
        alert(error);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {}, []);
  return (
    <>
      <Title title="About" />
      <div>
        <form className="mt-10 flex-col" onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <textarea
              name="content"
              value={addAbout}
              placeholder="Add text"
              id=""
              cols="80"
              rows="5"
              className="border-solid border-primary border-2 "
              onChange={(e) => {
                setAddAbout(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="flex justify-center mt-3 ">
            <button
              type="submit"
              className="bg-primary text-white py-1 px-5 hover:scale-105 transition"
            >
              Add content
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AboutAdmin;
