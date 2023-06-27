import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/mobile.css";
import "../styles/tab.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const cards = [
  {
    id: 1,
    image:
      "https://t3.ftcdn.net/jpg/02/49/80/14/360_F_249801441_nL5kzCvGa7x0dIalEv9Vx4OYbDHTs5jV.jpg",
    title: "Mumbai",
    subTitle: "Chhatrapati Shivaji Maharaj International Airport",
  },
  {
    id: 2,
    image:
      "https://www.constructionworld.in/assets/uploads/32b8895bb58f7db5a06692298e2eb9af.jpg",
    title: "Ahmedabad",
    subTitle: "Sardar Vallabhbhai Patel International Airport",
  },

  {
    id: 3,
    image:
      "https://images.hindustantimes.com/img/2022/02/11/550x309/aed201ae-8b3c-11ec-8ba1-508084a9585c_1644606222837.jpg",
    title: "Guwahati",
    subTitle: "Lokpriya Gopinath Bardoloi International Airport",
  },

  {
    id: 4,
    image:
      "https://www.jaipurstuff.com/wp-content/uploads/2023/01/Jaipur-International-Airport.jpg",
    title: "Jaipur",
    subTitle: "Savaimansinh International Airport",
  },

  {
    id: 5,
    image:
      "https://images.hindustantimes.com/img/2022/02/11/550x309/aed201ae-8b3c-11ec-8ba1-508084a9585c_1644606222837.jpg",
    title: "Lucknow",
    subTitle: "Chaudhary Charan Singh International Airport",
  },

  {
    id: 6,
    image:
      "https://www.constructionworld.in/assets/uploads/32b8895bb58f7db5a06692298e2eb9af.jpg",
    title: "Thiruvananthapuram",
    subTitle: "Thiruvananthapuram International Airport",
  },  

  {
    id: 7,
    image:
      "https://t3.ftcdn.net/jpg/02/49/80/14/360_F_249801441_nL5kzCvGa7x0dIalEv9Vx4OYbDHTs5jV.jpg",
    title: "Mangaluru",
    subTitle: "Mangaluru International Airport",
  },
];

const Airportscard = () => {
  return (
    <section className="ac7">
      <div className="ac8">Our Airports</div>

      <Carousel responsive={responsive}>
        {cards.map((card, key) => (
          <div className="ac6 cursor_pointer" key={card.id}>
            <div className="ac1">
              <div className="ac2">
                <img src={card.image} alt="Image" />
              </div>
              <div className="ac3">
                <div className="ac4">
                  <h3>{card.title}</h3>
                </div>

                <div className="ac5">
                  <p>{card.subTitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Airportscard;
