import React from "react";
import styled from "styled-components";
import VerticalLogo from '../assets/img/verticalLogo.png';

const StyledWrapper = styled.div`
    padding: 0 6.25em;
    display: flex;
    justify-content: space-around;
    background-color: #272727;
`;

const StyledLeftPanel = styled.div`
    width: 34.875em;
`;

const StyledRightPanel = styled.div`
    width: calc(100% - 34.875em);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledTitle = styled.div`
    font-size: 3.75em;
    font-weight: 600;
    color: #fff;
`;

const StyledSubTitle1 = styled.div`
    font-size: 2.375em;
    font-weight: 700;
    margin-top: 2.13em;
    color: #fff;
`;

const StyledSubTitle2 = styled(StyledSubTitle1)`
    font-weight: 100;
    margin: 0;
`;

const StyledLogo = styled.img`
    height: 22.25em;
`;

const StyledKnowMoreButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  width: 10.42em;
  cursor: pointer;
  justify-content: space-evenly;
  height: 2.91em;
  font-weight: 600;
  color: #272727;
  background-color: #FFCB39;
  border-radius: 0.45em;
  padding: 0 0.9em 0 0.82em;
  transition: all 0.5s;
  margin-top: 2.08em;
  :hover {
    color: #fff;
    background: #555555;
  }
`;

function AboutUs() {
    return (
        <StyledWrapper>
            <StyledLeftPanel>
                <StyledTitle>About Us</StyledTitle>
                <StyledSubTitle1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</StyledSubTitle1>
                <StyledSubTitle2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</StyledSubTitle2>
                <StyledKnowMoreButton>Know More</StyledKnowMoreButton>
            </StyledLeftPanel>
            <StyledRightPanel>
                <StyledLogo src={VerticalLogo} alt="Slaptstick Motion Studios." />
            </StyledRightPanel>
        </StyledWrapper>
    );
}

export default AboutUs;
