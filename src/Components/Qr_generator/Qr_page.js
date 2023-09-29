import React from 'react'
import './Qr_page.css'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Qrpage = () => {
  return (
    <div className='section'>
      <h2 className='my-7 text-center font-semibold text-4xl'>Fill your Vehicle details</h2>
      <div className='form1 flex justify-center items-center px-10 w-screen'>
        <div className="leftSection mx-20 w-screen flex items-center justify-center">
          <Form className='w-80'>
            <Form.Select className="border-slate-50 mb-3 mr-9" aria-label="Vehicle Make">
              <option>Select Make</option>
              <option value="1">Maruti Suzuki</option>
              <option value="2">Hyundai</option>
              <option value="3">Tata</option>
              <option value="4">Mahindra</option>
              <option value="5">Honda</option>
              <option value="6">Toyota</option>
              <option value="7">Ford</option>
            </Form.Select>
            <Form.Select className="mb-3" aria-label="Vehicle Make">
              <option>Select Model</option>
              <option value="1">Alto K10</option>
              <option value="2">Baleno</option>
              <option value="3">Brezza</option>
              <option value="4">Celerio</option>
              <option value="5">Swift</option>
              <option value="6">WagonR</option>
              <option value="7">Zen Estilo</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Year</Form.Label>
              <Form.Control type="number" defaultValue="2023" placeholder="Enter vehicle make year" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Trim</Form.Label>
              <Form.Control type="text" placeholder="Enter vehicle trim" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>KMs Driven</Form.Label>
              <Form.Control type="number" placeholder="Enter KMs driven" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Vehicle Number</Form.Label>
              <Form.Control type="text" placeholder="Enter vehicle no. e.g. CG04XY0000" />
            </Form.Group>
            <Form.Label>Ownership</Form.Label>
            <Form.Check type="radio" label="1st hand" aria-label="radio 1" />
            <Form.Check type="radio" label="2nd hand" aria-label="radio 2" />
            <Form.Check type="radio" label="3rd hand" aria-label="radio 3" /><br></br>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Whether covered under Insurance" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Valid Upto</Form.Label>
              <Form.Control type="month" placeholder="Insurance valid upto" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Select image :</Form.Label>
              <Form.Control type="file" accept='image/*' />
            </Form.Group>
            <Button className="bg-red-400 w-36 my-4" variant="danger" type="submit">
              Generate QR
            </Button>
          </Form>
        </div>
        
      </div>
    </div>
  )
}

export default Qrpage