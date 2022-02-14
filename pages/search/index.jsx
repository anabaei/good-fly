/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { useState } from "react";
import Input from "../../src/components/common/input";
// import ReactSelect from 'react-select-cities';

const searches = () => {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `This is my note ${i}` }));

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const handleSearch = () => {
    console.log("sss");
    //fetch data from third party 
  };
  const autocompleteCities = ["Vancouver", "Toronto", "Montreal", "Seatl", "starfish"];

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Search</h1>

      <Input
        id="search"
        list="places"
        label="To"
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
        label="From"
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

      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* {notes.map(note => (
          <div key={note.id} sx={{width: '33%', p: 1}}>
            <Link  href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div  sx={{variant: 'containers.card',}}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))} */}
        {/* <div>
        <CountryDropdown
          value={country}
          onChange={(val) => setCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => setRegion(val)} />
      </div> */}
      </div>
    </div>
  );
};
// const searches1 = "aa"
// export default searches1;

// const greet = () => 'hi user!'
export default searches
