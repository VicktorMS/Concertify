import './App.css';
import Header from './components/Header/Header';
import MainBox from './components/MainBox/MainBox';
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header/>
      <MainBox>
        <Routes>
          <Route path='/' element={<Home/>}/>
               
        </Routes>
      </MainBox>
    </>
  )
}
