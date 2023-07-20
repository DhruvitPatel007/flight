import React from "react";

const Banner = () => {
  const banners = [
    {
      id: 1,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2SoePYf1Atxm9zexBoZvKmwhLQpGO_8rWiQ&usqp=CAU",
    },
    {
      id: 2,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwDyMzqc_0fpH5gaC8siWWcheN26qAAODOQ&usqp=CAU",
    },
    {
      id: 3,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44eHiHdHnorpjLKUXfRuXzirsIf2_oyxs3g&usqp=CAU",
    },

    {
      id: 4,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mnLmm3pF5HE2GsLC_QvOjqhZc13N1Zj4_Q&usqp=CAU",
    },
  ];

  return(
    <div className="b1 scrolling">
        {banners.map((banner, index) => (
          <div key={banner.id} className="b2 ">
            <img src={banner.imageUrl} className="bimg1" />
          </div>
        ))}
    </div>
  );
};

export default Banner;
