import HeaderLinks from "./HeaderLinks";
import { HeaderNav } from './styled';


const Header = () => {
    return(
        <header>
            <article>
                <section>
                    <HeaderNav>
                        <img/>
                        <HeaderLinks name="Home" link="/home"/>
                        <HeaderLinks name="Product" link="/products"/>
                    </HeaderNav>
                </section>
            </article>
        </header>
    )
}

export default Header;