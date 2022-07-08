import React, {useState} from 'react'
import './Container.css';
import { BsArrowLeftShort, BsSearch, BsChevronDown,BsPerson, BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'
import { GiCartwheel } from 'react-icons/gi'
import { RiDashboardFill } from 'react-icons/ri'
import { AiOutlineLogout, AiOutlineSetting, AiOutlineBarChart } from 'react-icons/ai'
import { ImCalculator } from 'react-icons/im'

const Container = () => {
    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const Menus =[
        {title: "Dashboard"},
        {title: "Calculator", icon: <ImCalculator /> },
        {
            title: "Projects",
            icon: <BsReverseLayoutTextSidebarReverse/>,
            submenu:true,
            spacing:true,
            submenuItems:[
                {title: "Player Refunds"},
            ],
        },
        {title: "Analytics", icon: <AiOutlineBarChart />},
        {title: "Profile", spacing:true, icon: <BsPerson />},
        {title: "Setting", icon: <AiOutlineSetting />},
        {title: "Logout", icon: <AiOutlineLogout />},
        
    ];

  return (
    <div className='flex'>
        <div className={`sidebar h-full p-5 pt-8 ${open ? "w-72": "w-20"} duration-300 relative`}>
            <BsArrowLeftShort className={`bg-white bsarrow text-3xl rounded-full absolute -right-3 top-9 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
            <div className='inline-flex'>
                <GiCartwheel className={`roulette text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]" }`}/>
                <h1 className={`text-white origin-left font-medium duration-500 text-2xl ${!open && "scale-0"}`}></h1>
            </div>

            <div className={`flex items-center rounded-md mt-6 ${!open ? "px-2.5" : 'px-4'} py-2`}>
                <BsSearch className={`text-white text-lg block float-left duration-500 cursor-pointer ${open && "mr-2"}`}/>
                <input type={"search"} placeholder='Search' className={`text-base px-3 bg-transparent border-slate-300 duration-500 focus:outline-none w-full rounded-md ${!open && "hidden"}`} />
            </div>

            <ul className='pt-2'>
                {Menus.map((menu, index) => (
                    <>
                        <li key={index} className={`text-gray-300 smlist rounded-md p-2 text-sm flex items-center gap-x-4 cursor-pointer ${menu.spacing ? "mt-9" : "mt-2"}`}>
                            <span className='text-2xl block float-left'>
                                {menu.icon ? menu.icon : <RiDashboardFill />}
                            </span>
                            <span className={`text-base font-medium duration-200 ${!open && "hidden"}`}>
                                {menu.title}
                            </span>
                            {menu.submenu && open &&  (
                                <BsChevronDown className={`${submenuOpen && "rotate-180"} flex-1`} onClick={() => {setSubmenuOpen(!submenuOpen)}}/>
                            )}
                        </li>

                        {menu.submenu && submenuOpen && open && (
                            <ul>
                                {menu.submenuItems.map((submenuItem, index) =>(
                                    <li key={index} className="text-gray-300 smlist rounded-md p-2 px-5 text-sm flex items-center gap-x-4 cursor-pointer">
                                        {submenuItem.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                ))}
            </ul>
        </div>
        <div className="p-7">
            <h1 className='text-2xl font-semibold'>Mainpage</h1>
        </div>

    </div>
  )
}

export default Container