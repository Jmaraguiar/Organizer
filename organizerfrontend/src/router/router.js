import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { SignUp } from "../pages/SignUp";




function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<MainPage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;