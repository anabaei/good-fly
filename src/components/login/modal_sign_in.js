import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { signIn, signOut, useSession } from "next-auth/react";
import GoogleButton from "react-google-button";


function ModalWrapper(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const { data: session } = useSession();
  

  return (
    <>
     {
        console.log(">>><<>>", session)
     }
      <Button variant="primary" onClick={handleShow}>
        {props.tile}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Sign In.. </Modal.Title>
        </Modal.Header>

        <GoogleButton
            onClick={() => signIn("google")}
            style={{ marginTop: "1rem" }}
          />

      </Modal>
    </>
  );
}

export default ModalWrapper;
