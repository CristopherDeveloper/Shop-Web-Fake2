import { Font } from './styled';

const HeaderLinks = ({name, link}) => {
    return(
        <Font href={link}>
            {name}
        </Font>
    )
}

export default HeaderLinks;