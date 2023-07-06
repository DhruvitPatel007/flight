import React from "react";
import "@/styles/tab.css";
import "@/styles/mobile.css";

const Footer = () => {
  const data = [
    {
      id: 1,
      title: "Help & Support",
      subTitle1: "Contact us for any Queries, Service",
      subTitle2: "Request, Complaints",
    },

    {
      id: 2,
      title: "Chat Support",
      subTitle1: "Looking for something? We are",
      subTitle2: "here for you. Ask away!",
    },

    {
      id: 3,
      title: "FAQs",
      subTitle1: "All your frequently aksed questions",
      subTitle2: "answered in one place",
    },

    {
      id: 4,
      title: "Download App",
      subTitle1: "Love our App? Spread the word by",
      subTitle2: "rating us",
    },
  ];

  const data1 = [
    {
      id: 1,
      title: "Discover",
      subTitles: [
        {
          sid: 1,
          name: "Flight Booking",
        },
        {
          sid: 2,
          name: "Group Flight Booking",
        },

        {
          sid: 3,
          name: "Services",
        },

        {
          sid: 4,
          name: "Domestic Flights",
        },
        {
          sid: 5,
          name: "International Flights",
        },
        {
          sid: 6,
          name: "Travelogues",
        },
      ],
    },

    {
      id: 2,
      title: "Company",
      subTitles: [
        {
          sid: 1,
          name: "About Us",
        }
      ],
    },

    {
      id: 3,
      title: "Airport Businesses",
      subTitles: [
        {
          sid: 1,
          name: "Ground Transportation",
        },
        {
          sid: 2,
          name: "Duty Free",
        },

        {
          sid: 3,
          name: "cargo",
        },

        {
          sid: 4,
          name: "Fuel farm",
        },
      ],
    },

    {
      id: 4,
      title: "Help And Support",
      subTitles: [
        {
          sid: 1,
          name: "Contact Us",
        },
        {
          sid: 2,
          name: "Feedback",
        },

        {
          sid: 3,
          name: "FAQs",
        }
      ],
    },
  ];

  return (
    <>
      <div className="f1">
        {data.map((item, key) => (
          <div className="f2 cursor_pointer" key={item.id}>
            <span className="f3">{item.title}</span>
            <span className="f4">{item.subTitle1}</span>
            <span className="f4">{item.subTitle2}</span>
          </div>
        ))}
      </div>
      <div className="f44">
        <div className="f5">
          {data1.map((item, key) => (
            <div className="f6" key={item.id}>
              <span className="f7">{item.title}</span>
              {item.subTitles.map((i1, key) => (
                <ul key={i1.sid} className="f8 cursor_pointer">
                  <li className="f9">{i1.name}</li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="f99">
        <div className="f10">
          <span>Private Policy</span>
          <span>All Rigts Reserved for Booking @2023</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </>
  );
};

export default Footer;