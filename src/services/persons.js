import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }

  const create = (newObject) => {
    return axios.post(baseUrl, newObject)
  }

  const del = (id) => {
    axios.delete(`${baseUrl}/${id}`)
    const request = axios.get(baseUrl)  
    return request.then(response => response.data)
  }

  const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
  }

  export default { getAll, create, del, update}