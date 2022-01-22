import React from "react";
import Navigation from "./navigation/navigation";
import { StyledEngineProvider } from '@mui/material/styles';
import HeaderPoster from "./header_poster/headerPoster";
// import { BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      {/* <h1 className="text-red-500">
        Hello world!
      </h1> */}
      <Navigation />
      <HeaderPoster />
    </StyledEngineProvider>
  );
}

export default App;
