import React from 'react'
import Logo from '../images/logo.png';
import './Footer.css'
import Licenses from '../images/licenses.png'


const Footer = () => {
  return (
    <div className='w-full foo p-7'>
        <div className="top flex space-between">
          <img src={ Logo } className='h-8 w-22' alt="footer-img" />
          <ul className='flex items-end space-x-4 text-white'>
            <li>Home</li>
            <li>About</li>
            <li>News</li>
          </ul>
        </div>
        <hr className=' border-2 border-white'/>

        <div className="middle flex p-2">
          <div className="grid grid-cols-2">
            <p className='text-white text-wrap'>
            StakeLogic B.V. is the owner of all software and other material on this website. All intellectual property rights vested therein exclusively belong to Stakelogic. Any kind of exploitation of Stakelogic’s intellectual property rights requires Stakelogic’s written approval.

            Stakelogic BV is licensed and regulated in GB by the Gambling Commission. Account No.55512
            Stakelogic UK Limited is licensed and regulated in GB by the Gambling Commission. Account No. 55511

            Stakelogic is committed to gaming that is fun, safe, and secure. Visit BeGambleAware.org – +18 Only
            </p>
          </div>
          <div className="grid grid-cols-2">
            <img src={Licenses} alt="licenses" />
          </div>
        </div>
        <hr className=' border-2 border-white'/>

      <div className="bottom"></div>
    </div>
  )
}

export default Footer