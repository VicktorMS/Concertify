import { QueryClientProvider } from 'react-query';
import './App.css';
import Header from './components/Header/Header';
import MainBox from './components/MainBox/MainBox';
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { queryClient } from './services/queryClient';
import ArtistPage from './pages/ArtistPage/ArtistPage';

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header/>
        <MainBox>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/artist/*' element={<ArtistPage/>}/>
          </Routes>
        </MainBox>
      </QueryClientProvider>
    </>
  )
}
