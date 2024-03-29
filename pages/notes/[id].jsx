/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Button, Flex, Box, Grid } from "theme-ui";
import { useRouter } from "next/router";

import Link from "next/link";

export default (req, res) => {
  const router = useRouter();
  console.log("router.query= ", router.query);
  const { id } = router.query;

  return (
    
    <Grid gap={1} columns={[1,5, '1fr 1fr', '1fr 3fr 1fr']}>
      
      <Box className="leftBar">leftBar</Box>
      <Box className="cases" >Box</Box>
      <Box className="rightBar">Rightbar</Box>
      <Box className="cases" >Box</Box>
 
    
      
    </Grid>
    // <Grid gap={2} columns={[1, 1, 6]}>
    //   <div styles={{border: 'solid red 1px'}}>
    //     <h1>Note: {id} </h1>
    //   </div>
    // </Grid>
    // <div sx={{variant: 'containers.page'}}>
    //    {/* <Grid className="searchMain" gap={2} columns={[1, 1, 6]}></Grid> */}
    //   <h1>Note: {id} </h1>
    // </div>
  );
};
