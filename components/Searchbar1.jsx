import React from "react";

const Searchbar1 = ({handleSearch}) => {
  return (
    <div>
      <section className="searchbar1">
        <div className="searchbar2">
          <input
            type="text"
            className="searchbar3 "
            placeholder="Search"
            onChange={handleSearch}
          />
        </div>
      </section>
    </div>
  );
};

export default Searchbar1;
