/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Grid } from "theme-ui";

import { useState, useEffect } from 'react'
import TravelorBox  from '../../src/components/TravelorBox'
import { useSession, signIn, signOut } from "next-auth/react";


export default (req, res) => {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  
  const { data: session } = useSession();

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
      {session.user.name}
      <Box className="leftBar">leftBar</Box>
      <Grid
      gap={1}
      columns={["1fr", "1fr 1fr"]}
    >
      {[...data.entries].map((x, index) =>
      <Box className="travelor-box">
          <TravelorBox  person={{ name: x.API, description: x.Description }} />
      </Box>
      )}
      </Grid>
      <Box className="rightBar">Rightbar</Box>
    </Grid>
  );
};
