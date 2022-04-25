import {
  ActionSection,
  ActionTextfieldContainer,
  Card,
  CardBody,
  CardHeader,
  ListRow,
  ListRowDescriptionContainer,
  ListSection,
  ToDoContainer,
  TodoListCardContainer
} from "../../../shared/assets/styled/ToDo"
import ToDosDAO from '../../../shared/services/ToDos'
import UserDAO from '../../../shared/services/Users'

import { AddCircleRounded, ModeEditOutlineRounded, DeleteOutlineRounded, SaveRounded } from '@mui/icons-material'
import { TextField, IconButton } from '@mui/material'
import { IToDosParams } from "app/shared/interface/ToDos"
import { IUserInfoParams } from "app/shared/interface/Users"
import { AxiosResponse } from "axios"
import { useState, KeyboardEvent, useEffect, useCallback } from 'react'

const ToDo = () => {
  const [toDo, setToDo] = useState<Array<IToDosParams>>([])
  const [description, setDescription] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [idToEdit, setIdToEdit] = useState(0)
  const [userInfo, setUserInfo] = useState<IUserInfoParams>({
    id: 0,
    ipAddress: ''
  })

  const processUserId = async () => {
    const ipAddress = await UserDAO.getIp()
    const ip = ipAddress.data.result.ip.split(':')[3]
    let tempUserInfo: AxiosResponse = await UserDAO.getUserId(ip)

    if (!tempUserInfo.data.result) {
      tempUserInfo = await UserDAO.addUserIp(ip)
    }

    setUserInfo(tempUserInfo.data.result)
  }

  const getAllToDos = useCallback(async () => {
    const allTodos = await ToDosDAO.getAllToDo(userInfo.id)

    if (allTodos.data.result.length) {
      const tempToDo = allTodos.data.result.map((todo: IToDosParams) => (
        { id: todo.id, description: todo.description }
      ))

      setToDo(tempToDo)
    }
  }, [userInfo.id])

  useEffect(() => {
    processUserId()
    getAllToDos()
  }, [getAllToDos])

  const handleDeleteButton = async (id: number) => {
    const tempTodo = toDo.filter((list) => list.id !== id)
    await ToDosDAO.deleteToDo(id)

    setToDo(tempTodo)
  }

  const handleEditButton = (id: number) => {
    setIsEdit(true)
    setIdToEdit(id)
    const [tempTodo] = toDo.filter((list) => list.id === id)

    setDescription(tempTodo.description)
  }

  const getListRows = (list: Array<IToDosParams>) => (
    list.map((row) => (
      <ListRow key={row.id}>
        <ListRowDescriptionContainer>
          {row.description}
        </ListRowDescriptionContainer>
        <IconButton color="primary"
          onClick={() => handleEditButton(row.id)}>
          <ModeEditOutlineRounded color="warning"
            sx={{ fontSize: 20 }}
          />
        </IconButton>
        <IconButton color="primary"
          onClick={() => handleDeleteButton(row.id)}>
          <DeleteOutlineRounded color="error"
            sx={{ fontSize: 20 }}
          />
        </IconButton>
      </ListRow>
    ))
  )

  const handleAddButton = async () => {
    if (description) {
      const tempToDo = [...toDo]
      const toDoInfo = await ToDosDAO.addToDo({
        userId: userInfo.id,
        description
      })

      tempToDo.push({
        id: toDoInfo.data.result.id,
        description
      })

      setToDo(tempToDo)
      setDescription('')
      setIsEdit(false)
    }
  }

  const updateData = async (id: number) => {
    if (description) {
      let temp = [...toDo]
      await ToDosDAO.updateById({id, description})

      temp = temp.map((list) => (list.id === id) ? { ...list, description } : list)

      setToDo(temp)
      setDescription('')
      setIsEdit(false)
      setIdToEdit(0)
    }
  }

  const handleOnKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 13) {
      if (isEdit) updateData(idToEdit)
      else handleAddButton()
      setDescription('')
    }
  }

  return (
    <ToDoContainer>
      <TodoListCardContainer>
        <Card>
          <CardHeader>
            ToDo List
          </CardHeader>
          <CardBody>
            <ActionSection>
              <ActionTextfieldContainer>
                <TextField fullWidth variant="standard" size="medium" color="info"
                  sx={{ input: { color: "#5a5a5a" } }}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  onKeyDown={(e) => handleOnKeyDown(e)}
                />
              </ActionTextfieldContainer>
              <IconButton color="primary"
                onClick={() => isEdit ? updateData(idToEdit) : handleAddButton()}>
                {
                  isEdit ?
                    <SaveRounded color="primary"
                      sx={{ fontSize: 40 }}
                    /> :
                    <AddCircleRounded color="primary"
                      sx={{ fontSize: 40 }}
                    />
                }

              </IconButton>
            </ActionSection>
            <ListSection>
              {getListRows(toDo)}
            </ListSection>
          </CardBody>
        </Card>

      </TodoListCardContainer>
    </ToDoContainer >
  )
}

export default ToDo