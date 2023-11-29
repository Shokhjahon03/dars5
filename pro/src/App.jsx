import {Fragment} from 'react'
import './App.css'
import Header from "./components/header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import Countres from "./pages/countres.jsx";
import Account from "./pages/account.jsx";
import Blogs from "./pages/blogs.jsx";

function App() {

  return (
    <BrowserRouter>
    <Header/>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/caunter" element={<Countres/>}/>
          <Route path="/accaunt" element={<Account/>}/>
          <Route path="/account/:accountId" element={<Blogs/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
