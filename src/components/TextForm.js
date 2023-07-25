import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const HandleUpCase = ()=>{
        const newText = text.toUpperCase();
        setText(newText);
    }

    const HandleLoCase =()=>{
        const newText = text.toLowerCase();
        setText(newText);
    };

    const HandleClear = ()=>{
        const newText = '';
        setText(newText);
    };

    let  HandleOnChange = (event)=>{
        setText(event.target.value);
    }

    return (
        <>
            <div className={`container my-3 text-${props.mode==='light' ? 'dark':'light'}`}>
                <h3>Enter Your Text Here</h3>
                <textarea  value={text} onChange={HandleOnChange} className={`form-control bg-${props.mode} text-${props.mode==='light' ? 'dark':'light'}`} id="textArea" rows="3" ></textarea>
                <button onClick={HandleUpCase} type="button" className="btn btn-primary m-2" >UpperCase</button>
                <button onClick={HandleLoCase} type="button" className="btn btn-primary" >LowerCase</button>
                <button onClick={HandleClear} type="button" className="btn btn-primary m-2" >ClearText</button>
            </div>
            <div className={`container my-3 text-${props.mode==='light' ? 'dark':'light'}`}>
                <h4>{text.split(/\S+/).length-1} words and {text.split('').filter(function(value){return value!==' ';}).length} Alphabets</h4>
            </div>
        </>
    );
}