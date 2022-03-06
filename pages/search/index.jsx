/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import Link from "next/link";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { useState, useEffect } from "react";

import Input from "../../src/components/common/input";
// import ReactSelect from 'react-select-cities';

import TextField from "@mui/material/TextField";
// import datepicker from 'js-datepicker'
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "react-datepicker";

import { Box } from "@mui/material/Box";

const searches = () => {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `This is my note ${i}` }));

  //componentdidmount, componentdidupdate
  useEffect(() => {
    console.log("99");
    // get api fetch here
  });

  const [date, setDate] = useState(null);

  const handleSearch = (e) => {
    console.log("sss", e.target.name);
    //fetch data from third party
  };
  const autocompleteCities = [
    "Vancouver",
    "Toronto",
    "Montreal",
    "Seatl",
    "starfish",
  ];

  return (
    <div
      sx={{
        variant: "containers.page",
        border: "1px solid orange",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Search</h1>

      <Input
        id="search"
        list="places"
        name="search"
        md="4"
        onChange={handleSearch}
        pattern={autocompleteCities.join("|")}
        autoComplete="off"
      />
      <datalist id="places">
        {autocompleteCities.map((city, i) => (
          <option key={i}>{city}</option>
        ))}
      </datalist>

      <Input
        id="search"
        list="places"
        name="search"
        md="4"
        onChange={handleSearch}
        pattern={autocompleteCities.join("|")}
        autoComplete="off"
      />
      <datalist id="places">
        {autocompleteCities.map((city, i) => (
          <option key={i}>{city}</option>
        ))}
      </datalist>

      <div>
        <DatePicker
          showYearDropdown
          selected={date}
          // format="dd/mm/yyyy"
          onChange={(date) => {
            console.log(date);
            setDate(date);
          }}
        />
      </div>

      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      ></div>
    </div>
  );
};

export default searches;
