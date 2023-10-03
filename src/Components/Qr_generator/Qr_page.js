import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addPostToDb } from "../../Utilities/firebase";
import { Navigate, useNavigate } from 'react-router-dom';

const Qrpage = () => {
  
  const [cardetails, setcardetails] = useState({make:" ",model:" ",makeyear:" ",trim:" ",kmd:"" ,vnum:" ",ins_valupto:" "})

  const change=(e)=>{
    setcardetails({...cardetails,[e.target.name]:e.target.value})//triple dot indicates jo pahle se hai usko rahne do uske aage se sab aur add kar do
  }
  let navigate=useNavigate();
  const adddata=()=>{
        addPostToDb(cardetails.make,cardetails.model,cardetails.makeyear,cardetails.trim,cardetails.kmd,cardetails.vnum,cardetails.ins_valupto);
        console.log(cardetails.make,cardetails.model,cardetails.makeyear,cardetails.trim,cardetails.kmd,cardetails.vnum,cardetails.ins_valupto);
        console.log("added successuful");
        navigate("/");
  }
  return (
    <div className='section'>
      <h2 className='my-7 text-center font-semibold text-4xl'>Fill your Vehicle details</h2>
      <div className='form1 flex flex-row justify-center items-center px-10 w-screen'>
        <div className="leftSection mx-5 w-96 flex items-center justify-center">
          <Form className=' w-80'>
            <Form.Select className="border-slate-50 mb-3" onChange={change} aria-label="Vehicle Make" name="make">
              <option>Select Make</option>
              <option   >Maruti Suzuki</option>
              <option   >Hyundai</option>
              <option   >Tata</option>
              <option   >Mahindra</option>
              <option   >Honda</option>
              <option   >Toyota</option>
              <option  >Ford</option>
            </Form.Select><br></br>
            <Form.Select className="mb-3" aria-label="Vehicle Make" onChange={change} name='model'>
              <option>Select Model</option>
              <option >Alto K10</option>
              <option >Baleno</option>
              <option >Brezza</option>
              <option >Celerio</option>
              <option >Swift</option>
              <option >WagonR</option>
              <option >Zen Estilo</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Year</Form.Label>
              <Form.Control type="number" name='makeyear' onChange={change} defaultValue="2020" placeholder="Enter vehicle make year" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Trim</Form.Label>
              <Form.Control type="text" placeholder="Enter vehicle trim" onChange={change} name="trim" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>KMs Driven</Form.Label>
              <Form.Control type="number" placeholder="Enter KMs driven" onChange={change} name="kmd"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Vehicle Number</Form.Label>
              <Form.Control type="text" placeholder="Enter vehicle no. e.g. CG04XY0000" onChange={change} name="vnum" />
            </Form.Group>
            <Form.Label>Ownership</Form.Label>
            <Form.Check type="radio" label="1st hand" aria-label="radio 1" />
            <Form.Check type="radio" label="2nd hand" aria-label="radio 2" />
            <Form.Check type="radio" label="3rd hand" aria-label="radio 3" /><br></br>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Whether covered under Insurance" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
              <Form.Label>Valid Upto</Form.Label>
              <Form.Control type="month" placeholder="Insurance valid upto" onChange={change} name="ins_valupto"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Select image :</Form.Label>
              <Form.Control type="file" accept='image/*' />
            </Form.Group>
            <Button className="bg-red-400 w-36 my-4" variant="danger" type="submit" onClick={adddata}>
              Upload details
            </Button>
          </Form>
        </div>
        <div className="rightSection h-96 w-96">
          <img src="https://linky.se/wp-content/uploads/2022/11/p2p-1.svg" alt="vehicle" />
        </div>
      </div>
    </div>
  )
}

export default Qrpage