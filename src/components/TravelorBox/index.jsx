/** @jsxRuntime classic */
/** @jsx jsx */
import { useRouter } from "next/router";
import { jsx, Button, Grid, Box } from "theme-ui";

export default function TravelorBox(props) {
  const router = useRouter();

  return (
    <div>
      {console.log("params!!>>= ", props.person.email)}
      <div>Title: {props.person.name}</div>
      <div>Description: {props.person.description}</div>
      <Button
        onClick={() =>
          router.push({
            pathname: `/details/[travelId]`,
            query: { travelId: "12345" },
          })
        }
      >
        details
      </Button>
    </div>
  );
}



