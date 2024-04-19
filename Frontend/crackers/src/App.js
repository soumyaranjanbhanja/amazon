import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import GoogleAuth from "./components/GoogleAuth";
// import ForgotPassword from "./components/ForgotPassword";




const App=()=>{
  return(
        <div className="App">
                     <BrowserRouter>
                                   <Routes>
                                           <Route path="/" element={<Signup/>}/>
                                           <Route path="/Login" element={<Login/>}/>
                                           <Route path="/Google" element={<GoogleAuth/>}/>
                                  </Routes>
                     </BrowserRouter>
       </div>
  )
}


export default App