import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    background: #1B1819;
    height: 12.93em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #fff;
`;

function Footer() {
    return (
        <StyledWrapper>
            <div>Contacts</div>
            <div>+91 1234567890 <br/> Admin@Mail.com</div>
            <div>Address of the Admin</div>
        </StyledWrapper>
    );
}

export default Footer;
