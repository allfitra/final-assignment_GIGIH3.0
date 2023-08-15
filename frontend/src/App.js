import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import { Provider } from "react-redux";
// import store from "../redux/store";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="flex">
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-10 w-80 bg-transparent ">
              <img className="w-full h-44 bg-slate-600 flex-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogSa5HJEba2GNemt3fLFuX1Y8nt8JWCEQEA&usqp=CAU" />
              <div className="px-6 py-4">
                <div className="font-bold text-white text-xm mb-2">Goto Impact Fondation</div>
                <p className="text-white text-xs">Video From GoTo Impact Fondation</p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-10 w-80 ">
              <img className="w-full h-44 bg-slate-600 flex-1" src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" />
              <div className="px-6 py-4">
                <div className="font-bold text-white text-xm mb-2">Promo Terbatas Simba Hanya Rp10,00!</div>
                <p className="text-white text-xs">Tempat belanja murah hanya disini</p>
              </div>
            </div>
          </div>

          {/*  */}
          {/* Mohon Maaf, Masih terdapat error disini dan belum solve. */}
          {/*  */}

          {/* <div className="p-8">
            <Provider store={store}>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path="video">
                    <Route path=":videoId" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Provider>
          </div> */}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
