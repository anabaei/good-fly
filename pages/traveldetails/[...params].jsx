import React from "react";
import { useRouter } from "next/router";
import { Grid, Box } from "theme-ui";
import { GiAirplaneDeparture, GiAirplaneArrival } from 'react-icons/gi';
import { GoLocation } from "react-icons/go";
import {  AiOutlineFileText } from "react-icons/ai";
import {GrContact} from 'react-icons/gr'

const travelDetails = () => {
  const router = useRouter();
  const { params } = router.query;
  console.log("para= ", params);

  return (
    <div>
    <Grid gap={1} columns={["1fr 5fr 1fr", "1fr 4fr 2fr"]}>
      <Box></Box>
      <Box className="travelDetailsInfo">
        <div> <GiAirplaneDeparture /> Departure date: </div>
        <div> <GiAirplaneArrival /> Arrival date: </div>
        <div> <GoLocation /> Pick up </div>
      </Box> 
      <Box></Box>
    </Grid>
    <Grid gap={1} columns={["1fr 5fr 1fr", "1fr 4fr 2fr"]}>
      <Box></Box>
      <Box className="travelDetailsInfo">
        <div> <GrContact /> Preferred Contact </div>
        <div> <AiOutlineFileText /> Comment:</div>
      </Box> 
      <Box></Box>
    </Grid>
    </div>
  );
};

export default travelDetails;

