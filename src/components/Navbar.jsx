import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-[50px] bg-theme flex justify-center'>
        <div className='w-full max-w-[1024px] container-md flex items-center justify-between'>
            <span className='text-white font-medium'>React Booking</span>
            
            {/* Nav Item */}
            <div className=''>
                <button className='mx-2'>Register</button>
                <button className=''>Login</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar