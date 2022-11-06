import React, {useState} from 'react'


export default function Textform(props) {
    const onChangevalue = (event)=>{
        setText(event.target.value)
    }
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UPPERCASE", "success")
    } 
    const handleloClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    } 
    // const handleCopy = ()=>{
    //     let textToCopy = document.getElementById('myBox');
    //     textToCopy.select();
    //     textToCopy.setSelectionRange(0,9999);
    //     navigator.clipboard.writetext(textToCopy.value);
    // } 

    const clearText=()=>{
        setText("")
        props.showAlert("Text cleared", "success")
    }
    const handleExtraspace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }


    const [text, setText] = useState("")
    return (
    <>
    <div className="container" style={{color: props.mode === "light"?"black":"white"}}>
    <h1>{props.heading}</h1>
    <div className='mb-3'>
    <textarea className="form-control" id="myBox" rows="6" onChange={onChangevalue} placeholder="EnterText"  value={text} style={{backgroundColor: props.mode ==="light"?"white":"#375677", color: props.mode === "light"?"black":"white"}} ></textarea>    
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UPPERCASE</button>  
    <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to LOWERCASE</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraspace}>Remove Extra Spaces</button>
    <button className="btn btn-danger mx-1" onClick={clearText}>Clear Text</button>
    
    </div>
    <div className="container"style={{color: props.mode === "light"?"black":"white"}}>
        <h2>Summary</h2>
        <p>{text.split(" ").length -=1} words and {text.length} characters</p>
        <p>{text.split(" ").length* 0.008 } minutes</p>
        <h2>Preview</h2>
        <p>{text.length >0 ?text : "Enter Some Text to Preview"}</p>
    
    </div>
    </>
  )
}
