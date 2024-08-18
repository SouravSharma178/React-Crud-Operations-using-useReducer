import "./App.css";
import mainObject from "./Components/data";
import { useReducer, useState } from "react";
import AddPerson from "./Components/AddPerson";
import PersonList from "./Components/PersonList"

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [persons,dispatch] = useReducer(personReducer,mainObject)

function personReducer(persons,action){
    switch(action.type){
      case 'ADD':
      return [...persons,{...action.payload,id:5,age:40}]
      case 'DELETE':
      return persons.filter(person=>person.id !== action.payload)
      case 'UPDATE':
      const index = persons.findIndex(person=>person.id===action.payload.id)
      const newPersons = [...persons];
      newPersons.splice(index,1,action.payload)
      setEditableVideo(null)
      return [...newPersons]
      default:
      return persons
    }
}

function updateVideo(id){
    const obj = persons.findIndex(person=>person.id===id)
    setEditableVideo(persons[obj])
}

return (
<div>
<AddPerson dispatch={dispatch} editableVideo={editableVideo}>Add</AddPerson>
<PersonList persons={persons} dispatch={dispatch} updateVideo={updateVideo}></PersonList>
</div>
);
}

export default App;
