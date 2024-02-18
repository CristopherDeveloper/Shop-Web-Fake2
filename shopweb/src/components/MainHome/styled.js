import styled from "styled-components";

const StyledContentPrincipal = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    width: 50%;
    margin: 0 auto;
    margin-top: 5em;
    margin-bottom: 5em;
`;

const StyledTitlePrincipal = styled.h1`
    font-size: 4em;
    font-family: 'Glory';
    color: #3A20E2;
    font-weight: bold;
    text-shadow: 0px 0px 20px #3A20E2;
`;

const StyledContentInformationAndButton = styled.section`
display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;
    text-align: center;
`;

const StyledTheInformation = styled.p`
    font-size: 1.5em;
    color: #3a20e2;
    font-family: 'Montserrat';
`;

const StyledButton = styled.button`
    font-size: 1.5em;
    padding: 0.5em 2em;
    border-style: none;
    border-radius: 0.5em;
    font-weight: bold;
    font-family: 'Glory';
    color: #ffff;
    background-color: #3a20e2;
    transition: background-color, 0.5s;

    &:hover{
        cursor: pointer;
        background-color: #3e26dabf;
    }
`;

export {StyledButton,StyledTheInformation,StyledContentInformationAndButton,StyledTitlePrincipal,StyledContentPrincipal}