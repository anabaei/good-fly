/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { useState, useEffect } from "react";


const trips = () => {
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
      <h1>Trips</h1>

   

    
    

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

export default trips;
