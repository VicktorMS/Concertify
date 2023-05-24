import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainBox from './components/MainBox/MainBox';
import { useFetch } from './hooks/useFetchBandsInTown';
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {

  const [userSearchData, setUserSearchData] = useState('Harry Styles')

  const { data: artists, error, isFetching } = useFetch(`artists/${userSearchData}`)

  const handleUserSearchData = (data) => {
    setUserSearchData(data)
  }
  
  return (
    <>
      <Header userSearchData={handleUserSearchData}/>
      <MainBox>
        <Routes>
          <Route path='/' element={<Home artistsSearchData={artists}/>} />
               
        </Routes>
      </MainBox>
    </>
  )
}
