import React from 'react';
import { Navebar, NavebarItem,StyledSpan, StyledSpan2 } from './style';
import mockData from '../../data/Mock/Mock'; 

const Navbar = () => {
  return (
    <Navebar>
      {mockData.data.map((item, index) => (
        <NavebarItem key={index}>
          <StyledSpan2>{item.value}</StyledSpan2>
          <StyledSpan>{item.category}</StyledSpan>
         {item.icon}
        </NavebarItem>
      ))}
    </Navebar>
  );
};

export default Navbar;
