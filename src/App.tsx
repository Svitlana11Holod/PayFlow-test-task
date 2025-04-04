import { BrowserRouter, Route, Routes } from "react-router";
// pages
import HomePage from "./pages/home/HomePage";
//styles
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
