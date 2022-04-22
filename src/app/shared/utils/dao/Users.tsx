/* eslint-disable no-console */
import {TODO_URL} from '../enums/AppConstants'

import axios from "axios"


class Users {
  private todoUrl: string
  
  constructor() {
    this.todoUrl = TODO_URL as string
  }

  public getIp = () => axios({
      method: 'GET',
      url: `${this.todoUrl}/api/v1/users/getIp`
    }).catch((err) => err?.message || err)

  public addUserIp = (ipAddress: string) => axios({
      method: 'POST',
      url: `${this.todoUrl}/api/v1/users`,
      data: {
        ipAddress
      }
    }).catch((err) => err?.message || err)

    public getUserId = (ipAddress: string) => axios({
      method: 'GET',
      url: `${this.todoUrl}/api/v1/users`,
      params: {
        ipAddress
      }
    }).catch((err) => err?.message || err)
}

export default Users