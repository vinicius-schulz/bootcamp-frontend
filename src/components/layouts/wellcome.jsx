import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { useKeycloak } from '@react-keycloak/web';
import ProfileImage from './profile-image'
import defaultProfileImage from "../../assets/img/default-profile.jpg"
import { get } from "../../utils/images"

const WellcomeDiv = styled.div`
    display: flex;
`

const Span = styled.span`
    color: white;
    line-height: 60px;
    display: block;
    padding: 0 20px;
`

const Wellcome = ( ) =>{
    const { keycloak, initialized } = useKeycloak()
    const [ name, setName ] = useState("");
    const [ img, setImg ] = useState(defaultProfileImage);
    const [ email, setEmail ] = useState("");

    useEffect(() => {
        const getProfilePicture = async () => {
            try {
                const imageFromApi = await get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/usuarios/download-imagem?id=${keycloak.tokenParsed.email}`, keycloak);
                if(imageFromApi) {
                    setImg(imageFromApi)
                }
            } catch (error) {
                console.error(error);
            }
        } 
        if(initialized) {
            setName(keycloak.tokenParsed.name)
            setEmail(keycloak.tokenParsed.email)
            getProfilePicture();  
        }
    }, [ initialized, keycloak, keycloak.token ]);

    return(
        <WellcomeDiv>
            <ProfileImage email={email} img={img} setImg={setImg} />
            <Span>Bem vindo, {name}.</Span>
        </WellcomeDiv>
    )
}

export default Wellcome