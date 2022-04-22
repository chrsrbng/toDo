import { TODO_URL } from "../enums/AppConstants"
import { IToDosCreateParams, IToDosParams } from "../interface/ToDos"

import axios from "axios"

class ToDos {
    private todoUrl: string
  
    constructor() {
      this.todoUrl = TODO_URL as string
    }

    public addToDo = (data: IToDosCreateParams) => axios({
        method: 'POST',
        url: `${this.todoUrl}/api/v1/todos`,
        data
      }).catch((err) => err?.message || err)
    
    public getAllToDo = (userId: number) => axios({
      method: 'GET',
      url: `${this.todoUrl}/api/v1/todos`,
      params: {
        userId
      }
    })

    public deleteToDo = (id: number) => axios({
      method: 'POST',
      url: `${this.todoUrl}/api/v1/todos/deleteById`,
      params: {
        id
      }
    })

    public updateById = (data: IToDosParams) => axios({
      method: 'POST',
      url: `${this.todoUrl}/api/v1/todos/updateById`,
      data
    })
}

export default ToDos