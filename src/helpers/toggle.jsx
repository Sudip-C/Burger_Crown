import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ChangeDineType } from '../redux/actions/dine-type'
const Changer = () => {
  const [isChecked, setIsChecked] = useState(false)
const dispatch = useDispatch()
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    handleType()
  },[isChecked])
  function handleType(){
    if(isChecked){
      dispatch(ChangeDineType('delivery'))
    }else{
       dispatch(ChangeDineType('dine-in'))
    }
  }
  return (
    <>
      <label className='flex cursor-pointer select-none items-center rounded-full '>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-8 w-14 rounded-full ${
              !isChecked ? 'bg-red-900' : 'bg-orange-500'
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
              !isChecked ? 'translate-x-full' : ''
            }`}
          ></div>
        </div>
      </label>
    </>
  )
}

export default Changer;