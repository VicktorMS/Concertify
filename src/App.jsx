import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainBox from "./components/MainBox/MainBox";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtistDetails from "/src/pages/ArtistDetails/ArtistDetails";

export default function App() {
  const [userSearchData, setUserSearchData] = useState("Harry Styles");

  const handleUserSearchData = (data) => {
    setUserSearchData(data);
  };

  return (
    <>
      <Header userSearchData={handleUserSearchData} />
      <MainBox>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={<ArtistDetails artistsSearchData={userSearchData} />}
          />
        </Routes>
      </MainBox>
    </>
  );
}
