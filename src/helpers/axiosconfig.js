import axios from 'axios'

const token = JSON.parse(sessionStorage.getItem('token'))

const clienteAxios = axios.create({
  baseURL: 'http://localhost:3001/api'
})

export const config = {
  headers:{
    'content-type': 'multipart/form-data',
    'auth':`Bearer ${token}`
  }
}
export const jsonConfig = {
  headers: {
    'content-type':'application/json',
    'auth': `Bearer ${token}`
  }
};


export default clienteAxios 


