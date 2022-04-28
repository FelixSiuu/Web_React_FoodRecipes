import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { connect } from 'react-redux'
import { randomRecipes } from '../apis/request.js'
import { getRandomAction, getPopularAction, getSearchAction, getKeyWordAction } from '../redux/actions.js'
import ResultItem from './ResultItem.jsx'
import Random from './Random.jsx'

const ResultStyle = styled.div`
  width: 60rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  margin: 1rem 0;
  font-weight: bold;
  font-size: 1rem;
`
const ResultContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  flex-wrap: ${props => props.wrap || 'nowrap'};
`

export default connect(
  state => ({
    randomList: state.randomList,
    popularList: state.popularList,
    searchList: state.searchList
  }),{
    getRandomAction,
    getPopularAction,
    getSearchAction,
    getKeyWordAction
  }
)(
  function Result(props) {

    // when component did mount
    useEffect(()=>{
      // get random list
      if(props.randomList.length === 0){
        async function getRandomRecipes(){
          const {data:{recipes}} = await randomRecipes(6)
          props.getRandomAction(recipes)
        }
        getRandomRecipes()
      }
      // get popular list
      if(props.popularList.length === 0){
        async function getPopularRecipes(){
          const {data:{recipes}} = await randomRecipes(9)
          props.getPopularAction(recipes)    
        }
        getPopularRecipes()
      }
    },[])

    return (
      <ResultStyle>
        {
          props.searchList.length ===0 
          ? 
          <Random 
            variants={props.variants}
            Title={Title}
            ResultContainer={ResultContainer}
            randomList={props.randomList}
            popularList={props.popularList}
          />
          : 
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 2.5 }}
            variants={props.variants}
          >
            <ResultContainer wrap={'wrap'}>
              {
                props.searchList.map( item => {
                  return (
                    <ResultItem 
                      key={item.id}
                      argus={item}
                      flexSize={'20%'}
                    />      
                  )
                }) 
              }
            </ResultContainer>
          </motion.div>
        }
      </ResultStyle>
    )
  }
  
)
