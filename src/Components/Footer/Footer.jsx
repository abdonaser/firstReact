import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return <>
      <footer className=" footer text-center pt-4">
        <div className="container  pt-3 py-3">
          <div className="row">
            <div className='col-md-4'>
              <div>
                <h2 className='fw-bold text-white mb-3'>LOCATION</h2>
                <p className='  text-white  '>2215 John Daniel Drive</p>
                <p className='  text-white  '>Clark, MO 65243</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div>
                <h2 className='fw-bold text-white mb-3'>AROUND THE WEB</h2>
                <div className='icon mt-3 d-flex justify-content-center align-items-center'>
                  <div className='icons d-flex justify-content-center align-items-center me-2'>
                    <i className='fa-brands fa-facebook  fa-xl text-white '></i>
                  </div>
                  <div className=' icons d-flex justify-content-center align-items-center me-2'>
                    <i className='fa-brands fa-twitter  fa-xl text-white'></i>
                  </div>
                  <div className='icons d-flex justify-content-center align-items-center me-2 '>
                    <i className='fa-brands fa-linkedin  fa-xl text-white'></i>
                  </div>
                  <div className=' icons d-flex justify-content-center align-items-center me-2 '>
                    <i className='fa-solid fa-globe fa-xl text-white'></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div>
                <h2 className='fw-bold text-white mb-3'>ABOUT FREELANCER</h2>
                <p className='  text-white  '>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>

          </div>
        </div>
        <div className="      second-footer py-2 ">
          <p className='mb-0 p-3'>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  }
}
