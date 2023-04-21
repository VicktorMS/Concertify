import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import '@fontsource/inter'
import GetStarted from './pages/GetStarted/GetStarted'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <App/>
    {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetStarted/>}/>
          <Route path="/home" element={<App/>}/>
        </Routes>
      </BrowserRouter> */}
	</React.StrictMode>
)