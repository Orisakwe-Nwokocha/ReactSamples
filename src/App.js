import './App.css';
import Hero from "./Pages/Home/Hero";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route element={<Hero/>} path={"/home"}/>
                </Route>
            </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
