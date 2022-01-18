import React from 'react'
import "./Analysis.css"
import Open from "../Assets/open.gif"
import Close from "../Assets/close.gif"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Analysis = () => {
    const res = useSelector((state) => {
        console.log(state)
        return state.results;
    }
    )

    console.log(res);

    const result = 1

    return (
        <div className="row left">
            <div className="col-3  sidebar">
                {
                res.result ?
                (
                    <div>
                        <img src={Open} alt="..." className="image" />
                        <h1 className="text-success mx-3" >Time to Open</h1>
                        <p className="font-weight-bold  text-success mx-3"> We suggest you to reopen your organization as the situation seems to be stable now.</p>
                    </div>
                )
                :
                (
                <div>
                    <img src={Close} alt="..." className="image" />
                    <h1 className="text-danger mx-3" >Keep It Closed</h1>
                    <p className="font-weight-bold text-danger mx-3"> We suggest you to keep the organization closed as the current situation is not very stable. </p>
                </div>)}
            </div>
            <div className="col-6 middle">
                <div className="row cont mt-4 mb-4">
                    <div className="col-5 box">
                        <p>Average Cases</p>
                        <p className="text"><span className="mtext">{res.avg}</span></p>
                    </div>
                    <div className="col-5 box">
                        <p>Total Average</p>
                        <p className="text"><span className="mtext">{res.tot_avg}</span></p>
                    </div>
                </div>
                <div className="row cont mt-4 mb-4">
                    <div className="col-5 box">
                        <p>Distance from office</p>
                        <p className="text"><span className="mtext">{res.dist}</span></p>
                    </div>
                    <div className="col-5 box">
                        <p>Cases</p>
                        <p className="text"><span className="mtext">{res.cases}</span></p>
                    </div>
                </div>
                <div className="row cont mt-4 mb-4">
                    <div className="col-5 box">
                        <p>Allowance</p>
                        <p className="text"><span className="mtext">{res.result ? "Yes" : "No"}</span></p>
                    </div>
                    <div className="col-5 box">
                        <p>No. Of People</p>
                        <p className="text"><span className="mtext">{res.result ? "----" : 12}</span></p>
                    </div>
                </div>
            </div>
            <div className="col-3 right cont1">
                <div className="box m-4 mx-3 text-light">
                    <p>Complete information of each employ.</p>
                
                    <NavLink class="btn btn-primary button" to="/table"> Table View </NavLink>
                </div>
                <div className="text-center" >
                    <button className="btn btn-primary button btn1" > Write us a Feedback </button>
                    <button className="btn btn-primary button btn1"> Write us a testimonial! </button>
                </div>

            </div>
        </div>
    )
}

export default Analysis
