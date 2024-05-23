import './App.css';
import Hero from "./Pages/Home/Hero";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUpForm from "./components/Registration/SignUpForm";
import OtpForm from "./components/Registration/OtpPage";

function App() {
  return (
      <>

          <section className="welcome-section" id="welcome-section">
              <div className="title">
                  <h1>Welcome to Alexandria Library!</h1>
                  <span>
                      The all-knowing library... You can get all your information here!</span>
              </div>
          </section>

          <BrowserRouter>
              <Routes>
                  <Route>
                      <Route element={<Hero/>} path={"/home"}/>
                      <Route element={<SignUpForm/>} path={"/signup"}/>
                      <Route element={<OtpForm/>} path={"/verify"}/>
                  </Route>
              </Routes>
          </BrowserRouter>

              <footer>
                  <p>&copy;2024 All rights reserved | This web app was created by
                      <a href="https://github.com/Orisakwe-Nwokocha" target="_blank" rel="noreferrer">
                          <span style={{color: "#28ae60"}}> Orisakwe Nwokocha</span></a>
                  </p>
              </footer>

      </>
);
}

export default App;
