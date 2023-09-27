import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
  render() {
    return <>
      <section className=" about vh-100 text-center d-flex justify-content-center align-items-center" >
        <div className='container text-white'>

          <h1 className='text-center text-white fw-bolder'>ABOUT COMPONENT</h1>

          <div className='my-4  fw-bold   my-2 d-flex justify-content-center align-items-center'>
            <div className='divs   line'></div>
            <div className='divs mx-4 text-white'><i className='fa-solid fa-star'></i></div>
            <div className='divs   line'></div>
          </div>

          
            <div className="row">
              <div className="col-md-6">
                <div className=" ">
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className=" ">
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>

            </div>
          
        </div>

      </section >


    </>
  }
}
