import axios from 'axios'

const getAllItems = function () {
  const url = 'https://jsonplaceholder.typicode.com/photos?_start=10&_limit=9'
  return axios.get(url)
}

export const itemsService = {
    getAllItems,
}