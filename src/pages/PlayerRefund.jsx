import React from 'react'
// import Container from '../components/Container/Container'
import Footer from '../components/Footer/Footer'
// import Hero from '../components/Hero'
import Navbar from '../components/Navbar/Navbar'
// import './PlayerRefund.css';


const PlayerRefund = () => {
  return (
    <>
        <Navbar/>
        <div className='w-64'>
            scary
        </div>
        {/* <div className="RefundContainer">
            <div className="flex">
                <div className="RefundLeft m-5">
                    <div className="grid cols-2 p-2">
                        <button className='bg-[#00D557] rounded p-2 m-2'>Betcity</button>
                        <button className='bg-[#00D557] rounded p-2 m-2'>Kansino</button>
                        <button className='bg-[#00D557] rounded p-2 m-2'>Toto</button>
                        <button className='bg-[#00D557] rounded p-2 m-2'>Betcity</button>
                    </div>
                </div>
                <div className="RefundRight">
                    <div className="RightWrapper">
                        <div className="RightInputs">
                            <input type="text" className='p-2 mb-2 mt-2' placeholder='Token'/>
                            <input type="text" className='p-2 mb-2 mt-2' placeholder='Player ID'/>
                            <input type="text" className='p-2 mb-2 mt-2' placeholder='Currency'/>
                            <input type="text" className='p-2 mb-2 mt-2' placeholder='External Table ID'/>
                            <input type="number" className='p-2 mb-2 mt-2' placeholder='Winning Amount in Cents'/>
                            <input type="text" className='p-2 mb-2 mt-2' placeholder='Bet Amount in Cents'/>
                            <button className='SubmitButton'>Submit Refund</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <div className='relative'>
            <Footer/>
        </div>
        
    </>
  )
}

export default PlayerRefund