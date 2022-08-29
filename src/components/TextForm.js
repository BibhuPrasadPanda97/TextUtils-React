import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text changed to UpperCase", "success");
    }

    const handleLpClick = () => {
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text changed to LowerCase", "success");
    }

    // Handle copy text
    const handleCopy = () => {
        console.log("Text Copied!!");
        var text = document.getElementById('textBoxInput');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
        // console.log(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#0A305A':'white', color: props.mode==='dark'?'white':'black'}} id="textBoxInput" rows="5"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Conver to UpperCase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLpClick}>Conver to LowerCase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").filter((element) => {return element.length!=0}).length} workds and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length!=0}).length} minutes to read</p>
                <h3 className='mt-3'>Preview</h3>
                <p>{text.length>0 ? text:"Enter some text to preview"}</p>
                <p>{text}</p>
            </div>
        </>
    )
}
