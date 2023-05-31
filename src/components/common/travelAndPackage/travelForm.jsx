import Button from 'react-bootstrap/Button';
import { signIn, signOut, useSession } from "next-auth/react";
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function TravelForm() {
  const [date, setDate] = useState(new Date());
  const { data: session, status } = useSession();

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the default form submission behavior

    // get the form data
    const formData = new FormData(event.target);
    
    const token = JSON.parse(localStorage.getItem('session'))
    // make a POST request to the backend endpoint with the form data
    fetch('/backend-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token.accessToken,
        'expiresAt': token.expires,
        token
      },
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        // handle the response from the backend
      })
      .catch(error => {
        // handle any errors that occurred during the request
      });
  };

  return (
    <Form style={{ padding: '1rem' }} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pick up Location</Form.Label>
        <Form.Control type="location" placeholder="Enter Location" name="pickupLocation" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Departure Date</Form.Label>
        <Form.Control
          type="date"
          name="departureDate"
          placeholder="DateRange"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Deliver Location</Form.Label>
        <Form.Control type="location" placeholder="Enter Location" name="deliverLocation" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formComment">
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" rows={3} name="comment" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TravelForm;
