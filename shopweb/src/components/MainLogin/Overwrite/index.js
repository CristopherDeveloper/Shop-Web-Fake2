import {StyledContentTheInformation,StyledInformationP,StyledTitle,StyledContentPrincipal} from './styled';

const Overwrite = ({user, email, password}) => {
    return(
        <StyledContentPrincipal>
            <div>
                <StyledTitle>
                    Your information personal
                </StyledTitle>
            </div>

            <StyledContentTheInformation>
                <StyledInformationP>User: <span>{user}</span></StyledInformationP>
                <StyledInformationP>Email: <span>{email}</span></StyledInformationP>
                <StyledInformationP>Password: <span type='password'>{password}</span></StyledInformationP>
            </StyledContentTheInformation>
        </StyledContentPrincipal>
    )
}

export default Overwrite;