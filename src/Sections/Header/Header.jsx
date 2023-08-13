import * as React from 'react';

import YasLogo from "../../assets/yas 1.png"
import { HeaderContainer, StyledImage,StyledDiv, StyledItemsDiv, FiSettingsIcon, MdNotificationsIcon, StyledSpan } from "./style"





function Header() {
    return (
        <HeaderContainer>
            <StyledDiv>
                <StyledSpan>SMART CITY CONTROL CENTER - TRAFF SENSE</StyledSpan>
                <StyledImage alt="Yas Electronic System" src={YasLogo} />
            </StyledDiv>
            <StyledItemsDiv>
                <FiSettingsIcon />
                <MdNotificationsIcon />
            </StyledItemsDiv>
        </HeaderContainer>


    );
}
export default Header;