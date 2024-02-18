import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import Products from "./Products";

import {StyledLoading,StyledContentPrincipalOfProducts,StyledButtonSelect,StyledNav} from './styled';

const MainProduct = () => {
    const {response} = useAxios('https://fakestoreapi.com/products')
    const [categoryProduct, setCategoryProduct] = useState("men's clothing");



    return(
        <main>
            <article>
                <section>
                    <StyledNav>
                        <StyledButtonSelect onClick={() => setCategoryProduct("men's clothing")}>
                            Men's clothing
                        </StyledButtonSelect>

                        <StyledButtonSelect onClick={() => setCategoryProduct('jewelery')}>
                            Jewelery
                        </StyledButtonSelect>

                        <StyledButtonSelect onClick={() => setCategoryProduct('electronics')}>
                            Electronics
                        </StyledButtonSelect>

                        <StyledButtonSelect onClick={() => setCategoryProduct("women's clothing")}>
                            Women's clothing
                        </StyledButtonSelect>
                    </StyledNav>
                </section>
            </article>

            <article>
                <StyledContentPrincipalOfProducts>
                    {
                        response != null ?
                            response.map(e => {
                                const {image, title, rating, price, category} = e
                                
                                if(category === categoryProduct){
                                    return <Products imageProduct={image} titleProduct={title} rankProduct={rating.rate} priceProduct={price}/>
                                }
                            })
                        : <StyledLoading>Loading...</StyledLoading>
                    }
                </StyledContentPrincipalOfProducts>
            </article>
        </main>
    )
}

export default MainProduct;