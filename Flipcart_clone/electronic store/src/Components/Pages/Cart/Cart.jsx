import { Grid } from '@material-ui/core';
import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { addToCart ,removeFromCart} from '../../../Redux/Product/action';
import { useHistory } from 'react-router-dom';
import Navbar from '../../Layout/Navbar';
import styles from './Cart.module.css'
import { Button } from '@material-ui/core';
import AlertDialog from './AlertDialog';

const Cart = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  

    const handleShop = () => {
        history.push("/")
    }
    const cartData = useSelector(state => state.product.cart)
    const handleCart = (id) => {
        dispatch(addToCart(id))
    }
    const handelRemove =(id)=>{
        dispatch(removeFromCart(id))
    }
    const handelOpen=()=>{
        setOpen(true)
    }
    const Popup = props => {
        return (
          <div className="popup-box">
            <div className="box">
              <span className="close-icon" onClick={props.handleClose}>x</span>
              {props.content}
            </div>
          </div>
        );
      };
    return (
        <div>
        <Navbar/>
        {cartData.length === 0 ?(
            <div style={{margin:"15% 15% 0 35%"}}>
                <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" width="300px" alt="logo" />
                <div className={styles.mid} >
                <h2 >your cart is empty</h2>
                <button className={styles.shop} onClick={handleShop} >shop now</button>
                </div>
            </div>):(
        <Grid container className={styles.main} >
            <Grid item lg={6} className={styles.shadow} spacing={3} >
                <div className={styles.mycart}>myCart</div>
                {
                    cartData.map((item) => (
                        <div className={styles.flex}> 
                            <div>
                                <img src={item.img} width="150px" alt="product_image" />
                                <div className={styles.qty} >
                                    <button onClick={()=>handelRemove(item.id)}>-</button> {item.qty} <button onClick={()=>handleCart(item.id)} >+</button>
                                </div>
                            </div>
                            <div>
                                <div className={styles.name} >{item.product_name} </div>
                                <div className={styles.price}> ₹{item.price} </div>
                            </div>
                            <div>Delivery by Tomorrow, Mon | Free₹40</div>
                        </div>
                    ))
                }
                <div className={styles.place_order} >
                    <Button style={{color:"red",backgroundColor:"black"}} onClick={handelOpen}>PLACE ORDER</Button>
                </div>
            </Grid>
            <Grid item className={styles.details} lg={4}>
                <div className={styles.price_details} >PRICE DETAILS</div>
                <div className={styles.items}>
                    <div>Price of Items</div>
                    <div>₹{
                        cartData.reduce((acc,curr) => {return acc+Number(curr.original_price*curr.qty)},0)
                    }
                    </div>
                </div>
                <div className={styles.amount}>
                    <div>Discount Amount</div>
                    <div>-₹{
                        cartData.reduce((acc,curr) => {return acc+Number(curr.original_price*curr.qty)},0) - cartData.reduce((acc,curr) => {return acc+Number(curr.price*curr.qty)},0) 
                    }
                    </div>
                </div>
                <div className={styles.delivery} >
                    <div>Delivery Charges</div>
                    <div>FREE</div>
                </div>
                <div className={styles.total} >
                    <div>Total Amount</div>
                    <div>₹{
                        cartData.reduce((acc,curr) => {return acc+Number(curr.price*curr.qty)},0)
                    }
                    </div>
                </div>
                
            </Grid>
        </Grid>)}
        {open?<AlertDialog
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open} 
        setOpen={setOpen}

        
        />:(<></>)}
        </div>
    );
}

export default Cart;



