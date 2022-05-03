import React,{ useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { connect } from 'react-redux'
import { getKeyWordAction, getSearchAction } from '../redux/actions.js'
import NavBarData from '../data/NavBarData'
import { searchRecipes } from '../apis/request.js'

const NavBarStyle = styled.div`
  margin-top: 78vh;
  display: flex;
  justify-content: center;
  gap: 0 2rem;
`
const NavBarItem = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.activeColor || `#444444`};
  color: white;
  border-radius: 50%;
  cursor: pointer;
  &:hover{
    background: #4aa45b;
  }
`
const Title = styled.div`
  font-size: 0.6875rem;
`
export default connect(
  state => ({
    keyWord: state.keyWord,
  }),{
    getKeyWordAction,
    getSearchAction
  }
)(
  function NavBar(props) {
    const [activeNum, setActiveNum] = useState('')

    useEffect(()=>{
      const getSearchRecipes = async () => {
        const {data:{results}}  = await searchRecipes(props.keyWord, 32)
        props.getSearchAction(results)
      }
      getSearchRecipes()
    })
  
    const handleClick = (title,index) => {
      setActiveNum(index)
      props.getKeyWordAction(title)
    }
  
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={props.variants}
      >
        <NavBarStyle> 
        {
          NavBarData.map((item, index) => {
            return (
              <NavBarItem 
                key={index} 
                onClick={ ()=>{handleClick(item.title, index)} }
                activeColor={ activeNum === index? '#4aa45b' : '' }
              >
                <div>{item.icon}</div>
                <Title>{item.title}</Title>
              </NavBarItem>
            )
          })
        }
        </NavBarStyle>
      </motion.div>
    )
  }
)

