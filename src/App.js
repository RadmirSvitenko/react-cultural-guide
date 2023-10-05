import Authorization from "components/Authentication/Authorization/Authorization";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/authorization" element={<Authorization />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
