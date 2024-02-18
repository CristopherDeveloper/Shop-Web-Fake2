import { useState } from "react";
import EmailIcon from '../../assets/image/icon/envelope-fill.svg';
import PasswordIcon from '../../assets/image/icon/key-fill.svg';
import UserIcon from '../../assets/image/icon/user-fill.svg';

import {StyledContentPrincipal, StyledContentPrincipalOfButtonAndInformationPersonal, StyledContentPrincipalOfServiceAndRegister, StyledForm, StyledContentOfForm, StyledImgAndInput, StyledImageIconWeb, StyledInput} from './styled';
import Overwrite from "./Overwrite";
import ButtonRegister from "./ButtonRegister";
import AdvantagesOfOuerServices from "./AdvantagesOfOuerServices";

const MainLogin = () => {
    const [informationUser, setInformationUser] = useState({
        user: '',
        email: '',
        password: ''
    })

    const handleUdapteInformation = (e) => {
        setInformationUser({
            ...informationUser,
            [e.target.name] : e.target.value
        })
    }

    return(
        <main>
            <article>
                <StyledContentPrincipal>
                    <StyledContentPrincipalOfServiceAndRegister>
                        <div>
                            <StyledForm>
                                <StyledContentOfForm>
                                    <StyledImgAndInput>
                                        <label>
                                            <StyledImageIconWeb src={UserIcon} />
                                        </label>

                                        <StyledInput value={informationUser.user} onChange={(e) => handleUdapteInformation(e)} name="user" type="text" placeholder="User" />
                                    </StyledImgAndInput>
                                </StyledContentOfForm>

                                <StyledContentOfForm>
                                    <StyledImgAndInput>
                                        <label>
                                            <StyledImageIconWeb src={EmailIcon} />
                                        </label>

                                        <StyledInput value={informationUser.email} onChange={(e) => handleUdapteInformation(e)} name="email" type="email" placeholder="Email" />
                                    </StyledImgAndInput>
                                </StyledContentOfForm>

                                <StyledContentOfForm>
                                   <StyledImgAndInput>
                                        <label>
                                            <StyledImageIconWeb src={PasswordIcon} />
                                        </label>

                                        <StyledInput value={informationUser.password} onChange={(e) => handleUdapteInformation(e)} name="password" type="password" placeholder="Password" />
                                   </StyledImgAndInput>
                                </StyledContentOfForm>
                            </StyledForm>
                        </div>

                        <AdvantagesOfOuerServices/>
                    </StyledContentPrincipalOfServiceAndRegister>

                    <StyledContentPrincipalOfButtonAndInformationPersonal>
                        <Overwrite user={informationUser.user} email={informationUser.email} password={informationUser.password}/>

                        <ButtonRegister user={informationUser.user} email={informationUser.email} password={informationUser.password} />
                    </StyledContentPrincipalOfButtonAndInformationPersonal>
                </StyledContentPrincipal>
            </article>
        </main>
    )
}
  
export default MainLogin;
