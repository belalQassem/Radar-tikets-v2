import React from 'react'
import {StyledDiv} from './style'
import Header from '../../Sections/Header/Header'
import Navbar from '../../Sections/Navbar/Navbar'
import Sidbar from "../../Sections/Sidbar/Sidbar"
import LeftSide from '../../Sections/LeftSide/LeftSide'
import RightSide from '../../Sections/RightSide/RightSide'
import Content from '../../Sections/Content/Content'
import Footer from '../../Sections/Footer/Footer'

const RedLight = () => {
  return (
    <StyledDiv>
        <Header/>
        <Navbar/>
        <Sidbar/>
        <LeftSide/>
        <Content/>
        <RightSide/>
        <Footer/>
    </StyledDiv>
  )
}

export default RedLight;