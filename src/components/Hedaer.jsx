import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { GiKnifeFork } from "react-icons/gi";

const HeaderStyle = styled.div`
  width: 70%;
  text-align: center;
`
const Title = styled.span`
  margin-left: 0.3125rem;
  font-family: 'Ms Madi', cursive;
  font-size: 1.6875rem;
`
const Tips = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 40px;
  line-height: 40px;
  font-family: 'Ms Madi',cursive;
  font-size: 1.5rem;
  width: 100%;
  color: white;
  background:linear-gradient(to right,#02b35a,#00843c);
  z-index:999;
`
export default function Header(props) {
  return (
    <HeaderStyle>
      <Tips>delicious</Tips>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={props.variants}
      >
      <GiKnifeFork fontSize={18}/> 
      <Title>Food Recipes</Title>
      </motion.div>
    </HeaderStyle>
   
  )
}
