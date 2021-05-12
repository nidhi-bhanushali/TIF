import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Navbar = ({title}) => {
    return (
        <div className = "navbar bg-primary">
            <h1>{title}</h1>
            <ul>
                <li>
                    <Link to ='/'>Home</Link>
                </li>
                <li>
                    <Link to ='/view'>View Opportunities</Link>
                </li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: 'TeachForIndia'
}

export default Navbar
