/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Button, Flex, Box, Grid } from "theme-ui";
import { useResponsiveValue, useBreakpointIndex } from "@theme-ui/match-media";

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
import { useRouter } from "next/router";

const searches = () => {
  const router = useRouter();
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `This is my note ${i}` }));

  //componentdidmount, componentdidupdate
  useEffect(() => {
    console.log("99");
    // get api fetch here
  });

  const [date, setDate] = useState(null);
  const [departure, setDeparture] = useState(null);
  const [destination, setDestination] = useState(null);

  const handleSearch = (e) => {
    console.log("target= ", e.target.name);
    if (e.target.name === "destination") setDestination(e.target.value);
    else if (e.target.name === "departure") setDeparture(e.target.value);
    //fetch data from third party

    // router.push("/notes/ss", `/notes/3`)
  };

  const handleSubmit = (e) => {
    console.log("<<<", departure, destination, date);
    console.log("submited", e);
    //fetch data from third party

    router.push({
      pathname: `/travels`,
      query: { departure: departure, destination: destination, date: date },
    });
  };
  const autocompleteCities = [
    "Vancouver",
    "Toronto",
    "Montreal",
    "Seatl",
    "starfish",
  ];
  const re = useBreakpointIndex();
  return (
    <Grid className="searchMain" gap={2} columns={[1, 1, 6]}>
      <Box className="searchBox"></Box>
      <Box className="searchBox">
        <Input
          id="search"
          list="places"
          name="departure"
          onChange={handleSearch}
          pattern={autocompleteCities.join("|")}
          autoComplete="off"
        />
        <datalist id="places">
          {autocompleteCities.map((city, i) => (
            <option key={i}>{city}</option>
          ))}
        </datalist>
      </Box>

      <Box className="searchBox">
        <Input
          id="search"
          list="places"
          name="destination"
          onChange={handleSearch}
          pattern={autocompleteCities.join("|")}
          autoComplete="off"
        />
        <datalist id="places">
          {autocompleteCities.map((city, i) => (
            <option key={i}>{city}</option>
          ))}
        </datalist>
      </Box>
      <Box className="searchBox">
        <DatePicker
          showYearDropdown
          selected={date}
          // format="dd/mm/yyyy"
          onChange={(date) => {
            // console.log(date);
            setDate(date);
          }}
        />
      </Box>
      <Box className="searchBox">
        <Button variant="secondary" onClick={handleSubmit}>
          Search
        </Button>
      </Box>

      {/* <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      ></div> */}
      <Box></Box>
    </Grid>
  );
};

export default searches;
