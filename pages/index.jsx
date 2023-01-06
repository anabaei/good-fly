/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import Link from "next/link";
import searches from "./search/index.jsx";
import trips from "./trips/index.jsx";
import Background from "./background/index.jsx";

export default () => (
  // <div sx={{ border: `4px solid black` }}>
    <div>
      {Background()}
      {/* <div
      sx={{
        variant: "containers.page",
        border: `4px solid red`,
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 sx={{ fontSize: 15, my: 0 }}>
        Welcome This is a really dope note taking app.
      </h1>
    </div>
    {searches()}
    {trips()} */}
    </div>
);
export async function getStaticProps(context) {
  console.log(context);
  return {
    props: {},
  };
}


