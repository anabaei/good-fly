/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Button, Flex, Box, Grid } from "theme-ui";
import { useRouter } from "next/router";

import Link from "next/link";

export default (req, res) => {
  const router = useRouter();
 
  const handleClick = (travelId) => {
    router.push({
      pathname: "/details/[travelId]",
      query: { pid: travelId },
    });
  };

  console.log("params= ", params);

  return (
    <Grid gap={1} columns={[1, 3, "1fr 1fr", "1fr 3fr 1fr"]}>
      <Box className="leftBar">leftBar</Box>
      <Box className="cases">
        <div>Departure: Tehran Date: Destination: Vancouver Date:</div>
        <h5>Description: some info</h5>
        <Button onClick={handleClick("12345")}>details</Button>
      </Box>
      <Box className="rightBar">Rightbar</Box>
      <Box bg="">Box</Box>
    </Grid>
  );
};
