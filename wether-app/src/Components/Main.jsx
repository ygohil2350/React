import React from 'react';
import { useSelector } from "react-redux";
import MainCard from './MainCard';

const Main = () => {
    const selector = useSelector((ele) => ele.sampleReducer.myState);


    return (
        <div style={{display:"flex"}} id="App">
            {selector.map((item)=>
            <MainCard  label={item.label} lat={item.lat} lon={item.lon} img={item.img}/>
            )}
            

        </div>
    );
};

export default Main;