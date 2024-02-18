import styled from "styled-components";

const StyledInput = styled.input`
    font-size: 2em;
    width: 75%;
    border: none;
    padding: 0.2em 0em 0.2em 1em;
    border-radius: 2em;
    font-family: 'Montserrat';
    &:focus{
        outline: none;
    }
`

const StyledImageIconWeb = styled.img`
    width: 3em;
`

const StyledImgAndInput = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2em;
`

const StyledContentOfForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;
`

const StyledFontError = styled.span`
    font-size: clamp(0.7em, 5vw, 1.5em);
    font-family: 'Montserrat';
    color: #ff0000;
    font-weight: 400;
    text-align: center;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #BEC9FF;
    padding: 2em;
    border-radius: 3em;
    gap: 3em;
`;

const StyledContentPrincipalOfServiceAndRegister = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2em;
`;

const StyledContentPrincipalOfButtonAndInformationPersonal = styled.section`
    display: flex;
    flex-direction: column-reverse;
    gap: 2em;
    justify-content: space-evenly;

`;

const StyledContentPrincipal = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 3em;
    justify-content: center;
`;


export {StyledContentPrincipal, StyledContentPrincipalOfButtonAndInformationPersonal, StyledContentPrincipalOfServiceAndRegister, StyledFontError, StyledContentOfForm, StyledImgAndInput, StyledImageIconWeb, StyledInput, StyledForm}