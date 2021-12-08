import styled from 'styled-components'
import React from 'react'

const ButtonLayout = styled.button`
    width: ${props => props.width};
    background: ${props => props.color ? '#B4AEE8' : '#440A67'};
    color: #ffffff;
    border: none;
    border-radius: 20px;
    margin-top: 13px;
    text-align: center;
    cursor: pointer;
    padding: 10px 0px;
`

const Button = ({textButton, width, height}) =>  {
    return (
        <ButtonLayout width={width} height={height}>{textButton}</ButtonLayout>
    )
}

export default Button