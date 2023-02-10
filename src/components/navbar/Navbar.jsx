import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/images/Logo.png'
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="left">
                <NavLink to='/' className='logo'><img src={logo} alt="logo" width={120} height={36} /></NavLink>
            </div>
            <div className="right">
                <ul>
                    <li>
                        <NavLink to='/flights' className='list-item'>Flights</NavLink>
                    </li>
                    <li>
                        <NavLink to='/hotels' className='list-item'>Hotels</NavLink>
                    </li>
                    <li>
                        <NavLink to='/trains' className='list-item'>Trains</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login' className='list-item' ><button className='btn-login'><PersonIcon />Login</button></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar