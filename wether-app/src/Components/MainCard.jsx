import React,{ useEffect,useState } from 'react';
import {Card,Button} from 'react-bootstrap';
import axios from 'axios';

const MainCard = (props) => {
    const [data,setData]=useState({})

    useEffect(()=>{
      callapi()
    },[])

  const callapi=async()=>{
     const result=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&units=imperial&appid=3a6e677285ff9e1ce2130fd3f4b603ae`)
     setData(result.data.main)
  }
 

  const Refresh=()=>{
    callapi()
   
  }
  
    return (
        <div >
          <Card style={{ width: '18rem',margin:"15px" }} >
            <Card.Img variant="top" src={props.img} width="18rem" height="200rem"/>
            <Card.Body>
              <Card.Title>{props.label}</Card.Title>
              <Card.Text>Temprature:{data.temp}F</Card.Text>
              <Card.Text>Minimum Temprature:{data.temp_min}F</Card.Text>
              <Card.Text>Maximum Temprature:{data.temp_max}F</Card.Text>
              <Button variant="primary" onClick={Refresh} >Refresh</Button>
             </Card.Body>
          </Card>
        </div>
    );
};

export default MainCard;