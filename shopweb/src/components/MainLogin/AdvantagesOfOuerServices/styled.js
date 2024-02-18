import styled from "styled-components";

const StyledContentPrincipal = styled.div`
    padding: 2em;
    background-color: #bec9ff;
    border-radius: 2em;
    display: flex;
    flex-direction: column;
    gap: 2em;
`;

const StyledTitle = styled.h1`
    text-align: center;
    font-size: 2em;
    color: #3a20e2;
    font-weight: bold;
    font-family: 'Glory';
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const StyledList = styled.li`
    font-family: 'Montserrat';
    font-size: 1.2em;
    color: #fff;
    font-weight: bold;
`;


export {StyledContentPrincipal, StyledTitle, StyledUl, StyledList};