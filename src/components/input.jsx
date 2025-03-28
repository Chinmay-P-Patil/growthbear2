import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { submit } from '../store'
export const Input = () => {
  const [newquery, setquery] = useState("")
  const dispatch = useDispatch()

  return (
    <>
      <input type="text" name="" id="" placeholder='eg. sales of 2025' value={newquery} onChange={(e)=>{setquery(e.target.value)}}/>
      <button onClick={(e)=>{
        if (newquery !== ""){
            dispatch(submit({query: newquery}))
        }
        
        setquery("")
      }} >submit</button>
    </>
  )
}