import React, {useEffect} from 'react';
import BootstrapCarousel from '../../Layout/BootstrapCarousel ';
import Footer from '../../Layout/Footer/Footer';
import Navbar from '../../Layout/Navbar';
import { Grid } from '@material-ui/core';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getProduct } from '../../../Redux/Product/action';
import {ProductCard} from '../ProductCard/ProductCard';
import { getUserData } from '../../../Redux/Register/action';
import styles from './HomePage.module.css'

const Homepage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
        dispatch(getUserData())
    }, []);

    const product = useSelector(state => state.product.product)
    return (
        <>
        <Navbar/>
        <div className={styles.top_margin}>
            <div className={styles.header}>
                <img src="https://rukminim1.flixcart.com/www/816/816/promos/23/03/2021/284eae1b-53c0-4648-8e75-3fc127e3a9cc.png?q=90" alt="sale" />
                
                <Link to="/mobile/mobile-phones-store" > <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQI6skkfpOIiqHBhZwE5hRM0jm5LYqnqJZ4Q&usqp=CAU" alt="mobile" />
                <div>Mobiles</div>
                </Link>

                <Link to="/headphones/headphones-store" > <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBESEhIVEhMWERgVFhcTFhAVEBIRFhYXFhgTFRUYHSggGRomIBYTITEhJSkrLi4uGB8zODMsNygtLisBCgoKDQ0ODg0NDi0dFR0tKysrKysrKys3Ky0rKysrKysrKysrKysrKy0tKystKysrKysrKysrKysrKy03KysrK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADkQAAIBAgMFBAgGAQUBAAAAAAABAgMRBCExBRJBUWFxgZGhBhMiMrHB4fAUQlJy0fGCI2JzotJD/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD4cAAAAAAAAAAAAAAAAAAACRvhhJPp2gaATY4DnLwRn+Bj+p+QFeCe8BHhJ+TNU8DJaNPyfmBFBlODjk012mIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9SvkgPCVQwbecsl/wBn2Im0cCqSTnnPVR4R6vmzHEV1HN5t8Of0A9jGMFwS8/Ej1cb+lESrVcnn9EYAbpYiT1MPWGAA2qp2okQqy4O/mQj2LtoBZRrp5SWXijXWwSecPB6dzNVKunlLLrwJUU46eHACslFp2aszwtqtJVI9fNdCrqU3F2eoGIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdBsjAerh66a9pr2FyXPtZC9H9n+vrJNexH2pdnBd/8nSbXdrLr8P7QFBiKuspf2+SKmpNyd2SdpVt6dlosu/iyIAAAAAAAAAJWExO7lLT4fQigC7nSeq1+KI+KSnHr95M2bIr73sPVK67ORJxOEvmtfj9QKBqx4S8RSvFyWq17OD7tPAiAAAAAAAAAAAAAAAAAAAAAAAAAADbhqLqThBayko+LsB2/othFSw2/wDmn7Xd+Xyz7yr23if9R8oQz7Xn/wCTppU/VxUOF9OSSsl8DhNqVt5Sf65vwWdvOPgBWNgAAAAAAAAAAAANuErbk4y5PPs4nVxV7M486TYWI3qdm84u3dw++gGGJpbs3dezNf2vmUNam4ycXwdvqdVj6e9B2WmaeiyKHalL3Z81Z9q08mvACAAAAAAAAAAAAAAAAAAAAAAAAAXXofQ38XTvpFOXgnbzaKU6L0FpuWKdpbv+lK7sm7XirK+j0zA7/FyUKU5aWpyffZnyzaX5O9/D+D6LtrBQVCq927VN5u7l23eZ822irSX7fmwIoAAAAAAAAAAAAAWfo/UaquKteUXa+m8s/gmisN2Dnu1IPlNeFwOzrNNu/tWleO7+2zUnos29ehz20YP1clb3ZJ655ey/idUqG9T3ZWzjaVslmrO3I5zaskp1o9JeNr/ECgAAAAAAAAAAAAAAAAAAAAAAAAOk9Aqiji7P81KS77p/JnNkvZWL9TWp1OEZK/7Xk/JsD6ht6aWGq/t+aPl20ZXkv2/Nn0TalTfoVIrO8LrrbM+d413s+75/yBFB6kboQaeTu+gGlxfI8JcY8xVw3LXyYEQBoAAD2Ku7LUDwzdKXKxe7O2TurekrvyR7tOit0DnmCfKhdffT+SLOjZ2A7uhiL04vnFPxRyW0JtyqS5t+Ddi0jjlaFOL/ACpdNLFbttblocde7h99AKoAAAAAAAAAAAAAAAAAAAAAAAAAAdj6N411aW437UFbtjwfy7iBtTZLVXdXuzzXTmu75kX0Vr7uISbspRknyyW98juJRhUSWjveO9GUbvkt5K4HH1dhzhFN+1Fcst3tXzJuC9GZ1qNSrScW6Vm1F2qKLXvShwXDeTa7DpHKyKadWeFqxr4eW5KLvlpbimuMXxiBRTldOM1uzWX7uj5Mibx1XpFRpYql+Nw8VGzUcRSX/wApvScecHwfDTouRrrda4p6PmUKtPfWXvLzXIhkqM7ZmWNoqyqR0evSX1IIZ0mwtmxhB162UV49ElxbK7YOA9dUz92OvK5L9INpbzUIZRjlG3g59r0XTtA24nbV6lllG9t1WyX+58X0RltKfsd5z+GV5x7b+BcYmd9xa/mt2cPkBtp4a8V1v5ez8mQ8dh92cFzXzL/CU7NR5JR71q/Fsr8WlUxe6tI2j3rN/EDZtLZ0aVHCVI3vNXld3V1PduuSaay6FNty/rc/0r5ndemWDVOOzqVrP8JRnP8A5Kkp1ZX/AMdw470kpWlB8014W/lgUwAAAAAAAAAAAAAAAAAAAAAAAAAAtvRempYqnfRXk+5P+UfSN6E4ta9HxPmWwK25Xh1vHxX9Hb0qwGGObpuzd4vJN6p/pk/g+7lepxGILnaFpwd88szk8TNptPVcea4Pt4MDOjjJ0ZS9XJxU4OElk04S1i08miHTgpew9JX3X+ma4fDxRhOdzOnHet106VF7r+K7+gEKzi3F5NOzJ2Cs705e7JeHXu18eZntKnvwhWWvuz6S5/FEWErWtqnddoFumsPh91P2pXTfFW9452pK7b++wtNpPehGS4qz6fdrdyKtK4G7CLO/cT8LU3qjk9I59LR0XfLd8CvU+RvU92O6tXm/kvvmBf7PxKipTeiTfgVey61pzqzvlGUnbW75dbswxVe1FQWsnd/tX1NVJ2io/qlvP9sdPP4AdhtXan43Fzr7u5H8kddyCiqcI9qjEoPSe27DnvfJ/QlYSpup37X4FRt6vvOC6Nvv/oCqAAAAAAAAAAAAAAAAAAAAAAAAAAGUJNNNap3XajssDi1OKkuK8HyOLLLY2L3Jbj0enbyA7FVDnds0rPszXYW1KtkQ9rRvG/ICgWZvptP2eFrdb63ND1MkwL6ts2pBRhVW6sTh44im8rO7cXJf5Rbtwujn6Kadms0/M7HamNVXZWAnvLfw2Kq4e2W86VWKrRfYmpI5TE++2rZ558+IGd7xnF2zzXb92K2/BEmrPqKVLdV3q/L6gYwglrw82Ia3ZlcWyvw+L+gGLd25Pu7Ddhdbv7S0RY4TZC/C1MVVbjC/q6CVt6tW7/yRzbfToVylYCx9fx/go8TV35OXXyN2JrZW5/AiAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAvdmY/eW6/e+PUm4ud4S7Dlk7En8fNqzd15geyeZlc0qsuQVfO+bA3Vp5RNdate3Q0zqNmAG2NboZOtc0ACTFrVuy832GzDVYSqQ9YperTW8oW3txPNRvld83zIR6mwL3b22pYmcW0qdOEdylSj7lKmuC5vS74lTKuuBHAHrZ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHqQA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9UWABnGLABFf//Z" alt="headphones" />
                <div>headphones</div>
                </Link>

                <Link to="/laptop/laptop-store" > <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qG6Jm3luGh7w_GfDmb8napnDqqptlPewhA&usqp=CAU" alt="Laptop" />
                <div>Laptop</div>
                </Link>

                <Link to="/TV screen/TV screen-store" > <img src="data:image/png;base64,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" alt="TV screen" />
                <div> TV screen</div>
                </Link>
            </div>
            <BootstrapCarousel></BootstrapCarousel>
            <Grid container style={{padding: "3%"}}>
                {
                    product.filter((items)=> items.category === "equipment").map((item) => <ProductCard {...item} key={item.id} />)
                }
            </Grid>
            
        </div>
        <Footer/>
        </>
    );
}

export default Homepage;
