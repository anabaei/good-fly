/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import { useState, createContext, useContext } from "react";
import Modal from "./common/modal";
import ModalLogin from "./login/modal_sign_in"
import Login from './login/index'

const Nav = (props) => (
  <header
    sx={{
      height: "60px",
      width: "100vw",
      bg: "something",
      borderBottom: "1px solid",
      // borderColor: "primary",
    }}
  >
    <nav
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        variant: "containers.page",
        height: "100%",
      }}
    >
      {console.log(props.changeTheme)}
      <Link href="/">
        <a sx={{ fontWeight: "bold", fontSize: 4, cursor: "pointer" }}>
          Note App
        </a>
      </Link>
      {/* {console.log(process.env)} */}
      <div onClick={props.changeTheme}>change theme</div>
      <Link href="/notes">
        <a sx={{ color: "text", fontSize: 3, cursor: "pointer" }}>notes</a>
      </Link>

      {/* modal */}
      {/* <userContext.Provider value={{ user: "Steve" }}> */}
      <Modal tile="I am Travelor"  travelor="true"  />
      <Modal tile="place an order" package="true" />
      {/* const { user } = useContext(userContext); */}
      {/* </userContext.Provider> */}
      {/* <ModalLogin tile="Sing In.."  sign_in="true"  /> */}
      <Login />
      {/* <button onClick={() => signIn()}>Sign in</button> */}
    </nav>
  </header>
);

export default Nav;

