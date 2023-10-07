import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayouts />}>
            <Route path="/" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
