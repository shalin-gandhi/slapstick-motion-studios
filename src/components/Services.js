import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100vw;
    background-color: #272727;
    overflow: hidden;
    position: relative;
    padding: 7.94em 6.94em 0 6.94em;
`;

const StyledSectionTitle = styled.div`
    font-size: 3.75em;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
`;

const StyledItemsSection = styled.div`
    padding-top: 7.25em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const StyledItem = styled.div`
    width: 28.125em;
    height: 34.3125em;
    background-color: #303030;
    border-radius: 1.25em;
    overflow: hidden;
    margin-bottom: 5.1875em;
`;

const StyledItemTitle = styled.div`
    font-size: 1.5em;
    height: 4.3em;
    background: #7A7979;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 800;
`;

const getItemList = () => {
    let items = [
        {
            "title": "Lorem Ipsum Dolor Amet",
            "img": "" 
        }, {
            "title": "Lorem Ipsum Dolor Amet",
            "img": "" 
        }, {
            "title": "Lorem Ipsum Dolor Amet",
            "img": "" 
        }, {
            "title": "Lorem Ipsum Dolor Amet",
            "img": "" 
        }, {
            "title": "Lorem Ipsum Dolor Amet",
            "img": "" 
        }, {
            "title": "Lorem Ipsum Dolor Amet",
            "img": "" 
        }
    ]
    let final = items.map((item, index) => {
        return (
            <StyledItem key={index}>
                <StyledItemTitle>{item.title}</StyledItemTitle>
            </StyledItem>
        )
    })
    return final;
}

function Services() {
    return (
        <StyledWrapper>
            <StyledSectionTitle>
                Services
            </StyledSectionTitle>
            <StyledItemsSection>
                {getItemList()}
            </StyledItemsSection>
        </StyledWrapper>
    );
}

export default Services;