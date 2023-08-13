import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loading from "./components/Loading";
import { styled } from "styled-components";

const RedLight = lazy(() => import("./pages/RedLight/RedLight"));
const Main = styled.div`
height: 100vh;
@media(max-width: 1400px){
  height: 120vh;
}
`


function App() {
  return (
    <Main className="App">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RedLight />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Main>
  );
}

export default App;
