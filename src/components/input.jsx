import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { submit } from '../store'
export const Input = () => {
  const [newquery, setquery] = useState("")
  const dispatch = useDispatch()

  return (
    <>
    <div className='flex gap-3'>
    <input type="text" name="" id="" placeholder='eg. sales of 2025' value={newquery} onChange={(e)=>{setquery(e.target.value)}} className='border-2 border-gray-500 rounded-2xl pl-2 p-1'/>
      <button onClick={(e)=>{
        if (newquery !== ""){
            dispatch(submit({query: newquery}))
        }
        
        setquery("")
      }} className='bg-gray-200 px-3 rounded-2xl font-bold cursor-pointer text-center'  >submit</button>
    </div>
      
    </>
  )
}