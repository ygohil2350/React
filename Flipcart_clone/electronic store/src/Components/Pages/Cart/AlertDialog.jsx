import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { emptyCart } from '../../../Redux/Product/action';
import {useDispatch, useSelector} from 'react-redux'



export default function AlertDialog({open,handleClose,setOpen}) {
    const [first,setFirst]=useState("")
    const [last,setLast]=useState("")
    const [address,setAddress]=useState("")
    const [city,setCity]=useState("")
    const [state,SetState]=useState("")
    const [zip,setZip]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const history = useHistory()
    const dispatch = useDispatch()

    const handleClose2=()=>{
        if (first==""|| last==""|| address==""|| city==""|| state==""|| zip==""|| phone==""|| email==""){
            alert("Fill all fileds")
        }
        else {
            setOpen(false)
            alert("Your Data is saved and Order is placed.")
            history.push("/")
            dispatch(emptyCart())
        }

    }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Shipping Details
        </DialogTitle>
        <DialogContent>
        <TextField id="standard-basic" style={{margin:5}} label="First Name" onChange={(e)=>setFirst(e.target.value)} variant="standard" />
        <TextField id="standard-basic" style={{margin:5}} label="Last Name" onChange={(e)=>setLast(e.target.value)} variant="standard" />
        <TextField id="standard-basic" style={{margin:5}} label="Address" onChange={(e)=>setAddress(e.target.value)} variant="standard" />
        <TextField id="standard-basic" style={{margin:5}} label="City" onChange={(e)=>setCity(e.target.value)} variant="standard" />
        <TextField id="standard-basic" style={{margin:5}} label="State" onChange={(e)=>SetState(e.target.value)} variant="standard" />
        <TextField id="standard-basic" style={{margin:5}} label="Zip Code"  onChange={(e)=>setZip(e.target.value)} variant="standard" inputProps={{ maxLength: 6 }}type="number"/>
        <TextField id="standard-basic" style={{margin:5}} label="Phone Number" onChange={(e)=>setPhone(e.target.value)} variant="standard" inputProps={{ maxLength: 10 }} type="number"/>
        <TextField id="standard-basic" style={{margin:5}} label="Email" onChange={(e)=>setEmail(e.target.value)} variant="standard" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose2} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
