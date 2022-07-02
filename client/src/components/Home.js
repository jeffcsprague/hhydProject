import React from "react"
import { Link } from "react-router-dom"

const Home = (props) => {
    return (
        <div>
            <div className="grid-x align-center home-page">
                
            <div className="cell small-12"></div>
            </div>
            <div className="grid-x align-center create-account-button">
                <Link to="/users/new" className="button expanded" href="#">Create an Account</Link>
            </div>
            <div className="grid-x align-center align-middle footer">© 2022 Hey How’s Your Day</div>
        </div>
    )
}

export default Home