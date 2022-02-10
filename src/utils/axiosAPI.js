import axios from 'axios'

const API_URI = process.env.REACT_APP_API_URI
export const axiosAPI = axios.create({ baseURL: API_URI })
