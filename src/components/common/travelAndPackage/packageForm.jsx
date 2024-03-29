import Button from "react-bootstrap/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function PackageForm() {
  const [date, setDate] = useState(new Date());
  // const data = useSession()
  const { data: session, status, accessToken } = useSession();

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("III", session);
    try {
      const jwtTokenResponse = await fetch(
        "http://localhost:3000/api/getToken"
      );
      const jwtToken = await jwtTokenResponse.text();

      const data = { session };
      const form = event.target;
      const jsonData = new FormData(form);
      const formData = new FormData(event.target);
      
      accessToken = JSON.parse(localStorage.getItem('session'))
      console.log(">>>>", accessToken)
      const response = await fetch("http://localhost:3001/packages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwtToken.replace(/['"]+/g, "")}`,
          accessToken
          
        },
        body: JSON.stringify({
          ...jsonData,
          location: formData.get("location"),
          destination: formData.get("destination"),
          timeRange: formData.get("departureDate"),
          willingToPay: formData.get("willingToPay") === "on",
          explanation: formData.get("explanation")
        }),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form style={{ padding: "1rem" }} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pick up Location</Form.Label>
        <Form.Control
          name="location"
          type="location"
          placeholder="Enter 1 Location"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Deliver Location</Form.Label>
        <Form.Control
          name="destination"
          type="location"
          placeholder="Enter Location"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date </Form.Label>
        <Form.Control
          type="date"
          name="departureDate"
          placeholder="DateRange"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          name="willingToPay"
          type="checkbox"
          label="Willing to Pay"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formComment">
        <Form.Label>More info</Form.Label>
        <Form.Control
          name="explanation"
          as="textarea"
          placeholder="Including size, Weight of the package"
          rows={3}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default PackageForm;
