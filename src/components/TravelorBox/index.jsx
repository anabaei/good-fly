/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Button, Grid, Box } from "theme-ui";

const TravelorBox = (props) => (
  <div>
      {console.log("params!!>>= ",props.person.email)} 
    <h3>Title: {props.person.name}</h3><h5>Description: {props.person.description}</h5><Button
    onClick={() => router.push({
      pathname: `/travelDetails`,
      query: { travelId: "12345" },
    })}
  >
    details
  </Button>
  </div>

);

export default TravelorBox
