import {StyledLinks} from './styled';

const FooterLinks = ({name}) => {
    return(
        <StyledLinks href="#">
            {name}
        </StyledLinks>
    )
}

export default FooterLinks;