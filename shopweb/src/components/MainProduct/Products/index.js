import { StyledPriceAndRank,StyledTitleProduct,StyledInformationOfTheProduct,StyledImageProduct,StyledContentPrinciapl } from './styled';

const Products = ({imageProduct, titleProduct, priceProduct, rankProduct}) => {
    return(
        <StyledContentPrinciapl>
            <div>
                <StyledImageProduct src={imageProduct}/>
            </div>

            <StyledInformationOfTheProduct>
                <div>
                    <StyledTitleProduct>
                        <span>
                            {titleProduct}
                        </span>
                    </StyledTitleProduct>
                </div>

                <div>
                    <img/>
                    <StyledPriceAndRank>
                        <span>
                            {rankProduct}
                        </span>
                    </StyledPriceAndRank>
                </div>

                <div>
                    <StyledPriceAndRank>$ <span>{priceProduct}</span></StyledPriceAndRank>
                </div>
            </StyledInformationOfTheProduct>
        </StyledContentPrinciapl>
    )
}

export default Products;