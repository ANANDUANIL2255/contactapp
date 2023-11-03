import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Container, Row } from 'react-bootstrap';

function Singleview() {

    const [allData,setData]=useState([])

    const {email}=useParams()
    console.log(email);

    const fetchAllDatas=async()=>{
        const result=await axios.get('/db.json')
        setData(result.data.contacts)

    }

    useEffect(()=>{
        fetchAllDatas()

    },[])

    const singleData=allData.find(i=>i.email==email)
      console.log(singleData);

  return (


    <div>
      { 
      singleData &&
       <Container>
            <Row className='p-5'>
            <Col className='p-5'>
            <img style={{height:'400px',width:'100%'}} src={singleData.profile} alt="" />
            </Col>
                <Col > 
                <ListGroup className='fs-3 mt-3 pt-2'>
      <ListGroup.Item className='mt-5 text-center'>{singleData.name}</ListGroup.Item>
      <ListGroup.Item className='mt-3 text-center'><p style={{fontSize:'20px'}}>{singleData.email}</p></ListGroup.Item>
      <ListGroup.Item className='mt-3 text-center'><p style={{fontSize:'20px'}}>{singleData.mobile}</p></ListGroup.Item>
      <ListGroup.Item className='mt-3 text-center'><p style={{fontSize:'20px'}}>{singleData.location}</p></ListGroup.Item>
    </ListGroup>
    </Col>
    </Row>
    </Container>}

    </div>
  )
}

export default Singleview