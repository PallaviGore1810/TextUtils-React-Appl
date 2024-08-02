import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const [mode, setMode] = useState('Light Mode')

    let toggleMode = () => {
        if (mode === 'Dark Mode') {
            setMode('Light Mode')
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
        } else {
            setMode('Dark Mode')
            document.body.style.backgroundColor = '#042743'
            document.body.style.color = 'white'
        }
    }
    return (
        <React.StrictMode>

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">TextUtils</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        <form class="d-flex text-light">
                            <div class="form-check form-switch text-white">
                                <input class="form-check-input" type="checkbox" onClick={toggleMode} id="flexSwitchCheckDefault" />
                                <label class="form-check-label" for="flexSwitchCheckDefault">{mode}</label>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

        </React.StrictMode>
    )
}

export default Navbar;