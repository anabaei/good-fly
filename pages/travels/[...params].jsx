/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Button, Flex, Box, Grid } from "theme-ui";
import { useRouter } from "next/router";

import Link from "next/link";

export default (req, res) => {
  const router = useRouter();
  console.log("router.query= ", router.query);
  const { params } = router.query;
  console.log("params= ",params)

  return (
    
    <Grid gap={1} columns={[1,3, '1fr 1fr', '1fr 3fr 1fr']}>
      
      <Box className="leftBar">leftBar</Box>
      <Box className="cases" >Box</Box>
      <Box className="rightBar">Rightbar</Box>
      <Box bg="" >Box</Box>
 
    
      
    </Grid>

  );
};
