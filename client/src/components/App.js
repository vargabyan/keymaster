import React from "react";
import { StyledEngineProvider } from '@mui/material/styles';
import HeaderPoster from "./header_poster/headerPoster";
import InformationTable from "./information_table/informationTable";
// import { BrowserRouter, Switch } from "react-router-dom";
import InformationForKey from './information-for-key/informationForKey';
import Footer from "./footer/footer";
import Navigation from "./navigation/navigation";

function App() {
  return (
    <StyledEngineProvider injectFirst>
        {/* <h1 className="text-red-500">Hello world!</h1> */}
          <Navigation />
          <HeaderPoster />
          <InformationTable />
          <InformationForKey />
          <Footer />
    </StyledEngineProvider>
  );
}

export default App;
