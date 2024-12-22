import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import citylogo from "../assets/citylogo.jpg"

import { ToastContainer ,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Dashboard from './Dashboard';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Loggedout');
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }
    const handleSuccess = (message) => {
        toast.success(message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      };
    
      const handleError = (message) => {
        toast.error(message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      };

    const fetchProducts = async () => {
        try {
            const url = "";
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }
            const response = await fetch(url, headers);
            const result = await response.json();
            console.log(result);
            setProducts(result);
        } catch (err) {
            handleError(err);
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <div 
            style={
                {
                    display:'flex',
                    justifyContent:'space-between',
                    
                    

                }
            }>

            <h1>Welcome <span style={{textTransform:'uppercase',color:'green',
                fontWeight:"bolder"
            }}>{loggedInUser}</span></h1>

            <div 
            style={{
                display:"flex",
                justifyContent:"center",
                alignItems:'center',
                marginTop:'20px'
                
            }}>
                <img  
                style={{
                        width:"17%",
                        height:"auto",
                        
                }}
                src={citylogo} alt='logo'/>
            </div>
            <button onClick={handleLogout} 
            style={
                {padding:"15px",
                height:"100%",
                backgroundColor:"lightblue",
                border:"none",
                marginRight:"40px",
                marginTop:'20px',
                
                }
            }>Logout</button>
            </div>
            <Dashboard/>
            <ToastContainer />
        </div>
    )
}

export default Home