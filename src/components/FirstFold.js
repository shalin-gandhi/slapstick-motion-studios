import React from 'react';
import styled from 'styled-components';
import ImgVideo from '../assets/img/video.png';
import ImgScrollDown from '../assets/img/ScrollDown.png';

const StyledWrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 6.25em);
    background-image: url(${ImgVideo});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
`;

const StyledMirror = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(39, 39, 39, 0.4);
    clip-path: polygon(100% 0,0 100%,0 0);
    position: absolute;
`;

const StyledContentWrapper = styled.div`
    position: absolute;
    top: 13em;
    left: 6.25em;
`;

const StyledHeader1 = styled.div`
    font-size: 3.75em;
    color: #fff;
    font-weight: 700;
    width: 14.53em;
`;

const StyledHeader2 = styled.div`
    font-size: 2.375em;
    color: #fff;
    font-weight: 400;
    width: 15.29em;
    margin-top: 0.60em;
`;

const StyledCTAWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15.625em;
`;

const StyledWatchNowButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  width: 100%;
  cursor: pointer;
  justify-content: space-evenly;
  height: 2.91em;
  font-weight: 600;
  color: #272727;
  background-color: #FFCB39;
  border-radius: 0.45em;
  padding: 0 0.9em 0 0.82em;
  transition: all 0.5s;
  margin-top: 1em;
  :hover {
    color: #fff;
    background: #555555;
  }
`;

const StyledImgScroll = styled.img`
    height: 5em;
    width: 5em;
    margin-top: 2.135em;
    cursor: pointer;
`;

function FirstFold() {
    return (
        <StyledWrapper>
            <StyledMirror />
            <StyledContentWrapper>
                <StyledHeader1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </StyledHeader1>
                <StyledHeader2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </StyledHeader2>
                <StyledCTAWrapper>
                    <StyledWatchNowButton>
                        Watch Now
                    </StyledWatchNowButton>
                    <StyledImgScroll src={ImgScrollDown} />
                </StyledCTAWrapper>
            </StyledContentWrapper>
        </StyledWrapper>
    );
}

export default FirstFold;