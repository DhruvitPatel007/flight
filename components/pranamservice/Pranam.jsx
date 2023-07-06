"use client";
import { useState } from "react";
import React from "react";
import "@/components/pranamservice/Pranam.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Pranam = () => {
  const [openFrom, setOpenFrom] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState("");

  const handleFromSelection = (value) => {
    setSelectedFrom(value);
    setOpenFrom(false);
  };

  return (
    <form action="" className="Pranam-Form">
      <div className="container1">
        <h1>Pranam Service</h1>

        <div className="container2">
          <div className="field1">
            <label className="label3">
              <input
                type="text"
                className="in"
                onClick={() => setOpenFrom(!openFrom)}
                value={selectedFrom}
              />
              <span>Service</span>
            </label>

            {openFrom && (
              <ul className="navMenu4">
                <li
                  className="navMenu5"
                  onClick={() => {
                    setOpenFrom(!openFrom);
                    handleFromSelection("Domestic");
                  }}
                >
                  Domestic
                </li>
                <li
                  className="navMenu5"
                  onClick={() => {
                    setOpenFrom(!openFrom);
                    handleFromSelection("International");
                  }}
                >
                  International
                </li>
                
              </ul>
            )}
          </div>
        </div>

        <div className="container3">
          <div className="field2">
            <label className="label4">
              <input
                type="text"
                className="in"
                // onClick={() => setOpenFrom(!openFrom)}
                value={selectedFrom}
              />
              <span>Travel Sector</span>
            </label>

            {/* {openFrom && (
              <ul className="navMenu4">
                <li
                  className="navMenu5"
                  onClick={() => {
                    setOpenFrom(!openFrom);
                    handleFromSelection("Delhi");
                  }}
                >
                  Delhi
                </li>
                <li
                  className="navMenu5"
                  onClick={() => {
                    setOpenFrom(!openFrom);
                    handleFromSelection("Mumbai");
                  }}
                >
                  Mumbai
                </li>
                <li
                  className="navMenu5"
                  onClick={() => {
                    setOpenFrom(!openFrom);
                    handleFromSelection("Banglore");
                  }}
                >
                  Banglore
                </li>
              </ul>
            )} */}
          </div>

          <div className="field3">
            <label className="label4">
              <input
                type="text"
                className="in"
                // onClick={() => setOpenFrom(!openFrom)}
                value={selectedFrom}
              />
              <span>Origin</span>
            </label>

            {/* {openFrom && (
              <ul className="navMenu4">
                <li
                  className="navMenu5"
                  onClick={() => {
                    setOpenFrom(!openFrom);
                    handleFromSelection("Delhi");
                  }}
                >
                  Delhi
                </li>
                <li
                  className="navMenu5"
                  onClick={() => {
                    setOpenFrom(!openFrom);
                    handleFromSelection("Mumbai");
                  }}
                >
                  Mumbai
                </li>
                <li
                  className="navMenu5"
                  onClick={() => {
                    setOpenFrom(!openFrom);
                    handleFromSelection("Banglore");
                  }}
                >
                  Banglore
                </li>
              </ul>
            )} */}
          </div>
        </div>

        <div className="container3">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <div className="Dates">
                <DatePicker label="Date" className="pd1" />
              </div>
            </DemoContainer>
          </LocalizationProvider>

          <div className="field3">
            <label className="label4">
              <input
                type="text"
                className="in"
                // onClick={() => setOpenFrom(!openFrom)}
                value={selectedFrom}
                defaultValue="Noo"
              />
              <span>Destination</span>
            </label>

            {/* {openFrom && (
              <ul className="navMenu4">
                <li
                  className="navMenu5"
                  onClick={() => {
                    setOpenFrom(!openFrom);
                    handleFromSelection("Delhi");
                  }}
                >
                  Delhi
                </li>
                <li
                  className="navMenu5"
                  onClick={() => {
                    setOpenFrom(!openFrom);
                    handleFromSelection("Mumbai");
                  }}
                >
                  Mumbai
                </li>
                <li
                  className="navMenu5"
                  onClick={() => {
                    setOpenFrom(!openFrom);
                    handleFromSelection("Banglore");
                  }}
                >
                  Banglore
                </li>
              </ul>
            )} */}
          </div>
        </div>

        <div className="book">
              <button className="button1">Book</button>
        </div>
      </div>
    </form>
  );
};

export default Pranam;
