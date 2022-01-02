import React, { useState, useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web'
import { Publish } from './styled'
import { handleChange } from '../../utils/handleChange'
import axios from 'axios';

function PublishPost({ ong }) {
    const { keycloak, initialized } = useKeycloak();
    const [ text, setText ] = useState("");

    const post = async () => {
        try {
            const result = await axios.post(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/feed/ongs/${ong.id}/mensagens-feed`, 
            {
                texto: text
            }, 
            {
                headers: {
                    Authorization: "Bearer " + keycloak.token
                }
            });
            setText("");
            alert("Post publicado!");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Publish>
            { ong.gestor && (
                <>
                    <textarea placeholder="Informe algo para seus seguidores" onChange={handleChange(setText)} value={text}></textarea>
                    <button onClick={post}>Postar</button>
                </>
            ) }
        </Publish>
    );
}

export default PublishPost