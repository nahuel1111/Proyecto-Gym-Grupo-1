import axios from 'axios'

const token = JSON.parse(sessionStorage.getItem('token'))

const clienteAxios = axios.create({
  baseURL: `${import.meta.env.VITE_URL_BACK}/api`
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


