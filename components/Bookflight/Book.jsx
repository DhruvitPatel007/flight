"use client";
import "@/components/Bookflight/Book.css";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Link from "next/link";

const Book = () => {
  const [tripType, setTripType] = useState("oneway");
  const [openOptions, setOpenOptions] = useState(false);
  const [openFrom, setOpenFrom] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState("");
  const [openTo, setOpenTo] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 0,
  });

  const [openClass, setOpenClass] = useState(false);

  const [selectedClass, setSelectedClass] = useState("");

  const handleClassSelection = (value) => {
    setSelectedClass(value);
    setOpenClass(false);
  };

  const handleFromSelection = (value) => {
    setSelectedFrom(value);
    setOpenFrom(false);
  };

  const handleToSelection = (value) => {
    setSelectedTo(value);
    setOpenTo(false);
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
  };

  return (
    <form action="" className="booking-form">
      <div className="booking1">Book Flights</div>
      <div className="radio-group">
        <label className="label1">
          One way
          <input
            type="radio"
            value="oneway"
            checked={tripType === "oneway"}
            onChange={handleTripTypeChange}
          />
        </label>
        <label className="label1">
          Round Trip
          <input
            type="radio"
            value="roundtrip"
            checked={tripType === "roundtrip"}
            onChange={handleTripTypeChange}
          />
        </label>
      </div>

      <div className="from">
        <label className="label2">
          <input
            type="text"
            className="i1"
            onClick={() => setOpenFrom(!openFrom)}
            value={selectedFrom}
          />
          <span>From</span>
        </label>

        {openFrom && (
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
        )}
      </div>

      <div className="from">
        <label className="label2">
          <input
            type="text"
            className="i1"
            onClick={() => setOpenTo(!openTo)}
            value={selectedTo}
          />
          <span>To</span>
        </label>

        {openTo && (
          <ul className="navMenu4">
            <li
              className="navMenu5"
              onClick={() => {
                setOpenTo(!openTo);
                handleToSelection("Delhi");
              }}
            >
              Delhi
            </li>
            <li
              className="navMenu5"
              onClick={() => {
                setOpenTo(!openTo);
                handleToSelection("Mumbai");
              }}
            >
              Mumbai
            </li>
            <li
              className="navMenu5"
              onClick={() => {
                setOpenTo(!openTo);
                handleToSelection("Banglore");
              }}
            >
              Banglore
            </li>
          </ul>
        )}
      </div>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <div className="Dates">
            <DatePicker label="Departurer" className="d1" />

            {tripType === "roundtrip" && (
              <DatePicker label="Return" className="d1" />
            )}
          </div>
        </DemoContainer>
      </LocalizationProvider>

      <div className="headerSearchItem">
        <div className="from">
        <label className="label2">
          <input
            onClick={() => setOpenOptions(!openOptions)}
            className="i1"
            value={options.adult + options.children + options.room}
          />
          <span>Travellers</span>
        </label>
        </div>
        

        {openOptions && (
          <div className="options">
            <div className="optionItem">
              <span className="optionText">Adult (18+)</span>
              <div className="optionCounter">
                <button
                  disabled={options.adult <= 1}
                  className="optionCounterButton"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOption("adult", "d");
                  }}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button
                  className="optionCounterButton"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOption("adult", "i");
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="optionItem">
              <span>Children (12-18)</span>
              <div className="optionCounter">
                <button
                  disabled={options.children <= 0}
                  className="optionCounterButton"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOption("children", "d");
                  }}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.children}</span>
                <button
                  className="optionCounterButton"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOption("children", "i");
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Infants (0-2)</span>
              <div className="optionCounter">
                <button
                  disabled={options.room <= 0}
                  className="optionCounterButton"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOption("room", "d");
                  }}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.room}</span>
                <button
                  className="optionCounterButton"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOption("room", "i");
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="class1">
        <label className="label2">
          <input
            type="text"
            className="i1"
            onClick={() => setOpenClass(!openClass)}
            value={selectedClass}
          />
          <span>Class</span>
        </label>

        {openClass && (
          <ul className="navMenu4">
            <li
              className="navMenu5"
              onClick={() => {
                setOpenClass(!openClass);
                handleClassSelection("Economy");
              }}
            >
              Economy
            </li>
            <li
              className="navMenu5"
              onClick={() => {
                setOpenClass(!openClass);
                handleClassSelection("Business Class");
              }}
            >
              Business Class
            </li>
            <li
              className="navMenu5"
              onClick={() => {
                setOpenClass(!openClass);
                handleClassSelection("First Class");
              }}
            >
              First Class
            </li>
          </ul>
        )}
      </div>
      
      <Link href="/search">
      <button onSubmit="" className="button1" >Search</button>
              
      </Link>
    </form>
  );
};

export default Book;
