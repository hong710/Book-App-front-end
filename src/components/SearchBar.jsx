import React from 'react'
import { FaBed, FaRegCalendarAlt,FaSearch, FaMale} from 'react-icons/fa';
function SearchBar() {
    return (

        <div className='flex justify-around items-center h-8 bg-slate-50 
           shadow-lg p-8 rounded-lg absolute w-full max-w-[1024px] -bottom-8'

        > {/*Header Search  */}
            
            <div className='flex items-center gap-2'> {/*Search Item*/}
                <FaBed className='inline text-2xl text-slate-500' />
                <input type='text' placeholder='Where are you going?'
                    className='bg-transparent outline-none text-gray-700'
                />
            </div>{/*Search Item*/}

            <div className='flex items-center gap-2'>{/*Search Item*/}
                <FaRegCalendarAlt className='inline text-2xl text-slate-500' />
                <span className=''>date to date</span>
            </div>{/*Search Item*/}

            <div className='flex items-center gap-2'>{/*Search Item*/}
                <FaMale className='inline text-2xl text-slate-500' />
                <span className=''>2 adults 2 childen 1 room</span>
            </div>{/*Search Item*/}

            <div>{/*Search Item*/}
                <button className='bg-theme text-white shadow-none flex items-center gap-2 px-3 py-2 rounded-md'>
                    <FaSearch className='inline'/> Search
                </button>
            </div>{/*Search Item*/}
        </div> //Header Search
    )
}

export default SearchBar