import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
// departure location date 
// destination location date
// explanation
// cost 
function PackageForm() {
    const [date, setDate] = useState(new Date());
  return (
    <Form style={{ padding: '1rem' }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>Pick up Location</Form.Label>
        <Form.Control type="location" placeholder="Enter Location" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>Deliver Location</Form.Label>
        <Form.Control type="location" placeholder="Enter Location" />
        </Form.Group>
      
    
       {/* <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Arrival Date</Form.Label>
        <Form.Control
                    type="date"
                    name="datepic"
                    placeholder="DateRange"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
       </Form.Group> */}

      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Willing to Pay" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formComment">
        <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" placeholder="Including size, Weight
 of the package" rows={3} />
       </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default PackageForm;