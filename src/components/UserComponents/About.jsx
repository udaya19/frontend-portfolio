import React, { useEffect, useState } from "react";
import { getUserImageApi } from "../../api/userApi";
import { getAboutApi } from "../../api/about";
const About = () => {
  const [imageUrl, setImageUrl] = useState();
  const [about, setAbout] = useState([]);
  useEffect(() => {
    getImage();
    getAbout();
  }, []);
  const getImage = async () => {
    const { success, userImg } = await (await getUserImageApi()).data;
    if (success) {
      const imgUrl = userImg[0].avatar.url;
      setImageUrl(imgUrl);
    }
  };
  const getAbout = async () => {
    const { results } = await (await getAboutApi()).data;
    setAbout(results);
  };
  return (
    <div className="p-7 ">
      <div className="about-image">
        <img src={imageUrl} alt="" className="" />
      </div>
      <div className="aboutMe mt-7">
        {about.map((a) => (
          <p className="w-2/3 text-mediumGray font-semibold text-lg ml-60">
            {a.content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;
