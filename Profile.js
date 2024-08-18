import React from 'react'

const Profile = ({id,name,age,job,updateVideo,dispatch}) => {
  return (
    <div>
    <h1>{id}{name}{age}{job}</h1>
    <button onClick={()=>dispatch({type:'DELETE',payload:id})}>Delete</button>
    <button onClick={()=>updateVideo(id)}>Update</button>
    </div>
  )
}

export default Profile
