import styled from "styled-components"

export const ToDoContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: ". list .";
`

export const TodoListCardContainer = styled.div`
  grid-area: list;
  padding-top: 50px;
  padding-bottom: 50px;
`

export const Card = styled.div`
  display: grid;
  grid-template-rows: 50px auto;
  grid-template-areas: 
    "card-head"
    "card-body";
  width: 100%;
  min-height: 550px;
  max-height: 650px;
  background-color: #fff;
  border-radius: 5px;
  padding: 15px
`

export const CardHeader = styled.div`
  grid-area: card-head;
  align-self: center;
  justify-self: center;
  font-size: 30px;
`

export const CardBody = styled.div`
  grid-area: card-body;
  display: grid;
  grid-template-rows: 70px auto;
  grid-template-areas: 
    "action-section"
    "list-section";
`
export const ActionSection = styled.div`
  grid-area: action-section;
  display: grid;
  grid-template-columns: 1fr auto;
`

export const ActionTextfieldContainer = styled.div`
  align-self: center;
`

export const ListSection = styled.div`
  grid-area: list-section;
  padding-left: 10px;
  padding-right: 10px;
  display: grid;
  grid-auto-rows: minmax(auto, 50px);
  grid-row-gap: 5px;
  max-height: 500px;
  overflow-y: auto;
`

export const ListRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
`

export const ListRowDescriptionContainer = styled.div`
  cursor: pointer;
  height: 100%;
  line-height: 3;
`