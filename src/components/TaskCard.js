// We are deconstructing the props object directly in the parentheses of the function
import axios from 'axios'
import React, {useState} from 'react'

function TaskCard({ title, description, _id }) {

  const [inputTitle, setInputTitle] = useState(title)
  const [inputDescription, setInputDescription] = useState(description)
  const [isDeleted, setIsDeleted] = useState(false)
  const API_URL = process.env.REACT_APP_API_URL;
  const storedToken = localStorage.getItem('authToken');

  const handleSubmitTask =(e)=>{
    axios.put(`${API_URL}/tasks/${_id}`, 
      {
        title: inputTitle,
        description: inputDescription
      },
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
    .then((response)=>{console.log(response.data)})
    const handleDeleteTask = (e) =>{
      axios.delete(`${API_URL}/tasks/${_id}`, 
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response)=>{
        console.log(response.data)
        setIsDeleted(true)
      
      })

    }


  return (<>
    {!isDeleted &&
    <div className="TaskCard card">
      <input value ={inputTitle} onChange={(e)=>{setInputTitle(e.target.value)}}/>
      <input value ={inputDescription} onChange={(e)=>{setInputDescription(e.target.value)}}/>
      <button onClick={handleSubmitTask}>Modificar</button>
      <button onClick={handleDeleteTask}>Eliminar</button>
    </div>
  }
  </>
  );
}}

export default TaskCard;



