import Image from "next/image";

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
        zIndex: "-1",
      }}
    >
      Image Component
      <br />
      as a Background
    </p>
  </div>
);

export default Background;
