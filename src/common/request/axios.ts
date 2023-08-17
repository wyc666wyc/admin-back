import Axios from 'axios'

const axios = Axios.create()
axios.interceptors.response.use(
  config => {
    const { status, data } = config
    console.log('axios-response', status, data)
    return data
  },
  err => {
    console.log('axios-err', err)
    return Promise.reject(err)
  }
)
export {
  axios
}