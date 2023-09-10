import React from 'react'
import Delivery from "../assets/img/delivery.png"

const HomeScreen = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <div className='flex-1 py-2 flex flex-col items-start justify-center gap-6'>
                <div  className='bg-orange-100 flex flex-row items-center justify-center p-2 rounded-full gap-2 hover:shadow-lg tansition-all ease-in-out duration-100 md:w-auto'>
                  <div>
                    <p className='text-base font-semibold text-orange-500'>Bike Delivery</p>
                  </div>
                  <div className='w-10 h-10  overflow-hidden bg-white  rounded-full '>
                    <img src={Delivery} className='w-full h-full object-contain' alt='delivery'/>
                  </div>
                </div>


                <p className='text-[2.5rem] md:text-[4.25rem] font-bold tracking-wide' >The fastest delivery in <span className='text-orange-500'>
                the city</span>
                </p>
                <p className='text-base text-gray-500 text-center md:text-left'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Eius temporibus reiciendis et esse aliquid debitis officiis harum quisquam numquam repudiandae
                  voluptatem molestias veritatis officia illum, accusantium obcaecati quibusdam aut nam?
                </p>


                
               <button 
                  className='w-full p-4 bg-gradient-to-br from-orange-500 px-4 py-2 rounded-lg hover:shadow-lg tansition-all ease-in-out duration-100 md:w-auto' 
                  type='button' >
                    Order Now
               </button>
          
          </div>

     
      
      
    
    <div className='py-2 bg-blue-300'></div>
    
    </div>
  )
}

export default HomeScreen