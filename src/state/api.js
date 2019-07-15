import axios from 'axios'
import { API_URL } from '../constants/end-point'

class API {
  static async init() {
    const data = await axios.post(API_URL).then(result => result.data)
    if (data.error) {
      throw data.error
    }
    console.log('data.results', data.results)
    return data.results
  }
}

export default API
