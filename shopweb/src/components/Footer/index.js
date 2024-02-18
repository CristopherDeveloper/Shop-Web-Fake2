import FooterLinks from "./FooterLinks";
import {StyledFooter, StyledNav, StyledArticle} from './styled';

const Footer = () => {
    return(
        <StyledFooter>
            <StyledArticle>
                <section>
                    <StyledNav>
                        <FooterLinks name="Privacy"/>
                        <FooterLinks name="Terms"/>
                        <FooterLinks name="About us"/>
                        <FooterLinks name="Donation"/>
                    </StyledNav>
                </section>

                <section>
                    <img/>
                </section>
            </StyledArticle>
        </StyledFooter>
    )
}

export default Footer;