import styled from "styled-components";

const StyledContentPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
`;

const StyledButtonRegister = styled.button`
    font-size: 1.5em;
    padding: 0.5em 1em;
    font-family: 'Glory';
    border-radius: 2em;
    border-style: none;
    color: #fff;
    background-color: #534CFF;
    font-weight: bold;

    &:hover{
        cursor: pointer;
    }
`;

const StyledPrincipalList = styled.ul`
    list-style-type: disclosure-closed;
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const StyledList = styled.li`
    font-family: 'Montserrat';
    font-size: 1.2em;
    font-weight: bold;
    color: ${prop => prop.type == 'correct' ? '#534cff' : '#ff4c4c'};
`;

export {StyledList,StyledPrincipalList,StyledButtonRegister, StyledContentPrincipal };