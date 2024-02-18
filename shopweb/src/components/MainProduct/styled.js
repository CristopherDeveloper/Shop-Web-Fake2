import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1em;
    background-color: #6E73FF;
    margin-bottom: 3em;
    flex-wrap: wrap;
`;

const StyledButtonSelect = styled.button`
border-style: none;
    background-color: #fff0;
    font-size: 2em;
    color: #fff;
    font-family: 'Glory';
    font-weight: 900;
    padding: 0.2em 0.5em;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover{
        background-color: #5a5fff;
    }
`;

const StyledContentPrincipalOfProducts = styled.section`
    display: flex;
    flex-direction: row;
    gap: 2em;
    align-content: center;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const StyledLoading = styled.span`
    font-size: 2em;
    font-family: 'Montserrat';
    font-weight: 900;
    color:#6E73FF;
    margin-bottom: 75vw;
`;

export {StyledLoading,StyledContentPrincipalOfProducts,StyledButtonSelect,StyledNav}