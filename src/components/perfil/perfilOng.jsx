import React from 'react';
import { OngInfos, OngImgContainer, OngImg } from './styled';
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

function PerfilOng({ name, img, category, tel, email, address, gestor }) {
    return (
        <OngInfos>
            <OngImgContainer>
                <OngImg src={img} />
            </OngImgContainer>
            <h4>{name}</h4>
            <span>Categoria: {category}</span>
            <span><FiPhoneCall /> {tel}</span>
            <span><FiMail /> {email}</span>
            <span><FiMapPin /> {address}</span>
            <span>{gestor}</span>
        </OngInfos>
    )
}

export default PerfilOng;