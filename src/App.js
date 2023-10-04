import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MainLayouts from "./layouts/MainLayouts";
import { theme } from "./theme";
import { store } from "./store";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayouts />}>
                <Route path="/" />
                <Route path="/" />
                <Route path="/" />
                <Route path="/" />
                <Route path="/" />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
