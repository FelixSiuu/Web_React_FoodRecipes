import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { GiKnifeFork } from "react-icons/gi";
import banner from '../assets/banner.webp'

const HeaderStyle = styled.div`
  width: 70%;
  text-align: center;
`
const Title = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
  height: 40px;
  text-align: center;
  font-family: 'Ms Madi', cursive;
  font-size: 1.6875rem;
  color: white;
  background:linear-gradient(to right,#02b35a,#00843c);
`
const Banner = styled.div`
  position: absolute;
  width: 100%;
  height: 85vh;
  top: 40px;
  left: 0;
  z-index: 0;
  box-shadow: inset 0 -70px 30px white;
  vertical-align: baseline;

`
export default function Header(props) {
  return (
    <HeaderStyle>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={props.variants}
      >
      <Title>
        <GiKnifeFork fontSize={18} /> 
        Food Recipes
      </Title>
      </motion.div>
      <Banner>
        <img src={banner} alt="" style={{width: '100%', height: '100%'}}/>
      </Banner>
    </HeaderStyle>
   
  )
}
