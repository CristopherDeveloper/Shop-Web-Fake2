import styled from "styled-components";

const StyledContentPrincipal = styled.div`
    padding: 2em;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    background-color: #bec9ff;
    border-radius: 2em;
`;

const StyledTitle = styled.h3`
    text-align: center;
    font-size: 2em;
    font-family: 'Glory';
    font-weight: bold;
    color: #3A20E2;
`

const StyledInformationP = styled.p`
    font-size: clamp(0.7em, 5vw, 1.2em);
    font-family: 'Montserrat';
    color: #3A20E2;
`;

const StyledContentTheInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2em;
`;

export {StyledContentTheInformation,StyledInformationP,StyledTitle,StyledContentPrincipal};