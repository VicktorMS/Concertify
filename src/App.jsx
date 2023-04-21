import './App.css';
import Header from './components/Header/Header';
import MainBox from './components/MainBox/MainBox';
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
    <Router>
      <Header/>
      <MainBox>
        <Routes>
          {/* <Route path='/search' element={<SearchPage/>}/> */}
            
          <Route path='/' element={<Home/>}/>     
        </Routes>
      </MainBox>
    </Router>
    </>
  )
}
