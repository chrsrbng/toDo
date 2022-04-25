import { TODO_URL } from "../enums/AppConstants"
import { IToDosCreateParams, IToDosParams } from "../interface/ToDos"

import axios from "axios"

class ToDos {
    private todoUrl: string
  
    constructor() {
      this.todoUrl = TODO_URL as string
    }

    addToDo = (data: IToDosCreateParams) => axios({
        method: 'POST',
        url: `${this.todoUrl}/api/v1/todos`,
        data
      }).catch((err) => err?.message || err)
    
    getAllToDo = (userId: number) => axios({
      method: 'GET',
      url: `${this.todoUrl}/api/v1/todos`,
      params: {
        userId
      }
    })

    deleteToDo = (id: number) => axios({
      method: 'POST',
      url: `${this.todoUrl}/api/v1/todos/deleteById`,
      params: {
        id
      }
    })

    updateById = (data: IToDosParams) => axios({
      method: 'POST',
      url: `${this.todoUrl}/api/v1/todos/updateById`,
      data
    })
}

const toDos = new ToDos()

export default toDos