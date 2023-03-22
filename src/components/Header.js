import React from 'react';
import styled from 'styled-components';
import LogoImg from '../assets/img/logo.png';
import IconMore from '../assets/img/icon_expand_more.png';

const StyledHeaderWrapper = styled.div`
  height: 6.25em;
  background-color: #272727;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5.56em 0 6.25em;
  z-index: 2;
`;

const StyledLogoWrapper = styled.a`
  height: 3.75em;
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

const StyledLogo = styled.img`
  height: 100%;
`;

const StyledMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

const StyledMenuItem = styled.div`
  color: #fff;
  font-size: 1.375em;
  padding: 0 0.86em;
  :hover {
    color: #FFCB39;
    cursor: pointer;
  }
`;

const StyledMoreIcon = styled.div`
  width: 0.5em;
  height: 0.5em;
  border-style: solid;
  border-color: #000;
  border-width: 0px 0.11em 0.11em 0px;
  transform: rotate(45deg);
  transition: all 0.5s;
  margin-bottom: 0.1em;
`;

const StyledContactButton = styled(StyledMenuItem)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 8.86em;
  height: 2.27em;
  color: #000;
  background-color: #FFCB39;
  border-radius: 0.45em;
  padding: 0 0.9em 0 0.82em;
  transition: all 0.5s;
  margin-left: 0.86em;
  :hover {
    color: #fff;
    background: #555555;
  }
  :hover ${StyledMoreIcon} {
    border-color: white;
  }
`;


function Header() {
  return (
    <StyledHeaderWrapper>
      <StyledLogoWrapper href='#'>
        <StyledLogo src={LogoImg} alt="Slapstick Motion Studios" />
      </StyledLogoWrapper>
      <StyledMenuWrapper>
        <StyledMenuItem>Home</StyledMenuItem>
        <StyledMenuItem>Services</StyledMenuItem>
        <StyledMenuItem>About Us</StyledMenuItem>
        <StyledMenuItem>Clients</StyledMenuItem>
        <StyledContactButton>
          <span>Contact Us</span>
          <StyledMoreIcon src={IconMore} alt="More" />
          </StyledContactButton>
      </StyledMenuWrapper>
    </StyledHeaderWrapper>
  );
}

export default Header;