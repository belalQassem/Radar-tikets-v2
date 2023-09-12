import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loading from "./components/Loading";
import { styled } from "styled-components";
import { useAuthContext } from "./context/AuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RedLight = lazy(() => import("./pages/RedLight/RedLight"));
const LazyLogin = lazy(() => import("./pages/Login/Login"));
const Main = styled.div`
height: 100vh;
@media(max-width: 1400px){
  height: 100vh;
}
`


function App() {
  const {isAuthorized} = useAuthContext();
  return (
    <Main className="App">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={ isAuthorized ? <RedLight />  :<LazyLogin />} />
            <Route path="/" element={ isAuthorized ? <RedLight /> : <LazyLogin /> } />
          </Routes>
        </BrowserRouter>
      </Suspense>
      <ToastContainer />
    </Main>
  );
}

export default App;
