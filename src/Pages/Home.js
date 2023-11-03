import React, { useEffect, useState } from 'react'
import Restcard from '../Components/Restcard'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'

function Home() {

    const [contacts,setContact]=useState([])

    const fetchData=async()=>{
        const result=await axios.get('/db.json')
        setContact(result.data.contacts)

    }

    useEffect(()=>{
        fetchData()
    },[])

    console.log(contacts);

  return (
    <div>

<Container>

        <Row className='ms-2' >

     { 
     
     contacts.map(i=>(
        <Col className='ps-3 mt-5 p-2' lg={3} md={4} sm={6}>

        <Restcard item={i}></Restcard>
    
        </Col>
     ))
    
    }
    </Row>

       </Container>
    </div>
  )
}

export default Home