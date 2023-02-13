import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/images/Logo.png'
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { user } from '../../constants';

const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false)
    const handleUser = () => {
        setShowLogout(!showLogout)
    }
    const handleLogOut = () => {
        if (window.confirm('Are you sure to LogOut?')) {
            localStorage.setItem('user', JSON.stringify({ ...user, islogged: false }))
            window.location.reload()
        }
    }
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
                    {user?.islogged ?

                        <li>
                            <div className="user_info">
                                <button className='btn-user' onClick={handleUser}><PersonIcon />{user?.username.toUpperCase()}</button>
                                <button
                                    className={`btn-logout ${showLogout ? 'show_logout' : 'hide_logout'}`}
                                    type='button'
                                    onClick={handleLogOut}
                                >Logout</button>
                            </div>
                        </li>
                        :
                        <li>
                            <NavLink to='/login' className='list-item' >
                                <button className='btn-login' type='button'><PersonIcon />Login</button>
                            </NavLink>
                        </li>

                    }

                </ul>
            </div>
            <div className="right-menu">
                <MenuIcon/>
            </div>
        </nav>
    )
}

export default Navbar