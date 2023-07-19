"use client";
import "@/components/Bookflight/Book.css";
import { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { db } from "@/firebase/Firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
const Book = () => {
  const router = useRouter();

  const [tripType, setTripType] = useState("oneway");

  const [openFrom, setOpenFrom] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState("");
  const [filteredFrom, setFilteredFrom] = useState([]);

  const [openTo, setOpenTo] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  const [filteredTo, setFilteredTo] = useState([]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    infants: 0,
  });

  const [openClass, setOpenClass] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const [filteredClass, setFilteredClass] = useState([]);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedReturnDate, setSelectedReturnDate] = useState(null);

  const handleFromClick = () => {
    setOpenFrom(!openFrom);
    setOpenTo(false);
    setOpenOptions(false);
    setOpenClass(false);
  };

  const handleToClick = () => {
    setOpenFrom(false);
    setOpenTo(!openTo);
    setOpenOptions(false);
    setOpenClass(false);
  };

  const handleOptionsClick = () => {
    setOpenFrom(false);
    setOpenTo(false);
    setOpenOptions(!openOptions);
    setOpenClass(false);
  };

  const handleClassClick = () => {
    setOpenFrom(false);
    setOpenTo(false);
    setOpenOptions(false);
    setOpenClass(!openClass);
  };

  const [minReturnDate, setMinReturnDate] = useState(dayjs().add(0, "day"));

  useEffect(() => {
    const latestDate = dayjs();

    setSelectedDate(latestDate);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);

    const newMinReturnDate = date
      ? dayjs(date).add(1, "day")
      : dayjs().add(1, "day");
    setMinReturnDate(newMinReturnDate);

    if (
      selectedReturnDate &&
      dayjs(selectedReturnDate).isBefore(newMinReturnDate)
    ) {
      setSelectedReturnDate(null);
    }
  };

  useEffect(() => {
    const latestDate = dayjs();

    setSelectedReturnDate(latestDate);
  }, []);

  const handleReturnDateChange = (date) => {
    setSelectedReturnDate(date);
  };

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

  const handleInputChange1 = (e) => {
    const inputValue = e.target.value;
    setSelectedFrom(inputValue);
    const filtered = From.filter((f) =>
      f.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredFrom(filtered);
  };

  const handleInputChange2 = (e) => {
    const inputValue = e.target.value;
    setSelectedTo(inputValue);
    const filtered = To.filter((t) =>
      t.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredTo(filtered);
  };

  const handleInputChange3 = (e) => {
    setOptions(e.target.value);
  };

  const handleInputChange4 = (e) => {
    const inputValue = e.target.value;
    setSelectedClass(inputValue);
    const filtered = seats.filter((t) =>
      t.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredClass(filtered);
  };

  const From = [
    {
      id: 1,
      name: "Delhi",
    },
    {
      id: 2,
      name: "Mumbai",
    },
    {
      id: 3,
      name: "Ahemedabd",
    },
    {
      id: 4,
      name: "Bangaluru",
    },
    {
      id: 5,
      name: "Vadodara",
    },
    {
      id: 6,
      name: "Pune",
    },
    {
      id: 7,
      name: "Goa",
    },
    {
      id: 8,
      name: "Srilanka",
    },
    {
      id: 9,
      name: "Dubai",
    },
    {
      id: 10,
      name: "Canada",
    },
    {
      id: 11,
      name: "Sikkim",
    },
    {
      id: 12,
      name: "America",
    },
    {
      id: 13,
      name: "London",
    },
    {
      id: 14,
      name: "Thailand",
    },
    {
      id: 15,
      name: "Norway",
    },
  ];

  const To = [
    {
      id: 1,
      name: "Delhi",
    },
    {
      id: 2,
      name: "Mumbai",
    },
    {
      id: 3,
      name: "Ahemedabd",
    },
    {
      id: 4,
      name: "Bangaluru",
    },
    {
      id: 5,
      name: "Vadodara",
    },
    {
      id: 6,
      name: "Pune",
    },
    {
      id: 7,
      name: "Goa",
    },
    {
      id: 8,
      name: "Srilanka",
    },
    {
      id: 9,
      name: "Dubai",
    },
    {
      id: 10,
      name: "Canada",
    },
    {
      id: 11,
      name: "Sikkim",
    },
    {
      id: 12,
      name: "America",
    },
    {
      id: 13,
      name: "London",
    },
    {
      id: 14,
      name: "Thailand",
    },
    {
      id: 15,
      name: "Norway",
    },
  ];

  const seats = [
    {
      id: 1,
      name: "Economy",
    },
    {
      id: 2,
      name: "Business",
    },
    {
      id: 3,
      name: "First Class",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidFrom = From.some(
      (f) => f.name.toLowerCase() === selectedFrom.toLowerCase()
    );

    const isValidTo = To.some(
      (t) => t.name.toLowerCase() === selectedTo.toLowerCase()
    );

    const isValidClass = seats.some(
      (s) => s.name.toLowerCase() === selectedClass.toLowerCase()
    );

    if (selectedFrom.trim() === "") {
      toast.error('Please select Departure location');
      return;
    } else if (selectedTo.trim() === "") {
      toast.error("Please select Destination");  
      return;
    } else if (selectedClass.trim() === "") {
      toast.error("Please Select Class");
      return;
    } else if (!isValidFrom) {
      toast.error("Sorry we have not this departure location in our list");
      return;
    } else if (!isValidTo) {
      toast.error("Sorry we have not this destination in our list");
      return;
    } else if (selectedFrom == selectedTo) {
      toast.error("Departure and Destination can not be same");
      return;
    } else if (!isValidClass) {
      toast.error("Please enter valid class");
      return;
    }

    setSelectedClass("");
    setSelectedFrom("");
    setSelectedTo("");

    console.log("Trip Type : ", tripType);
    console.log("From : ", selectedFrom);
    console.log("To : ", selectedTo);
    console.log("Departure Date : ", selectedDate);
    console.log("Return Date : ", selectedReturnDate);
    console.log(
      "Travellers : ",
      options.adult + options.children + options.infants
    );
    console.log("Class : ", selectedClass);

    try {
      const selectedDateTimestamp = dayjs(selectedDate).toISOString();
      const selectedReturnDateTimestamp =
        dayjs(selectedReturnDate).toISOString();

      const tripData = {
        tripType,
        selectedFrom,
        selectedTo,
        selectedDate: selectedDateTimestamp,
        selectedReturnDate: selectedReturnDateTimestamp,
        travellers: options.adult + options.children + options.infants,
        selectedClass,
        timestamp: new Date().toISOString(),
      };

      const tripsCollectionRef = collection(db, "trips");
      await addDoc(tripsCollectionRef, tripData);
      toast.success("Flight Booked Successfully");
      console.log("Trip data saved successfully!");

      setSelectedClass("");
      setSelectedFrom("");
      setSelectedTo("");

      router.push("/success");
    } catch (error) {
      console.error("Error saving trip data:", error);
    }
  };

  return (
    <form action="" className="booking-form fi-color" onSubmit={handleSubmit}>
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
      <div className="main">
        <div className="from">
          <label className="label2">
            <input
              type="text"
              className="i1"
              onClick={handleFromClick}
              value={selectedFrom}
              onChange={handleInputChange1}
            />
            <span>From</span>
          </label>

          {openFrom && (
            <ul className="bmodal1">
              {selectedFrom.trim() === "" ? (
                From.map((f) => (
                  <li
                    key={f.id}
                    className="bmodal2"
                    onClick={() => handleFromSelection(f.name)}
                  >
                    {f.name}
                  </li>
                ))
              ) : filteredFrom.length > 0 ? (
                filteredFrom.map((f) => (
                  <li
                    key={f.id}
                    className="bmodal2"
                    onClick={() => handleFromSelection(f.name)}
                  >
                    {f.name}
                  </li>
                ))
              ) : (
                <li className="bmodal2">Not Found</li>
              )}
            </ul>
          )}
        </div>
        <div className="from">
          <label className="label2">
            <input
              type="text"
              className="i1"
              onClick={handleToClick}
              value={selectedTo}
              onChange={handleInputChange2}
            />
            <span>To</span>
          </label>

          {openTo && (
            <ul className="bmodal1">
              {selectedTo.trim() === "" ? (
                To.map((t) => (
                  <li
                    key={t.id}
                    className="bmodal2"
                    onClick={() => handleToSelection(t.name)}
                  >
                    {t.name}
                  </li>
                ))
              ) : filteredTo.length > 0 ? (
                filteredTo.map((t) => (
                  <li
                    key={t.id}
                    className="bmodal2"
                    onClick={() => handleToSelection(t.name)}
                  >
                    {t.name}
                  </li>
                ))
              ) : (
                <li className="bmodal2">Not Found</li>
              )}
            </ul>
          )}
        </div>
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <div className="Dates">
            <DatePicker
              label="Departure"
              className="d1"
              minDate={dayjs()}
              value={selectedDate}
              onChange={handleDateChange}
            />

            {tripType === "roundtrip" && (
              <DatePicker
                label="Return"
                className="d1"
                minDate={minReturnDate}
                value={selectedReturnDate}
                onChange={handleReturnDateChange}
              />
            )}
          </div>
        </DemoContainer>
      </LocalizationProvider>
      <div className="from">
        <label className="ilabel2">
          <input
            type="text"
            onClick={handleOptionsClick}
            className="i2"
            value={options.adult + options.children + options.infants}
            onChange={handleInputChange3}
          />
          <span>Travellers</span>
        </label>

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
                  disabled={options.infants <= 0}
                  className="optionCounterButton"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOption("infants", "d");
                  }}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.infants}</span>
                <button
                  className="optionCounterButton"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOption("infants", "i");
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="from">
        <label className="ilabel2">
          <input
            type="text"
            className="i2"
            onClick={handleClassClick}
            value={selectedClass}
            onChange={handleInputChange4}
          />
          <span>Class</span>
        </label>

        {openClass && (
          <ul className="bmodal1" id="classBmodal">
            {selectedClass.trim() === "" ? (
              seats.map((f) => (
                <li
                  key={f.id}
                  className="bmodal2"
                  onClick={() => handleClassSelection(f.name)}
                >
                  {f.name}
                </li>
              ))
            ) : filteredClass.length > 0 ? (
              filteredClass.map((f) => (
                <li
                  key={f.id}
                  className="bmodal2"
                  onClick={() => handleClassSelection(f.name)}
                >
                  {f.name}
                </li>
              ))
            ) : (
              <li className="bmodal2">Not Found</li>
            )}
          </ul>
        )}
      </div>
      <button className="button1 fourth-color t-color" type="submit">
        Search
      </button>
      <Toaster />
    </form>
  );
};

export default Book;
