import React from 'react'
import Container from '../components/Container/Container'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar/Navbar'
import './PlayerRefund.css';


const PlayerRefund = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        
        <div className="RefundContainer">
            <div className="RefundSplitter">
                <div className="RefundLeft">
                    <div className="LeftWrapper">
                        <button className='OperatorButton'>Betcity</button>
                        <button className='OperatorButton'>Betcity</button>
                        <button className='OperatorButton'>Betcity</button>
                        <button className='OperatorButton'>Betcity</button>
                    </div>
                </div>
                <div className="RefundRight">
                    <div className="RightWrapper">
                        <div className="RightInputs">
                            <input type="text" className='Inputs'placeholder='Token'/>
                            <input type="text" className='Inputs'placeholder='Player ID'/>
                            <input type="text" className='Inputs'placeholder='Currency'/>
                            <input type="text" className='Inputs'placeholder='External Table ID'/>
                            <input type="number" className='Inputs'placeholder='Winning Amount in Cents'/>
                            <input type="text" className='Inputs'placeholder='Bet Amount in Cents'/>
                            <button className='SubmitButton'>Submit Refund</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default PlayerRefund