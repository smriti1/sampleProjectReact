import React from 'react'
import { Button } from './Button'

export const ButtonList = () => {
  const list = ["All", "Live", "News", "Games", "Cricket", "Music" ,"Movies", "Comedy"];
  return (
    <div className='flex'>
      {list.map((listname) => (
        <Button key={listname} name={listname} />
      ))}
      </div>
  )
}
