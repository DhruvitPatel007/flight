"use client";
import { useState, useEffect } from "react";
import React from "react";
import "@/components/pranamservice/Pranam.css";
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

const Pranam = () => {
  const router = useRouter();

  const [openService, setOpenService] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);

  const [openSector, setOpenSector] = useState(false);
  const [selectedSector, setSelectedSector] = useState("");
  const [filteredSectors, setFilteredSectors] = useState([]);

  const [openDestination, setOpenDestination] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [filteredDestination, setFilteredDestination] = useState([]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    infants: 0,
  });

  const [selectedDate, setSelectedDate] = useState(null);

  const handleServiceClick = () => {
    setOpenService(!openService);
    setOpenSector(false);
    setOpenDestination(false);
    setOpenOptions(false);
  };

  const handleSectorClick = () => {
    setOpenService(false);
    setOpenSector(!openSector);
    setOpenDestination(false);
    setOpenOptions(false);
  };

  const handleDestinationClick = () => {
    setOpenService(false);
    setOpenSector(false);
    setOpenDestination(!openDestination);
    setOpenOptions(false);
  };

  const handleGuestsClick = () => {
    setOpenService(false);
    setOpenSector(false);
    setOpenDestination(false);
    setOpenOptions(!openOptions);
  };

  useEffect(() => {
    const latestDate = dayjs();

    setSelectedDate(latestDate);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const services = [
    {
      id: 1,
      name: "Arrival",
    },

    {
      id: 2,
      name: "Departure",
    },
  ];

  const travelSectors = [
    {
      id: 1,
      name: "International",
    },
    {
      id: 2,
      name: "Domestic",
    },
  ];

  const destinations = [
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

  const handleServiceSelection = (value) => {
    setSelectedService(value);
    setOpenService(false);
  };

  const handleSectorSelection = (value) => {
    setSelectedSector(value);
    setOpenSector(false);
  };

  const handleDestinationSelection = (value) => {
    setSelectedDestination(value);
    setOpenDestination(false);
  };

  const handleInputChange1 = (e) => {
    const inputValue = e.target.value;
    setSelectedService(inputValue);
    const filtered = services.filter((service) =>
      service.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  const handleInputChange2 = (e) => {
    const inputValue = e.target.value;
    setSelectedSector(inputValue);
    const filtered = travelSectors.filter((sector) =>
      sector.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSectors(filtered);
  };

  const handleInputChange3 = (e) => {
    const inputValue = e.target.value;
    setSelectedDestination(inputValue);
    const filtered = destinations.filter((destination) =>
      destination.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredDestination(filtered);
  };

  const handleInputChange4 = (e) => {
    setOpenOptions(e.target.value);
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidService = services.some(
      (service) => service.name.toLowerCase() === selectedService.toLowerCase()
    );

    const isValidSector = travelSectors.some(
      (sector) => sector.name.toLowerCase() === selectedSector.toLowerCase()
    );

    const isValidDestination = destinations.some(
      (destination) =>
        destination.name.toLowerCase() === selectedDestination.toLowerCase()
    );

    if (selectedService.trim() === "") {
      toast.error("Please select a service.");
      return;
    } else if (selectedSector.trim() === "") {
      toast.error("Please select a sector");
      return;
    } else if (selectedDestination.trim() === "") {
      toast.error("Please select a Destination");
      return;
    } else if (!isValidService) {
      toast.error("Please choose a valid service");
      return;
    } else if (!isValidSector) {
      toast.error("Please choose a valid sector");
      return;
    } else if (!isValidDestination) {
      toast.error("Sorry we have not this destination in our list");
      return;
    }

    setSelectedService("");
    setSelectedDestination("");
    setSelectedSector("");

    try {
      const selectedDateTimestamp = dayjs(selectedDate).toISOString();
      const pranamServiceData = {
        selectedService,
        selectedDate: selectedDateTimestamp,

        selectedDestination,
        selectedSector,
        guests: options.adult + options.children + options.infants,
        timestamp: new Date().toISOString(),
      };

      const pranamServicesCollectionRef = collection(db, "Pranam Service");
      await addDoc(pranamServicesCollectionRef, pranamServiceData);

      toast.success("Service Booked SuccessFully");
      console.log("Pranam Service data saved successfully!");
      router.push("/success");
    } catch {
      console.error("Error saving Pranam Service data:", error);
    }

    console.log("Service: ", selectedService);
    console.log("Travel Sector: ", selectedSector);
    console.log("Destination: ", selectedDestination);
    console.log("Date: ", selectedDate);
    console.log("Guests: ", options.adult + options.children + options.infants);
  };

  return (
    <form action="" className="Pranam-Form" onSubmit={handleSubmit}>
      <div className="container1">
        <h1>Pranam Service</h1>

        <div className="container2">
          <div className="field1">
            <label className="label3">
              <input
                type="text"
                className="in cursor_pointer"
                onClick={handleServiceClick}
                value={selectedService}
                onChange={handleInputChange1}
              />
              <span>Services</span>
            </label>

            {openService &&  (
              <ul className="modal1">
                {selectedService.trim() === "" ? (
                  services.map((service) => (
                    <li
                      key={service.id}
                      className="modal11"
                      onClick={() => handleServiceSelection(service.name)}
                      onChange={handleInputChange1}
                    >
                      {service.name}
                    </li>
                  ))
                ) : filteredServices.length > 0 ? (
                  filteredServices.map((service) => (
                    <li
                      key={service.id}
                      className="modal11"
                      onClick={() => handleServiceSelection(service.name)}
                    >
                      {service.name}
                    </li>
                  ))
                ) : (
                  <li className="modal11">Not Found</li>
                )}
              </ul>
            )}
          </div>
        </div>

        <div className="container3">
          <div className="field2">
            <label className="label4">
              <input
                type="text"
                className="in cursor_pointer"
                onClick={handleSectorClick}
                value={selectedSector}
                onChange={handleInputChange2}
              />
              <span>Travel Sector</span>
            </label>

            {openSector && (
              <ul className="modal2">
                {selectedSector.trim() === "" ? (
                  travelSectors.map((sector) => (
                    <li
                      key={sector.id}
                      className="modal22"
                      onClick={() => handleSectorSelection(sector.name)}
                    >
                      {sector.name}
                    </li>
                  ))
                ) : filteredSectors.length > 0 ? (
                  filteredSectors.map((sector) => (
                    <li
                      key={sector.id}
                      className="modal22"
                      onClick={() => handleSectorSelection(sector.name)}
                    >
                      {sector.name}
                    </li>
                  ))
                ) : (
                  <li className="modal22">Not Found</li>
                )}
              </ul>
            )}
          </div>

          <div className="field3">
            <label className="label4">
              <input
                type="text"
                className="in cursor_pointer"
                onClick={handleDestinationClick}
                value={selectedDestination}
                onChange={handleInputChange3}
              />
              <span>Destination</span>
            </label>

            {/* Here */}
            {openDestination && (
              <ul className="modal2">
                {selectedDestination.trim() === "" ? (
                  destinations.map((destination) => (
                    <li
                      key={destination.id}
                      className="modal22"
                      onClick={() =>
                        handleDestinationSelection(destination.name)
                      }
                    >
                      {destination.name}
                    </li>
                  ))
                ) : filteredDestination.length > 0 ? (
                  filteredDestination.map((destination) => (
                    <li
                      key={destination.id}
                      className="modal22"
                      onClick={() =>
                        handleDestinationSelection(destination.name)
                      }
                    >
                      {destination.name}
                    </li>
                  ))
                ) : (
                  <li className="modal22">Not Found</li>
                )}
              </ul>
            )}
          </div>
        </div>

        <div className="container3">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <div className="Dates">
                <DatePicker
                  label="Date"
                  className="pd1"
                  minDate={dayjs()}
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
            </DemoContainer>
          </LocalizationProvider>

          <div className="field3">
            <label className="label4">
              <input
                type="text"
                className="in cursor_pointer"
                onClick={handleGuestsClick}
                value={options.adult + options.children + options.infants}
                onChange={handleInputChange4}
              />
              <span>Guests</span>
            </label>

            {openOptions && (
              <div className="options" id="soptions">
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
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
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
                    <span className="optionCounterNumber">
                      {options.infants}
                    </span>
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
        </div>

        <div className="book">
          <button type="submit" className="button1">
            Book
          </button>
          <Toaster />
        </div>
      </div>
    </form>
  );
};

export default Pranam;
