import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const StudentParent = () => {
  const dispach=useDispatch((ele)=>ele.studentReduser.student)
    const selecter=useSelector((get)=>get.studentReduser.student)
    console.log(selecter)
    return (
        <div>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email ID</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Nationality</TableCell>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Level</TableCell>
            <TableCell align="right">Fees paid</TableCell>
            <TableCell align="right">Fess Paid Date</TableCell>
            <TableCell align="right">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
            {selecter.map((ele)=>(
            <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={ele.No}>
                
              <TableCell component="th" scope="row">{ele.No}</TableCell>
              <TableCell align="right">{ele.name}</TableCell>
              <TableCell align="right">{ele.Email}</TableCell>
              <TableCell align="right">{ele.Address}</TableCell>
              <TableCell align="right">{ele.Age}</TableCell>
              <TableCell align="right">{ele.Nationality}</TableCell>
              <TableCell align="right">{ele.Class}</TableCell>
              <TableCell align="right">{ele.Level}</TableCell>
              <TableCell align="right">{ele.Fees_paid}</TableCell>
              <TableCell align="right">{ele.Fees_paid_Date}</TableCell>
              <TableCell><Button variant="contained" size="medium">Edit</Button></TableCell>
              <TableCell><Button variant="contained" size="medium" onClick={()=>dispach({type:"Delete-Data",data:ele})}>Delete</Button></TableCell>
            </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Link to="/add">
        <Box sx={{ '& button': { m: 1 } }}>
            <Button variant="contained" size="medium" >
                Add
            </Button>
        </Box>
        </Link>
        </div>
    );
};

export default StudentParent;