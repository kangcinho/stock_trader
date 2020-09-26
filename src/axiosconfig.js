import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://stock-trader-d0b36.firebaseio.com'
})

export default instance