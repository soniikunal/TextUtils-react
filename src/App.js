// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/navbar';
import Textform from './Components/Textform';
import React,{useState} from 'react'
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes ,
//   Route
// } from "react-router-dom";



function App() {
const[alert,setalert] =useState(null)
const [mode, setmode] = useState("light")

const showAlert= (message,type)=>{
setalert({
  message:message,
  type
})
setTimeout(()=>{setalert(null)},1500)
}


const toggleMode = ()=>{
  if(mode==='light'){
    setmode("dark")
    document.body.style.backgroundColor = '#042743'
    showAlert("Dark Mode Is being Enabled", "primary")
    document.title ="Dark Mode"
  }
  else{
    setmode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light Mode Is being Enabled", "success")
    document.title = "Light Mode"
  }
}


  return (
    <>
    {/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert= {alert} />
<Textform mode={mode} showAlert={showAlert} heading="Text Box"/>
      {/* <Routes > */}
        {/* <Route exact path="/about" element={<About/>} /> */}
        {/* <Route path='/' element={<Textform mode={mode} showAlert={showAlert} heading="Text Box"/>}/> */}
        {/* </Routes> */}
{/* </Router> */}
</>
);
}

export default App;
 