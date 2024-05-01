import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Card from "./components/Card";
import Bar from "./components/Bar";
import DenseAppBar from "./components/DenseAppBar";
import DrawerComp from "./components/DrawerComp";
import Hello from "./components/Hello";
import Well from "./components/Well";
import GmailUi from "./components/GmailUi";




const App=()=>{
  return(
    <div className="App">
               <BrowserRouter>
                    <Routes>
                          <Route path="/Signup" element={<Signup/>}/>
                          <Route path="/Login" element={<Login/>}/>
                          <Route path="/Card" element={<Card/>}/>
                          <Route path="/Bar" element={<Bar/>}/>
                          <Route path="/DenseAppBar" element={<DenseAppBar/>}/>
                          <Route path="/DrawerComp" element={<DrawerComp/>}/>
                          <Route path="/Hello" element={<Hello/>}/>
                          <Route path="/" element={<Well/>}/>
                          <Route path="/GmailUi" element={<GmailUi/>}/>
                    </Routes>
               </BrowserRouter>
    </div>
  )
}

export default App