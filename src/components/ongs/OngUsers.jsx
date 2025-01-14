import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../../assets/css/style.css'
import { Filter, CategoryFilter, CategoryFilterSpan, Input, NameFilter, SelectFilter } from './styled';
import { useKeycloak } from '@react-keycloak/web'
import axios from "axios"

function OngAssociatedUser() {    
    const [ ongsUser, setOngsUser ] = useState([]);
    const { keycloak, initialized } = useKeycloak();

    useEffect(() => {
        const getOngAssocietedWithTheUser = async () => {
            if(initialized) {
                const result = await axios.get("http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs/gerenciadas", {
                    headers: {
                        Authorization: "Bearer " + keycloak.token
                    },
                });
                setOngsUser(result.data.content)
            }
        }
        getOngAssocietedWithTheUser();
    }, [ initialized, keycloak.token ]);

    return (
       
        <ul className="app-submenu__list">
           {
                ongsUser.length > 0 && ongsUser.map(item => (              
                    <li className="app-submenu__item">
                        <Link className="app-submenu__link" to={`/ongs/${item.id}`}> 
                            {item.nome}
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
}

export default OngAssociatedUser;