import React from "react"
import { Link } from "react-router-dom"

const Home = (props) => {
    return (
        <div>
            <div className="grid-x align-center home-page">RATE AND REVIEW YOUR DAY
            <div className="cell small-12 align-center text-center logo">
            </div>
            </div>
            <div className="grid-x align-center create-account-button">
                <Link to="/users/new" className="button expanded" href="#">Create an Account</Link>
            </div>
            <div className="grid-x align-center align-middle footer">© 2022 Hey How’s Your Day
            </div>
        </div>
    )
}

export default Home