import React, { useState } from "react";
// import axios from "axios";

function Search(props) {
  const [searchText, setSearchText] = useState("");
  const [searchOption, setSearchOption] = useState("name"); // Default search option
  const [showDropdown, setShowDropdown] = useState(false);

  const handleBookSearch = async (event,searchOptionSelect, searchTextSelect) => {
    const triggeringElement = event.target;
    console.log("Triggering element:", triggeringElement);
    try {
      const response = await fetch(props.dropdownOptions[searchOptionSelect], {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ [searchOptionSelect]: searchTextSelect }),
      });
      const data = await response.json();

      if (response.ok) {
        console.log(data);
        props.handleCallback(data);
      } else {
        //   setError(`Error: ${data.message}`);
      }
    } catch (error) {
      // setApiResponse(`Error fetching data: ${error.message}`);
    }
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionSelect = (option) => {
    setSearchOption(option);
    setShowDropdown(false);
    setSearchText("");
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder={"Search by " + searchOption}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            handleBookSearch(searchOption, searchText);
          }}
          style={{
            position: "relative",
            backgroundColor: "#007acc",
            color: "white",
            // padding: "5px 10px",
            // borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            // marginLeft: "10px",
          }}
        >
          Search
          {showDropdown && (
            <ul
              style={{
                position: "absolute",
                // top: "30px",
                // left: "56%",
                color: "black",
                background: "white",
                padding: "5px",
                border: "1px solid #ccc",
                listStyleType: "none",
                zIndex: "1000",
                textAlign: "left",
              }}
            >
              {Object.keys(props.dropdownOptions).map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  style={{ textDecoration: "none" }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </button>
        <button
          // onClick={handleNextApi}
          onClick={(e) => {
            e.preventDefault();
            handleDropdownToggle();
          }}
          style={{
            backgroundColor: "#007acc",
            color: "white",
            // padding: "5px 10px",
            // borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            // marginLeft: "10px",
          }}
        >
          <span role="img" aria-label="Down Arrow">
            &#x25BC;
          </span>
          {/* down arrow character */}
        </button>
      </div>
    </>
  );
}

export default Search;
