import styled from "styled-components";

const StyledFooter = styled.footer`
    margin-top: 2em;
    padding: 4em 1em;
    background-color: #6E73FF;  
`;

const StyledArticle = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 2em;
`;


export {StyledFooter, StyledNav, StyledArticle}