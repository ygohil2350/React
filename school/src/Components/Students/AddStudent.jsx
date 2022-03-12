import React from 'react';
import TextField from '@mui/material/TextField';
import "./AddStudent.css";
import { useState } from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const AddStudent = () => {
    const [no,setNo]=useState(0)
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [age,setAge]=useState(0);
    const [nationality,setNationality]=useState("");
    const [clas,setclas]=useState("");
    const [level,setLevel]=useState("");
    const [Fees,setFees]=useState(0);
    const [date,setDate]=useState("");
    const [data,setData]=useState({});
    const dispatch=useDispatch();

    const Handel=()=>{
        setData({No:no,name:name,Email:email,Address:address,Age:age,Nationality:nationality,Class:clas,Level:level,Fees_paid:Fees,Fees_paid_Date:date})
        console.log(data)
        if(data!=={}){
        dispatch({type:"Add-Data",data:data})
    }
    }


    return (
        <div  >
            <h2>Add</h2>
            <TextField id="standard-basic" label="No" variant="standard" className='center' onChange={(ele)=>setNo(ele.target.value)}/>
            <TextField id="standard-basic" label="Name" variant="standard" className='center' onChange={(ele)=>setName(ele.target.value)}/>
            <TextField id="standard-basic" label="Email" variant="standard" type="email" className='center' onChange={(ele)=>setEmail(ele.target.value)}/>
            <TextField id="standard-basic" label="Address" variant="standard" className='center' onChange={(ele)=>setAddress(ele.target.value)}/>
            <TextField id="standard-basic" label="Age" variant="standard" type="number" className='center' onChange={(ele)=>setAge(ele.target.value)}/>
            <TextField id="standard-basic" label="Nationality" variant="standard" className='center' onChange={(ele)=>setNationality(ele.target.value)}/>
            <TextField id="standard-basic" label="Class" variant="standard" className='center' onChange={(ele)=>setclas(ele.target.value)}/>
            <TextField id="standard-basic" label="Level" variant="standard" className='center' onChange={(ele)=>setLevel(ele.target.value)}/>
            <TextField id="standard-basic" label="Fees Paid" variant="standard" type="number" className='center' onChange={(ele)=>setFees(ele.target.value)}/>
            <br/>
            <h3>Fees Paid Date:</h3><TextField id="standard-basic"  variant="standard" type="date" className='center' onChange={(ele)=>setDate(ele.target.value)}/>
            <br/>
            <br/>
            <Button variant="contained" size="medium" onClick={Handel} > 
                Add
            </Button>
            <br/>
            <br/>
            <Link to="/">

            <Button variant="contained" size="medium" >
                Home
            </Button>
        </Link>
            
           
        </div>
    );
};

export default AddStudent;
