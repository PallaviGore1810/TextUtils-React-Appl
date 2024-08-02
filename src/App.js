import React, { useState } from 'react'
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import Alert from "./Alert";
import About from "./About";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
    const [mode, setMode] = useState('Light')
    const [alert, setAlert] = useState(null)

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 2000)
    }

    const toggleMode = () => {
        if (mode === 'Light') {
            setMode('Dark');
            document.body.style.backgroundColor = '#042743'
            document.body.style.color='white'
            // document.title = "TextUtil- Dark"
            showAlert("Dark Mode Enabled!", "success")
        }
        else {
            setMode('Light');
            document.body.style.backgroundColor = 'white'
            // document.title = "TextUtil- Light"
            showAlert("Light Mode Enabled!", "success")
        }
    }
    return (
        <div>
            <BrowserRouter>
                <Navbar mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <Routes>
                    <Route exact path="/about" element={<About mode={mode}/>} />
                    <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
