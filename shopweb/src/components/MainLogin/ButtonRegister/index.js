import { useEffect, useState } from "react";
import {StyledList,StyledPrincipalList,StyledButtonRegister, StyledContentPrincipal } from './styled';

const ButtonRegister = ({user, email, password}) => {

   const [messageUser, setMessageUser] = useState('Waiting for the information')
   const [messageEmail, setMessageEmail] = useState('Waiting for the information')
   const [messagePassword, setMessagePassword] = useState('Waiting for the information')

   const [styledUser, setStyledUser] = useState('correct')
   const [styledEmail, setStyledEmail] = useState('correct')
   const [styledPassword, setStyledPassoword] = useState('correct')

   const [link, setLink] = useState('#')

    useEffect(() => {
        if(user != '' && user.length >= 3){
            setMessageUser('Correct')
            setStyledUser('correct')
        }else{
            setMessageUser('Must contain at least 3 characters')
            setStyledUser('notcorrect')
        }

        if(email != '' && email.search('@gmail.com') != -1 && email.length >= 5){
            setStyledEmail('correct')
            setMessageEmail('Correct')
        }else{
            setStyledEmail('notcorrect')
            setMessageEmail('It must contain more than 5 characters and the @gmail.com')
        }

        if(password.length >= 8){
            setStyledPassoword('correct')
            setMessagePassword('Correct')
        }else{
            setStyledPassoword('notcorrect')
            setMessagePassword('Must contain at least 8 characters')
        }

        if(messageUser == 'Correct'){
            if(messageEmail == 'Correct'){
                if(messagePassword == 'Correct'){
                    setLink('/home')
                }
            }
        }
    }, [user, email, password])


    return(
        <StyledContentPrincipal>
            <a href={link}>
                <StyledButtonRegister>
                    Register
                </StyledButtonRegister>
            </a>

            <StyledPrincipalList>
                <StyledList type={styledUser}>
                    User: {messageUser}
                </StyledList>
                <StyledList type={styledEmail}>
                    Email: {messageEmail}
                </StyledList>
                <StyledList type={styledPassword}>
                    Password: {messagePassword}
                </StyledList>
            </StyledPrincipalList>
        </StyledContentPrincipal>
    )
}

export default ButtonRegister;