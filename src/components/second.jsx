import React from 'react'
import MESS from '../assets/message.webp'



const second = () => {
  return (
    <div className='items-center justify-center flex flex-col h-full bg-[#171A3B] text-white top-0 pt-36'>
        <div className='text-[40px] pb-10'>
        Are you ready?
        </div>
        
        <div className='leading-[1.9em] text-[18px]'>
        I'm a paragraph. Click here to add your own text and edit me. 
        </div>

        <div className='leading-[1.9em] text-[18px]' >
        It’s easy. Just click “Edit Text” or double click me to add your
        </div>

        <div className='leading-[1.9em] text-[18px]'>
        own content and make changes to the font.
        </div>

        <div className='pt-28'>
            <img src={MESS}  />
        </div>

        <div className='leading-[1.9em] text-[20px] pt-4'>
        Be the first to hear when we go live
        </div>
    <form className=''>
        
    <div className='pt-[10px]'>
            <div><label htmlFor="">Email*</label></div>

           
            <div className='flex w-[588px] h-[54px] rounded-2xl border-[#FF4040] border-[2px]  '> 
                       <input 
            type="email" 
            placeholder='Enter your email' 
            className='w-full border-none bg-transparent px-4 py-1 outline-none focus:outline-none'
            />
                     
                      <button type='submit' className='rounded-2xl  w-[130px] h-[40px] bg-[#4671E1] hover:bg-white hover:text-[#4671E1] m-1 px-4 py-1'>
                         Notify Me
                      </button>
                     
            
   
                  
       </div>
            
              
        </div>
    </form>

        <div className='flex space-x-10 w-full pt-48 pb-10 '> 
          <div className='flex space-x-10 pl-20'>
          <div>
                Facebook
            </div>
            <div>
                LinkedIn
            </div>
            <div>
                X
            </div>
          </div>

            <div className='pl-[800px]'>
        © 2024 by BRIGBOX
        </div>
        </div>

       
    </div>
  )
}

export default second