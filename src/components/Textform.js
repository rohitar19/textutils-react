import React ,{useState} from 'react'

export default function Textform(props) {
    const[text, setText]=useState('enter the text'); //state variable syntex ;(by default value)
    
   const handleUpcase=()=>{
        // console.log("Uppercase was clicked"+text)   //insert the text variable
        let newText=text;
        newText=text.toUpperCase();
        setText(newText)
    }
    const handleLocase=()=>{
       
        let newText=text;
        newText=text.toLowerCase();
        setText(newText)
    }
    const clearText=()=>{
        
        let newText=text;
        newText='';
        setText(newText)
    }
    const handleCopy=()=>{
        let text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);

    }
    const handleExtraspace=()=>{
        let newText=text.split(/[  ]+/);
        setText(newText.join(" "))
    }
    const handleOnchange=(event)=>{    //calling event to enter number after the letter uppercase eas clicked
        // console.log("On change")
        setText(event.target.value)
        
    }

    
    // setText("new Text");
  return (
   <>
      
  <div className="mb-3">
  <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'grey':'white'}} onChange={handleOnchange} id="mybox"  rows="8"></textarea>
    <button className="btn btn-primary my-2 mx-1" onClick={handleUpcase}>Convert to Uppercase</button>
    <button className="btn btn-primary my-2 mx-1" onClick={handleLocase}>Convert to Lowercase</button>
    <button className="btn btn-primary my-2 mx-1" onClick={clearText}>Clear</button>
    <button className="btn btn-primary my-2 mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary my-2 mx-1" onClick={handleExtraspace}>Remove Extra spaces</button>
  </div>
  <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
      <h1 >Your Summary</h1>
      <p>{text.split(" ").length}words and {text.length} character</p>
      <p>{0.008*text.split(" ").length} minutes time to read</p>
      <h2>Preview</h2>
      <p>{text}</p>


  </div>
  </>
  )
}
