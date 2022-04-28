import React from 'react'
import styled, { keyframes } from 'styled-components'

const expand = keyframes`
from{
  transform: scale(1);
  box-shadow: none;
}
to{
  transform: scale(1.15);
  box-shadow: 0 15px 15px rgba(0,0,0,.5);
}
`
const Item = styled.div`
  flex: ${props => props.flexSize};
  position: relative;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #4aa45b;
  overflow: hidden;
  cursor: pointer;
  &:hover{
    animation: ${expand} 300ms ease;
    animation-fill-mode: forwards;
    z-index: 99;
  }
`
const Title = styled.div`
  width: 90%;
  height: 30%;
  position: absolute;
  bottom: 0;
  color: white;
  text-align: center;
  word-wrap: break-word;
`
export default function ResultItem(props) {
  
  const {title, image} = props.argus

  return (
    <a href={props.argus.spoonacularSourceUrl}>
      <Item flexSize={props.flexSize}>
        <img src={image} alt="" style={{width: '100%', height: '100%'}}/>
        <Title>{title}</Title>
      </Item>
    </a>
  )
}
