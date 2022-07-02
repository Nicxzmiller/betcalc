import React, {useState} from 'react'
import './Container.css';
import { BsArrowLeftShort } from 'react-icons/bs'
import { GiCartwheel } from 'react-icons/gi'

const Container = () => {
    const [open, setOpen] = useState(true);

  return (
    <div className='flex'>
        <div className={`sidebar h-screen p-5 pt-8 ${open ? "w-72": "w-20"} duration-300 relative`}>
            <BsArrowLeftShort className={`bg-white bsarrow text-3xl rounded-full absolute -right-3 top-9 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
            <div className='inline-flex'>
                <GiCartwheel className='roulette text-4xl rounded cursor-pointer block float-left mr-2'/>
                <h1 className={`text-white origin-left font-medium duration-500 text-2xl ${!open && "scale-0"}`}>Roulette</h1>
            </div>
        </div>
        <div className="p-7">
            <h1 className='text-2xl font-semibold'>Mainpage</h1>
        </div>
    </div>
  )
}

export default Container