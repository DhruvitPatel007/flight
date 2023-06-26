import React from "react";
import "../styles/tab.css";
import "../styles/mobile.css";

const Airportscardmobile = () => {
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
        "https://previews.123rf.com/images/rudall30/rudall301205/rudall30120500048/13792504-cartoon-illustration-of-an-airport.jpg",
      title: "Ahmedabad",
      subTitle: "Sardar Vallabhbhai Patel International Airport",
    },

    {
      id: 3,
      image:
        "https://cdn4.vectorstock.com/i/1000x1000/74/78/cartoon-airport-late-delay-vector-16307478.jpg",
      title: "Guwahati",
      subTitle: "Lokpriya Gopinath Bardoloi International Airport",
    },

    {
      id: 4,
      image:
        "https://www.jaipurstuff.com/wp-content/uploads/2023/01/Jaipur-International-Airport.jpg",
      title: "Jaipur",
      subTitle: "Jaipur International Airport",
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
        "https://th-i.thgim.com/public/incoming/1e8kp5/article66044674.ece/alternates/FREE_1200/10505_20_9_2022_12_58_23_1_IXE_WINTERSCHEDULE_SEP20.JPG",
      title: "Mangaluru",
      subTitle: "Mangaluru International Airport",
    },
  ];

  return (
    <div className="acm1">
      <div className="acm2">Our Airports</div>

      <div className="acm3">
        {
          cards.map((card,key)=>(
            <div className="acm4" key={card.id}>
            <div className="acm5">
              <img
                src={card.image}
                alt="Image"
              />
            </div>
            <div className="acm6">
              <div className="acm7">
                <h3>{card.title}</h3>
              </div>
  
              <div className="acm8">
                <p>{card.subTitle}</p>
              </div>
            </div>
          </div>
          ))
        }
        

      </div>
    </div>
  );
};

export default Airportscardmobile;
