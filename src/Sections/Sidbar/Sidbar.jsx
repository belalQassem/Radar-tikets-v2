import React from 'react'
import {SidbarContent,StyledImage,SidbarContainer} from './style'
import Profile from  '../../assets/SidbarIcons/Profile.png'
import Speed from '../../assets/SidbarIcons/speed.png'
import Traffic  from '../../assets/SidbarIcons/game-icons_traffic-lights-red.png'
import Truck  from '../../assets/SidbarIcons/truck.png'
import Management  from '../../assets/SidbarIcons/icon-management.png'
import {StyledLogout} from './style'

import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext'




const Sidbar = () => {
  const {  setisAuthorized, } = useAuthContext();
  const handleLogin = () => {
    setisAuthorized(false);
    localStorage.removeItem("token");
  };
  return (
    <SidbarContainer>
        <SidbarContent>
        <NavLink to="/dashboard/user/1/profile">
        <StyledImage src={Profile} alt="Icon 1" />
        </NavLink>
      <NavLink to="/dashboard/speed/" >
        <StyledImage src={Speed} alt="Icon 2" />
      </NavLink>
      <NavLink to="/" >
        <StyledImage src={Traffic} alt="Icon 3" />
      </NavLink>
      <NavLink to="/dashboard/truck/" >
        <StyledImage src={Truck} alt="Icon 4" />
      </NavLink>
      <NavLink to="/dashboard/user/management" >
        <StyledImage src={Management} alt="Icon 5" />
      </NavLink>
      <StyledLogout onClick={handleLogin} alt="exit"/>
            
    
        </SidbarContent>
    </SidbarContainer>
  )
}

export default Sidbar;