import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// import Hero from './components/Hero';
import Container from '../Container/Container';

export const Home = () => {
  return (
    <>
        <Navbar/>
        <div className='flex'>
          <Container/>
          <div className="flex flex-row h-screen p-3">
              <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-3'>
                  <div className='col-span-2 bg-[#782939]'>
                      left
                  </div>
                  <div className='bg-[#ea5678] ml-5'>Right</div>
              </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}
