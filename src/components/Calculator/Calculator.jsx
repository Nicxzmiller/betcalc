import React from 'react'
import Container from '../Container/Container'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export const Calculator = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex'>
            <Container/>
            Calculator
        </div>
        <Footer/>
    </div>
  )
}
