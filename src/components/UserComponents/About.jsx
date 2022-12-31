import React, { useEffect, useState } from "react";
import { getUserImageApi } from "../../api/userApi";
const About = () => {
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    getImage();
  }, []);
  const getImage = async () => {
    const { success, userImg } = await (await getUserImageApi()).data;
    if (success) {
      const imgUrl = userImg[0].avatar.url;
      setImageUrl(imgUrl);
    }
  };
  return (
    <div className="p-7 ">
      <div className="about-image">
        <img src={imageUrl} alt="" className="" />
      </div>
      <div className="aboutMe mt-7">
        <p className="w-2/3 text-mediumGray font-semibold text-lg ml-60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vero
          dicta error dignissimos ad ullam, accusamus voluptas id. Eos nihil est
          sint enim veniam laboriosam possimus maiores culpa earum ipsam. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum,
          corrupti quibusdam fuga quos ab laboriosam a perferendis voluptatem,
          impedit eos delectus odit eum sequi error! Quae dolores recusandae
          nemo? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Dolorum, assumenda officia eius fugiat minima voluptatibus expedita? A
          temporibus fugit porro quisquam itaque necessitatibus id perferendis
          sit, dicta earum similique illum?
        </p>
      </div>
    </div>
  );
};

export default About;
