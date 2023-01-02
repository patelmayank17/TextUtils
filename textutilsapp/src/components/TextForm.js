import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);
        props.showAlert("Text updating...","success");
    }

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Uppercase activated!","success");
    }

    const handleOnLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Lowercase activated!","success");
    }

    const handleOnClearClick = () => {
        setText("");
        props.showAlert("Text Cleared!","success");
    }

    const handleOnCopyClick = () => {
        let text = document.getElementById('txtEdit');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard!","success");
    }

    const handleOnExtraSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed from Text!","success");
    }

    return (
        <div>
            <div className='container' style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1> {props.heading} </h1>
                <div className='mb-3'>
                    <textarea id='txtEdit' className='form-control' style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'grey' : 'white' }} rows='8' value={text} onChange={handleOnChange} ></textarea>
                </div>

                <button className='btn btn-primary mx-3 my-2' onClick={handleUpClick} > Convert to UpperCase </button>

                <button className='btn btn-primary mx-3 my-2' onClick={handleOnLoClick} > Convert to LowerCase </button>

                <button className='btn btn-primary mx-3 my-2' onClick={handleOnClearClick} > Clear </button>

                <button className='btn btn-primary mx-3 my-2' onClick={handleOnCopyClick} > Copy </button>

                <button className='btn btn-primary mx-3 my-2' onClick={handleOnExtraSpaceClick} > Remove Extra Spaces </button>
            </div>

            <div className='container my-3' style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p>{ text === "" ? "0" : text.split(" ").length} words and {text.length} characters</p>
                <p>{ text === "" ? "0" : 0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview"}</p>
            </div>
        </div>
    )
}

TextForm.propsType = {
    heading: PropTypes.string,
    mode: PropTypes.string,
    showAlert: PropTypes.func
}