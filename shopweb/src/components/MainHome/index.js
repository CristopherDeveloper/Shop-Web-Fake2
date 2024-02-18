import {StyledButton,StyledTheInformation,StyledContentInformationAndButton,StyledTitlePrincipal,StyledContentPrincipal} from './styled';

const MainHome = () => {
    
    return(
        <main>
            <StyledContentPrincipal>
                <section>
                    <StyledTitlePrincipal>
                        About us
                    </StyledTitlePrincipal>
                </section>

                <StyledContentInformationAndButton>
                    <StyledTheInformation>
                    We are a company that offers the best of our products and we 
                    thank you for visiting our online store, we have the best 
                    prices, products and quality.
                    </StyledTheInformation>

                    <a href="/products">
                        <StyledButton>
                            Products
                        </StyledButton>
                    </a>

                    <StyledTheInformation>
                        You can see the products we offer by clicking this button 
                        or the menu button called "Product".
                    </StyledTheInformation>
                </StyledContentInformationAndButton>
            </StyledContentPrincipal>
        </main>
    )
}

export default MainHome;