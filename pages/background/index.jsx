import Image from "next/image";
import searches from "../search/index.jsx";
import travels from "../travels/index.jsx";

const Background = () => (
  <div>
    <div
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      <Image
        alt="Mountains"
        src="/bg.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <p
      className={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        zIndex: "1",
      }}
    >
       {searches()}
      <br />
      as a Background
      {travels()}
    </p>
    
  </div>
);

export default Background;
