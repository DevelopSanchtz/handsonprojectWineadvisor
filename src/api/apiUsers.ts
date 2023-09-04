import axios from 'axios'

const apiUsers = axios.create({
    baseURL: 'https://reqres.in/api',
})

export default apiUsers