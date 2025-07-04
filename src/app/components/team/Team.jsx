import React from 'react'
import Card from '../card/Card'

const Team = () => {
  return (
    <div className='flex flex-wrap gap-7 m-auto'>
        <div className='w-80'>
            <Card/>
        </div>
        <div className='w-80'>
            <Card/>
        </div>
    </div>
  )
}

export default Team