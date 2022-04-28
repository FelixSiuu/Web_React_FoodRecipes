import { combineReducers } from 'redux'
import { GETRANDOMLIST, GETPOPULARLIST, GETKEYWORD, GETSEARCHLIST } from './constant.js'


const initValue = ''
const keyWord = (preState= initValue, action)=>{
  const {type, data} = action
  switch(type){
    case GETKEYWORD: return data
    default: return preState
  }
}

const initRandom = []
const randomList = (preState= initRandom ,action) => {
  const {type, data} = action
  switch(type){
    case GETRANDOMLIST: return data
    default: return preState
  }
}
const initPopular = []
const popularList = (preState= initPopular ,action) => {
  const {type, data} = action
  switch(type){
    case GETPOPULARLIST: return data
    default: return preState
  }
}
const initSearch = []
const searchList = (preState= initSearch ,action) => {
  const {type, data} = action
  switch(type){
    case GETSEARCHLIST: return data
    default: return preState
  }
}

// 合併reducer 裡面存著各狀態state
export default combineReducers({
  keyWord,
  randomList,
  popularList,
  searchList
})