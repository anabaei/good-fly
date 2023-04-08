import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
// departure location date 
// destination location date
// explanation
// cost 
function TravelForm() {
    const [date, setDate] = useState(new Date());
  return (
    <Form style={{ padding: '1rem' }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>Pick up Location</Form.Label>
        <Form.Control type="location" placeholder="Enter Location" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Departure Date</Form.Label>
        <Form.Control
                    type="date"
                    name="datepic"
                    placeholder="DateRange"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>Deliver Location</Form.Label>
        <Form.Control type="location" placeholder="Enter Location" />
        {/* <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>
      
    
       <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Arrival Date</Form.Label>
        <Form.Control
                    type="date"
                    name="datepic"
                    placeholder="DateRange"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
       </Form.Group>

      
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Free" />
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="formComment">
        <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" rows={3} />
       </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TravelForm;