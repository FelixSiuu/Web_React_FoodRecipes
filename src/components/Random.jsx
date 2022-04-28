import React from 'react'
import { motion } from "framer-motion"
import ResultItem from './ResultItem.jsx'

export default function Random(props) {

  return (
    <div>
      <props.Title>Today's special</props.Title>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
            variants={props.variants}
          >
            <props.ResultContainer wrap={'wrap'}>
              {
                props.randomList.map((item,index) => {
                  return (
                    <ResultItem flexSize={'33%'} argus={item} key={index} />
                  )
                })
              }
            </props.ResultContainer>
          </motion.div>

          <props.Title>Popular</props.Title>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 2.5 }}
            variants={props.variants}
          >
            <props.ResultContainer wrap={'wrap'}>
              {
                props.popularList.map((item,index) => {
                  return (
                    <ResultItem flexSize={'25%'} argus={item} key={index}/>
                  )
                })
              }
            </props.ResultContainer>
          </motion.div>
    </div>
  )
}
