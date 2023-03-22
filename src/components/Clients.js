import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    padding: 0 6.25em;
    display: flex;
    justify-content: space-around;
    background-color: #272727;
    padding-top: 10em;
    height: 60em;
`;

const StyledTitle = styled.div`
    font-size: 3.75em;
    font-weight: 600;
    color: #fff;
`;

function Clients() {
    return (
        <StyledWrapper>
            <StyledTitle>Clients</StyledTitle>
        </StyledWrapper>
    );
}

export default Clients;
