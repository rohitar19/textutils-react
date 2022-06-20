
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React , {useState} from 'react'

function App() {
  const[mode, setmode]=useState('light')

  const togglemode=()=>{
     if(mode==='light'){
      setmode('black')
      document.body.style.backgroundColor='grey';
     }

  
  else{
    setmode('light')
    document.body.style.backgroundColor='white';
  }
}
      
  return (
      <>
      
     <Navbar title ="TextUtils" abouttext="About" mode={mode} togglemode={togglemode}/>
     <div className="container my-5">
     <Textform heading="Enter Text to Analyse" mode={mode}/>
     {/* <About/> */}
     </div>
    
      </>
  );
}

export default App;
