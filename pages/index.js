
import React from "react";
import Searchbar from "@/components/Searchbar";
import SlidingBanner from "@/components/SlidingBanner";
import AirportServices from "@/components/AirportServices";
import Banner from "@/components/Banner";
import Airportscard from "@/components/Airportscard";
import Airportscardmobile from "@/components/Airportscardmobile";

export default function Home() {
  return (
    <main>
      <Searchbar />
      <SlidingBanner />
      <AirportServices />
      <Banner />
      <Airportscard />
      <Airportscardmobile />
    </main>
  );
}
