import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
    const history = useNavigate();
    
    const handleLogout =()=>{
        localStorage.clear();
        history('/register')
    }
    
    return (
        <div className='dashboard'>
            <div className='btnlogout'><button className='btn btn-secondary mb-3' onClick={handleLogout}>Log Out</button></div>
            <div className='main-title'>Hello Welcome To Paint App</div>
        </div>
    )
}

export default Dashboard