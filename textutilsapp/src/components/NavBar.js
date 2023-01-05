import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" >{props.title}</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" activeclassname={"nav-link active"} className={"nav-link"} >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" activeclassname={"nav-link active"} className={"nav-link"} >{props.aboutText}</NavLink>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            {/*<button className="btn btn-primary" type="submit" onClick={ () => {<Error404 />}} >Search</button>*/}
                            <NavLink to="/error404" activeclassname={"nav-link active"} className={"btn btn-primary"} >Search</NavLink>
                        </form>
                        <div className={`form-check form-switch mx-5 text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.mode === 'light' ? 'Switch Dark mode' : 'Switch Light mode'} </label>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

NavBar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string,
    mode: PropTypes.string,
    toggleMode: PropTypes.func
}

NavBar.defaultProps = {
    title: "set title here",
    aboutText: "set about us here",
    mode: "light"
}