import React from "react"
import { Link } from "react-router-dom"

const Home = (props) => {
    return (
        <div>
            <div className="box flex-container align-center align middle home-page">
            </div>
            <div className="box flex-container align-center align middle">
                <Link to="/users/new" className="button expanded" href="#">Create an Account</Link>
            </div>
        </div>
    )
}



export default Home