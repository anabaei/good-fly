/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Button, Flex, Box, Grid } from "theme-ui";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default (req, res) => {
  const router = useRouter();
  console.log("router.query= ", router.query);
  const { params } = router.query;
  console.log("params!!= ", params);

  // call the be to get infos about users

  return (
    <Grid
      gap={1}
      columns={["1fr 1fr 1fr", "1fr 4fr 1fr"]}
    >
      <Box className="leftBar" style={{border: "2px solid green"}}>Bar</Box>
      <Box className="leftBar" style={{border: "2px solid red"}}>Bar</Box>
      <Box className="leftBar" style={{border: "2px solid green"}}>Bar</Box>
      <Box className="leftBar" style={{border: "2px solid blue"}}>Bar</Box>
      <Box className="leftBar" style={{border: "2px solid green"}}>Bar</Box>
      <Box className="leftBar" style={{border: "2px solid blue"}}>Bar</Box>
      <Box className="leftBar" style={{border: "2px solid green"}}>Bar</Box>
    </Grid>
  );
};
