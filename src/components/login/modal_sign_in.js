import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {Grid, Box} from "theme-ui";
import { signIn, signOut, useSession } from "next-auth/react";
import GoogleButton from "react-google-button";

function ModalWrapper(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data: session } = useSession();

  return (
    <>
      {console.log(">>><<>>", session)}
      <Button variant="primary" onClick={handleShow}>
        {props.tile}
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
           <Grid gap={1} columns={["1fr 1fr 1fr"]}>
          <Box></Box>
          <Box></Box>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Box></Box>
          <Box>
            <GoogleButton
              onClick={() => signIn("google")}
              style={{ marginTop: "1rem" }}
            />
          </Box>
          <Box></Box>
          <Box></Box>
          <Box>
            <Button onClick={() => signIn("facebook")}>
              Sign in with Facebook
            </Button>
          </Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Grid>
      </Modal>
    </>
  );
}

export default ModalWrapper;
