import React from 'react'

export const ChatMessage = ({name,message}) => {
  return (

    <div className='flex shadow-sm'>
        <img
          className="h-6 m-2"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        ></img>
        <span className='font-bold my-2'>{name}</span>
        <span className='m-2'>{message}</span>
        </div>
       
  )
}
