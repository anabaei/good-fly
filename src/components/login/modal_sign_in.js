import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Grid, Box } from "theme-ui";
import { signIn, signOut, useSession } from "next-auth/react";
import GoogleButton from "react-google-button";
import { FacebookLoginButton } from "react-social-login-buttons";

function ModalSignIn(props) {
  const [show, setShow] = useState(false);

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  // const [session, loading] = useSession();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.tile}
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Grid gap={1} columns={["1fr 2fr 1fr"]}>
          
          <Box></Box>
          <Box></Box>
          <Modal.Header closeButton style={{ margin: "1rem" }}>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          
          <Box></Box>
          <Box>
            <GoogleButton
              textButton="Sign in"
              onClick={() => signIn("google")}
              style={{ marginTop: "1rem" }}
            />
          </Box>
          <Box></Box>

          <Box></Box>
          <Box>
            <FacebookLoginButton onClick={() => signIn("facebook")}/>
          </Box>
          <Box></Box>

          <Box></Box>
           <Box style={{ marginBottom: "4rem" }}></Box>
          <Box></Box>
        </Grid>
      </Modal>
    </>
  );
}

export default ModalSignIn;
