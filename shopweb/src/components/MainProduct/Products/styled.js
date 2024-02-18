import styled from "styled-components";

const StyledContentPrinciapl = styled.article`
    display: flex;
    align-items: center;
    gap: 2em;
    padding: 1.5em;
    background-color: #BEC9FF;
    border-radius: 2em;
    width: 75vw;
    cursor: pointer;
    transition: scale 0.5s;

    &:hover{
        background-color: #d3daff;
        scale: 1.05;
    }
`;

const StyledImageProduct = styled.img`
    width: 9em;
    border-radius: 2em;
    padding: 1em;
    background-color: #fff;
`;

const StyledInformationOfTheProduct = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2em;
`;

const StyledTitleProduct = styled.p`
    font-size: 2em;
    width: 50%;
    font-family: 'Glory';
    font-weight: bold;
    color: #6E73FF;
`;

const StyledPriceAndRank = styled.p`
    font-size: 1.5em;
    font-family: 'Montserrat';
    color: #3A20E2;
`;

export { StyledPriceAndRank,StyledTitleProduct,StyledInformationOfTheProduct,StyledImageProduct,StyledContentPrinciapl }