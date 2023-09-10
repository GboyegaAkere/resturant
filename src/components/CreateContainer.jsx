import React from 'react'

const CreateContainer = () => {
  return (
    <div>
        <div className='hidden md:flex'>
          <p>CreateContainer</p>
        </div>
   
       <div className='md:hidden  '>
          <div className='flex flex-row gap-6'>
            <div className='w-40 h-40 bg-cyan-300'>
              <p>hello, how are you doing</p>
            </div>
            <div  className='w-40 h-40 bg-stone-800'>
              <p>where are you from</p>
            </div>
            <div className='w-40 h-40 bg-orange-700'>
              <p>let's take a stoll</p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default CreateContainer