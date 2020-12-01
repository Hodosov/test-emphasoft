import axios from "axios"

const instance = axios.create({
  baseURL: 'https://emphasoft-test-assignment.herokuapp.com',
})

export const Api = {
  async auth(value) {
    return await instance.post('/api-token-auth/',value)
  },
  async getUsers() {
    return await instance.get("/api/v1/users/", {
        headers: {
          'content-type': "application/json",
          Authorization: `token ${localStorage.getItem('token')}`
        }
      })
  }
}