import React, { Component } from 'react'

export default class PortofolioChild extends Component {
    render() {
        const product = this.props.pro
        const { img, id } = product
        return <>
            <div className="col-md-4">
                <div className='portofolio-item'>
                    <img className='w-100 rounded-3' src={img} alt="" />
                    {/* <p>id : {"#" + id}</p> */}
                    <div
                        data-bs-toggle="modal"
                        data-bs-target={"#" + id}
                        className='plus rounded-3'>
                        <i className='fa-solid fa-plus'></i>

                    </div>
                    {/*  */}

                </div>
            </div>
            <div
                className="modal     fade"
                id={id}
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">

                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-body p-0">
                            <img src={img} className='w-100 rounded-3' alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    }
}
