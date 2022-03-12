import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStudent from './Students/AddStudent';
import StudentParent from './Students/StudentParent';

const Landing = () => {
    
    return (
        <div>
            <h1>Admin</h1>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentParent/>} />
          <Route path="/add" element={<AddStudent />} />
        </Routes>
      </BrowserRouter>
            
        </div>
    );
};

export default Landing;