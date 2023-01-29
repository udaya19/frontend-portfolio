import React, { useState, useEffect } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import FormData from "form-data";

import Title from "../Title";
import { addAboutApi, deleteAboutApi } from "../../api/about";
import { getAbout } from "../apiCall";

const AboutAdmin = () => {
  const [addAbout, setAddAbout] = useState();
  const [about, setAbout] = useState([]);
  const formData = new FormData();
  formData.append("content", addAbout);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { success, message, error } = await (
        await addAboutApi(formData)
      ).data;
      if (success) {
        alert(message);
        window.location.reload(true);
      } else {
        alert(error);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const fetchAbout = async () => {
    const { success, error, results } = await getAbout();
    if (success) {
      setAbout(results);
    } else {
      alert(error);
    }
  };

  const deleteAbout = async (id) => {
    try {
      const { success, message, error } = await (await deleteAboutApi(id)).data;
      if (success) {
        alert(message);
        window.location.reload(true);
      } else {
        alert(error);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchAbout();
  }, []);
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
      <div className="aboutMe mt-7">
        {about.map((a) => (
          <p
            key={a._id}
            className="w-2/3 text-mediumGray font-semibold text-lg ml-60 flex items-center"
          >
            {a.content}
            <div className="flex gap-2">
              <Link to={`/update-about/${a._id}`}>
                <BsPencilSquare />
              </Link>
              <AiFillDelete
                onClick={() => {
                  deleteAbout(a._id);
                }}
                className="cursor-pointer"
              />
            </div>
          </p>
        ))}
      </div>
    </>
  );
};

export default AboutAdmin;
