/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Button, Flex, Box, Grid } from "theme-ui";

import { useState, useEffect } from 'react'
import TravelorBox  from '../../src/components/TravelorBox'

import Link from "next/link";

export default (req, res) => {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    fetch('https://api.publicapis.org/entries')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        console.log(">>>",data.entries)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  if(data)
  return (
    
    <Grid gap={1} columns={[ "1fr 7fr 1fr", "1fr 3fr 1fr", "1fr 3fr 1fr"]}>
      <Box className="leftBar">leftBar</Box>
      <Box>
      {[...data.entries].map((x, index) =>
        
          <TravelorBox  person={{ name: x.API, description: x.Description }} />
       
      )}
      </Box>
      
      <Box className="rightBar">Rightbar</Box>
    </Grid>
  );
};
