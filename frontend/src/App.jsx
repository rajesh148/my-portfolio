import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  HideLoading,
  ReloadData,
  SetPortfolioData,
  ShowLoading,
} from "./redux/rootSlice";
import Admin from "./pages/admin/Admin";
import Login from "./pages/admin/Login";
function App() {
  const { loading, portfolioData, reloadData } = useSelector(
    (state) => state.root
  );
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("/api/portfolio/getPortfolioData");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      console.log(error);
      dispatch(HideLoading());
    }
  };
  useEffect(() => {
    if (!portfolioData) {
      getData();
    }
  }, [portfolioData]);

  useEffect(() => {
    if (reloadData) {
      getData();
    }
  }, [reloadData]);

  return (
    <BrowserRouter>
      {/* {loading ? <Loader /> : null} */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
