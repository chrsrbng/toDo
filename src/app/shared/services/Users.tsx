import {TODO_URL} from '../enums/AppConstants'

import axios from "axios"

class Users {
  private todoUrl: string
  
  constructor() {
    this.todoUrl = TODO_URL as string
  }

  getIp = () => axios({
      method: 'GET',
      url: `${this.todoUrl}/api/v1/users/getIp`
    }).catch((err) => err?.message || err)

  addUserIp = (ipAddress: string) => axios({
      method: 'POST',
      url: `${this.todoUrl}/api/v1/users`,
      data: {
        ipAddress
      }
    }).catch((err) => err?.message || err)

  getUserId = (ipAddress: string) => axios({
      method: 'GET',
      url: `${this.todoUrl}/api/v1/users`,
      params: {
        ipAddress
      }
    }).catch((err) => err?.message || err)
}

const users = new Users()

export default users