'use client'
import React from "react";
import "./services.css";
import "@/styles/tab.css";
import Searchbar1 from "@/components/Searchbar1";
import { useState } from "react";

const Services = () => {

  const [searchValue, setSearchValue] = useState("");

  

  const services = [
    {
      id: 1,
      title: "Book Flights",
      imageUrl:
        "https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=",
    },
    {
      id: 2,
      title: "Duty Free",
      imageUrl:
        "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      title: "Pranam",
      imageUrl: "https://pbs.twimg.com/media/E5W09YZVEAcZWbZ.jpg",
    },

    {
      id: 4,
      title: "Cab Booking",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRmFbiPa6vhC8Knt1tdKBo09K79U284Rjtw&usqp=CAU",
    },
    {
      id: 5,
      title: "Porter",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCKDYM9hIJON96QQ5YjdMDzCd95Kc2S7tBg&usqp=CAU",
    },
    {
      id: 6,
      title: "Group Booking",
      imageUrl:
        "https://media.istockphoto.com/id/472812586/photo/tickets-in-hand.jpg?s=612x612&w=0&k=20&c=xZFhAoXiac5ODbEYt1Wb_6y2lOVKPRgPerN92vTTXus=",
    },
  ];

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="container1">
      <div className="container2">
        <div className="s1">Services</div>
        <Searchbar1 handleSearch={handleSearch}/>
      </div>
      <div className="s2">Popular Services</div>

      <section>
        <div className="s3 scrolling">
          {filteredServices.map((service, key) => (
            <div key={key} className="as4">
              <img src={service.imageUrl} className="asimg1" alt="img" />
              <p className="as5">{service.title}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="container3">
        <div className="container2">
          <div className="s1">All Services</div>
        </div>
        <div className="s2">Booking</div>
        <section>
          <div className="s3 scrolling">
            {filteredServices.map((service, key) => (
              <div key={key} className="as4">
                <img src={service.imageUrl} className="asimg1" alt="img" />
                <p className="as5">{service.title}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="s2">Experience</div>
        <section>
          <div className="s3 scrolling">
            {filteredServices.map((service, key) => (
              <div key={key} className="as4">
                <img src={service.imageUrl} className="asimg1" alt="img" />
                <p className="as5">{service.title}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="s2">Transportation</div>
        <section>
          <div className="s3 scrolling">
            {filteredServices.map((service, key) => (
              <div key={key} className="as4">
                <img src={service.imageUrl} className="asimg1" alt="img" />
                <p className="as5">{service.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      
    </div>
  );
};

export default Services;
