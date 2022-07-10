import React from 'react'
// import Logo from '../images/logo.png';
import './Footer.css'
// import Licenses from '../images/licenses.png'
import { BsFacebook, BsTwitter, BsLinkedin  } from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='p-10 foo bg-gray-800 text-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
          <div className="mb-5 text-left">
            <h4 className='pb-4'>
              <strong>STAKE<span className='text-[#50d71e]'>LOGIC</span><span className='bg-[#50d71e] p-0 ml-0.5'>LIVE</span></strong>
            </h4> <br />
            <p className='text-gray-500'>
              A123 found street <br /> some jargons <br />
              Malta <br /> <br />
              <strong>Phone: 420-69</strong> <br />
              <strong>Email: testing@gmail.com</strong>
            </p>
          </div>
          <div className="mb-5 text-left">
            <h4>Useful Links</h4> <br />
            <ul>
              <li className='pb-4'>Dashboard</li>
              <li className='pb-4'>Projects</li>
              <li className='pb-4'>BlackJack</li>
              <li className='pb-4'>Roulette</li>
              <li className='pb-4'>Statistics</li>
            </ul>
          </div>
          <div className="mb-5 text-left">
          <h4>External Links</h4> <br />
            <ul>
              <li className='pb-4'>SL-Home</li>
              <li className='pb-4'>About SL</li>
              <li className='pb-4'>Services</li>
              <li className='pb-4'>Terms of service</li>
              <li className='pb-4'>Privacy Policy</li>
            </ul>
          </div>
          <div className="mb-5">
            <h4 className='pb-4'>Get the latest Update</h4>
            <form className='flex flex-row flex-wrap'>
              <input type="email" placeholder='email@example.com' className='w-2/3 p-2 outline-none text-[#161B3B]'/>
              <button className='p-2 w-1/3 bg-[#00D557] cursor-pointer'>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full px-10">
        <div className='max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center'>
          <div className='text-center'>
            <div>
              Copyright <strong>Stakelogic Live</strong>. All Rights Reserved.
            </div>
            <div>
              Designed by <a href="#">Stakelogic</a>
            </div>
          </div>
          <div className='flex h-10'>
            <BsFacebook className='mx-5 cursor-pointer'/>
            <BsLinkedin className='mx-5 cursor-pointer'/>
            <BsTwitter className='mx-5 cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer