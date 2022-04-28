import axios from 'axios'

// api key
const key = 'apiKey=07d6a95124da4cca84048e085c954a78'
// const key2 = 'apiKey=3a2cbe0150854725aa52ef78684549e7'

// get random recipes
export const randomRecipes = (number) => {
  return axios.get(`https://api.spoonacular.com/recipes/random?${key}&number=${number}`)
}

// get search recipes
export const searchRecipes = (keyWord,number) => {
  return axios.get(`https://api.spoonacular.com/recipes/complexSearch?${key}&query=${keyWord}&number=${number}`)
}