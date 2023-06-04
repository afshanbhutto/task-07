import React from 'react'

import {BsChevronLeft} from 'react-icons/bs';
const PrevArrow = ({onClick}) => {
  return (
    <div className='absolute right-[80px] lg:-top-[80px] -top-[60px]' onClick={onClick}>
        <div className="grid w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] rounded-full place-items-center cursor-pointer">
            <BsChevronLeft className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]'/>
        </div>
    </div>
  )
}

export default PrevArrow