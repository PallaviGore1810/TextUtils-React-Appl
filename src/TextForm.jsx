import React, { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState('');

    const handleUpperCase = () => {
        console.log("Changed text:" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLowerCase = () => {
        console.log("Changed text:" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!", "primary");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "warning");
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleClear = () => {
        setText('')
        props.showAlert("Text Cleared!", "danger");
    }

    return (
        <div>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" className='form-label'>Example Textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{ backgroundColor: props.mode === 'Dark' ? '#13466e' : 'white', color: props.mode === 'Dark' ? 'white' : '#042743' }} rows={6}></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpperCase}>UPPERCASE</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowerCase}>LOWERCASE</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>COPY TEXT</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClear}>CLEAR TEXT</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>REMOVE EXTRA SPACES</button>
            </div>

            <div className="container">
                <h2>Your text summary is </h2>
                <p>{text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((ele) => { return ele.length !== 0 }).length} Minute Read</p>
                <h3>Preview</h3>
                <p className='border border-1'>{text.length?text:'Nothing to preview'}</p>
            </div>
        </div>
    )
}

export default TextForm
