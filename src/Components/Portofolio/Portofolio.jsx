import React, { Component } from 'react'
import './Portofolio.css'
import PortofolioChild from '../PortofolioChild/PortofolioChild'

export default class Portofolio extends Component {
  state = {
    allProducts: [
      { img: "./imgs/port1.png", id: "img1" },
      { img: "./imgs/port2.png", id: "img2" },
      { img: "./imgs/port3.png", id: "img3" },
      { img: "./imgs/port1.png", id: "img4" },
      { img: "./imgs/port2.png", id: "img5" },
      { img: "./imgs/port3.png", id: "img6" },
    ]
  }
  render() {
    return <>
      <section className='portofolio'>

        <h1 className='mt-4 text-center fw-bolder'>PORTFOLIO COMPONENT</h1>

        <div className='my-3  fw-bold   my-2 d-flex justify-content-center align-items-center'>
          <div className='divs bg-black  line'></div>
          <div className='divs mx-4 '><i className='fa-solid fa-star'></i></div>
          <div className='divs  bg-black line'></div>
        </div>
        <div className="container my-4">
          <div className="row g-4">
            {this.state.allProducts.map((pro ,indx) => { return <PortofolioChild key={indx} pro={pro} /> })}
            {/* {this.state.allProducts.map((pro) => {
              return <>
                <div
                  class="modal fade"
                  id="img1"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true">

                  <div class="modal-dialog">
                    <div class="modal-content">

                      <div class="modal-body">
                        <img src={pro.img} className='w-100' alt="" />
                      </div>

                    </div>
                  </div>
                </div>


              </>
            })} */}
          </div>



        </div>
      </section>

    </>
  }
}
