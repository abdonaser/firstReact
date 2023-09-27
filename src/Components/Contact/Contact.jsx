import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return <>
      <section className='contact'>
        <h1 className='mt-4 text-center fw-bolder'>CONATCT SECTION</h1>

        <div className='my-3  fw-bold   my-2 d-flex justify-content-center align-items-center'>
          <div className='divs bg-black  line'></div>
          <div className='divs mx-4 '><i className='fa-solid fa-star'></i></div>
          <div className='divs  bg-black line'></div>
        </div>

        <div className='w-50 m-auto p-5'>
          <form action="">
            <input
              type="text"
              name=""
              id=""
              placeholder='User Name'
              className='w-100 form-control form-control-lg border-0 border-bottom mb-4 rounded-0 outline-0'
            />
            <input
              type="text"
              name=""
              id=""
              placeholder='User Age'
              className='w-100 form-control form-control-lg border-0 border-bottom mb-4 rounded-0 outline-0'
            />
            <input
              type="text"
              name=""
              id=""
              placeholder='User Email'
              className='w-100 form-control form-control-lg border-0 border-bottom mb-4 rounded-0 outline-0'
            />
            <input
              type="text"
              name=""
              id=""
              placeholder='User Password'
              className='w-100 form-control form-control-lg border-0 border-bottom mb-4 rounded-0 outline-0'
            />
            <button className='btn btn-success'>Send Message</button>
          </form>
        </div>
      </section>
    </>
  }
}
