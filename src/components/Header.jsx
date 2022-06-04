import React from 'react'
import {FaBed, FaCar, FaPlane, FaTaxi} from 'react-icons/fa';
import SearchBar from './SearchBar';

function Header() {
    return (
        // Header
        <div className='bg-theme text-white flex justify-center relative'>

              {/*Container div  */}  
            <div className='w-full max-w-[1024px] mt-5 mb-24 '>
            
                {/* Headerlist */}
                <div className='flex gap-10'>

                    {/* HeaderListItem */}
                    <div className='flex gap-2.5 items-center text-lg active px-3 py-2'>
                        <FaBed className='inline text-2xl' />
                        <span>Stays</span>
                    </div>
                    
                    {/* HeaderListItem */}
                    <div  className='flex gap-2.5 items-center px-3 py-2'>
                        <FaPlane className='inline text-2xl' />
                        <span>Flights</span>
                    </div>

                    {/* HeaderListItem */}
                    <div  className='flex gap-2.5 items-center px-3 py-2'>
                        <FaCar className='inline text-2xl' />
                        <span>Car rentals</span>
                    </div>

                    {/* HeaderListItem */}
                    <div  className='flex gap-2.5 items-center px-3 py-2'>
                        <FaTaxi className='inline text-2xl' />
                        <span>Airport Taxis</span>
                    </div>
                </div> {/* Headerlist */}

                <h1 className='text-2xl font-medium my-5'>Find your cheapest vacation package. It's convenient.</h1>
                <p className='my-5'>Get rewarded for your travels unclock instant savings of 10% or more!</p>
                <button className='bg-amber-500 p-2'>Sign in / Register</button>

                <SearchBar />
            </div> {/*Container div  */}
        </div>
    )
}

export default Header