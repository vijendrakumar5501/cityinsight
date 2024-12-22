import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Refresh({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsAuthenticated(true);
            if (location.pathname === '/' ||
                location.pathname === '/login' ||
                location.pathname === '/signup'||
                // location.pathname === '/add-city'||
                location.pathname === '/dashboard'
            ) {
                navigate('/home', { replace: false });
            }
        }
    }, [location, navigate, setIsAuthenticated])

    return (
        null
    )
}

export default Refresh