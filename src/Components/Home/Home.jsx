import React, { Component } from 'react'
import myImage from './avataaars.svg';
import './Home.css'

export default class Home extends Component {
  render() {
    return <>
      <header className=" home pt-4 pb-5 d-flex justify-content-center align-items-center " >
        <div className='text-center m-0  text-white'>
          {/* <img src={myImage} alt="" className='w-100' /> */}
          <img src="./imgs/avataaars.svg" alt="" className='w-75' />

          <h1 className='pt-4'>START FRAMEWORK</h1>
          <div className='fw-bold   my-2 d-flex justify-content-center align-items-center'>
            <div className='divs   line'></div>
            <div className='divs mx-4 text-white'><i className='fa-solid fa-star'></i></div>
            <div className='divs   line'></div>
          </div>
          <p className='m-0'> Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </header>


    </>
  }
}
