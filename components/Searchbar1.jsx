import React from "react";

const Searchbar1 = ({handleSearch}) => {
  return (
    <div>
      <section className="search1">
        <div className="search2">
          <input
            type="text"
            className="search3 "
            placeholder="Search"
            onChange={handleSearch}
          />
        </div>
      </section>
    </div>
  );
};

export default Searchbar1;
