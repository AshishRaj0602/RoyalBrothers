import React, { useEffect, useState } from 'react';
import { Menu, Close } from '@mui/icons-material';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/userSlice';

const Navbar = () => {
  const [isDropdown1Open, setDropdown1Open] = useState(false);
  const [isDropdown2Open, setDropdown2Open] = useState(false);
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(state=>state?.user?.user)
  useEffect(()=>{
    user?setUserLoggedIn(true):setSelectedLocation(false);
  },[user]);
  const handleDropdown1Toggle = () => {
    setDropdown1Open(!isDropdown1Open);
    setDropdown2Open(false);
  };

  const handleDropdown2Toggle = () => {
    setDropdown2Open(!isDropdown2Open);
    setDropdown1Open(false);
  };

  const handleLogin = () => {
    navigate('/login')
    setUserLoggedIn(true);
  };
const handleSignin=()=>{
  navigate('/signup')
}
  const handleLogout = () => {
    localStorage.removeItem('User');
    dispatch(register(null));
    setUserLoggedIn(false);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__sidebarButton" onClick={handleSidebarToggle}>
          {isSidebarOpen ? <Close /> : <Menu />}
        </div>
        <div className="navbar__logo_laptop"><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/royal_brothers_logo-229959d7727f356b2e4fc3bd9c0c527c60127d009c93989a93e2daa0b1c2d556.svg" alt="logo" /></div>
        <div className="navbar__logo_mobile"><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/rb_logo_icon-e5352df69056d5b39e69a0dd288cb816077351ab5a415dcf10af07eb29cea3f3.svg" alt="logo" /></div>
      </div>
      <div className={`navbar__middle ${isSidebarOpen ? 'hideOnMobile' : ''}`}>
        <ul className="navbar__menu">
            <div className='subscription_logo'>
                <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/RBX_logo-1b800838228373b51de1f1937bfd16588b29da9e8931b472dc8f7f1592e1f43c.svg" alt="logo" />
            </div>
            <div className="nav_trafic_wrapper">
                <div className="nav_trafic" >Traffic</div>
            </div>
          <li
            className={`navbar__menuItem ${isDropdown1Open ? 'active' : ''}`}
            onMouseEnter={handleDropdown1Toggle}
            onMouseLeave={handleDropdown1Toggle}
          >
            What's new
            {isDropdown1Open && (
              <div className="navbar__dropdown">
                <ul className="navbar__dropdownMenu">
                  <li className="navbar__dropdownItem">Store</li>
                  <li className="navbar__dropdownItem">Inter-city travel</li>
                </ul>
              </div>
            )}
          </li>
          <div className="nav_offer_wrapper" style={{display:'flex',alignItems:'center'}}>
                <div className="nav_offer" >Offers</div>
            </div>
          <li
            className={`navbar__menuItem ${isDropdown2Open ? 'active' : ''}`}
            onMouseEnter={handleDropdown2Toggle}
            onMouseLeave={handleDropdown2Toggle}
          >
            Partner with us
            {isDropdown2Open && (
              <div className="navbar__dropdown">
                <ul className="navbar__dropdownMenu">
                  <li className="navbar__dropdownItem">Earn with us</li>
                  <li className="navbar__dropdownItem">Own a franchise</li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className={`navbar__right ${isSidebarOpen ? 'hideOnMobile' : ''}`}>
      <div className="navbar__locationDropdown">
          <select value={selectedLocation} onChange={handleLocationChange}>
            {/* <option value="">Select Location</option> */}
            <option value="Location A">Bangalore</option>
            <option value="Location B">Location B</option>
            <option value="Location C">Location C</option>
          </select>
        </div>
        <div className="navbar__loginLogoutButtons">
          {isUserLoggedIn ? (
            <button className="navbar__logoutButton" onClick={handleLogout} >
              Logout
            </button>
          ) : (
            <>
              <button className="navbar__loginButton" onClick={handleLogin}>
                Login
              </button>
              <button className="navbar__signupButton" onClick={handleSignin}>Signup</button>
            </>
          )}
        </div>
      </div>
      {isSidebarOpen && (
        <div className="navbar__sidebar">
          <div className="navbar__sidebarHeader">
            <div className="navbar__closeSidebarIcon" onClick={handleCloseSidebar}>
              <Close />
            </div>
          </div>
          <ul className="navbar__sidebarMenu">
            <li className='navbar__sidebarMenu_sign'>
              <div className="sidebar_login">LOG IN</div>
              <div className="sidebar_signup">SIGN UP</div>
            </li>
            <li className="navbar__sidebarMenuItem">Tariff</li>
            <hr />
            <li className="navbar__sidebarMenuItem">Store</li>
            <hr />
            <li className="navbar__sidebarMenuItem">Offers</li>
            <hr />
            <li className="navbar__sidebarMenuItem">RoyalBrothersX</li>
            <hr />
            <li className="navbar__sidebarMenuItem">Blog</li>
            <hr />
            <li className="navbar__sidebarMenuItem">Indian Bike Routes</li>
            <hr />
            <li className="navbar__sidebarMenuItem">Inter-City Travel</li>
            <hr />
            <li className="navbar__sidebarMenuItem">Rent From Banglore Airport</li>
            <hr />
            <li className="navbar__sidebarMenuItem">About Us</li>
            <hr />
            <li className="navbar__sidebarMenuItem">Bike Tour</li>
            <hr />
            <li className="navbar__sidebarMenuItem">Menu</li>
            <hr />
            <li className="navbar__sidebarMenuItem">PArtner With US</li>
            <hr />
            <li className="navbar__sidebarMenuItem">Reach Us</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
