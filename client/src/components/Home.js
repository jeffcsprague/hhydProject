import React from "react"
import { Link } from "react-router-dom"

const Home = (props) => {
    return (
        <div className="grid-container align-center-middle home-page">
            <h3 className="cell home-page-tagline">RATE & REVIEW YOUR DAY</h3>
            <div className="cell logo"></div>
            <div className="grid-x align-center-middle create-account-button">
                <Link to="/users/new" className="cell button expanded" href="#">Create an Account</Link>
            </div>
            <div className="grid-x align-center-middle footer">988 SUICIDE & CRISIS HOTLINE DIAL 988</div>
        </div>
    )
}

export default Home