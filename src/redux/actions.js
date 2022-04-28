import { GETRANDOMLIST, GETPOPULARLIST, GETKEYWORD, GETSEARCHLIST } from './constant.js'



// random list
export const getRandomAction = list => ({type: GETRANDOMLIST, data: list})
// popular list
export const getPopularAction = list => ({type: GETPOPULARLIST, data: list})
// search list
export const getSearchAction = list => ({type: GETSEARCHLIST, data: list})

// get keyword
export const getKeyWordAction = value => ({type: GETKEYWORD, data: value})