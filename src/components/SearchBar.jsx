import React,{ useRef, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getKeyWordAction, getSearchAction } from '../redux/actions.js'
import { searchRecipes } from '../apis/request.js'
import { GiMagnifyingGlass } from "react-icons/gi";

const SearchBarStyle = styled.div`
  width: 40rem;
  display: flex;
  position: relative;
`
const Icon = styled.div`
  position: absolute;
  width: 2.875rem;
  height: 2.875rem;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
`
const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding-left: 2.875rem;
  background: #444444;
  color: white;
  font-size: 1.125rem;
  outline: none;
  border: 2px solid #444444;
  border-radius: 6px;
`

export default connect(
  state => ({
    keyWord: state.keyWord
  }),{
    getKeyWordAction,
    getSearchAction
  }
)(
  function SearchBar(props) {
    const inputEl = useRef(null)
  
    useEffect(()=>{
      getSearchRecipes()
    })

    const handleClick = () => {
      props.getKeyWordAction(inputEl.current.value)
    }

    // get search list
    const getSearchRecipes = async () => {
      const {data:{results}}  = await searchRecipes(props.keyWord, 32)
      props.getSearchAction(results)
    }
  
    return (
      <SearchBarStyle>
        <Icon>
          <GiMagnifyingGlass fontSize={20} onClick={()=>{handleClick()}}/>
        </Icon>
        <Input type="text" placeholder='ingredients, nutrients, keyword...' ref={inputEl}/>
      </SearchBarStyle>
    )
  }
)

