import './App.css';
import Hero from "./Pages/Home/Hero";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUpForm from "./Pages/Registration/SignUpForm";
import LoginForm from "./Pages/LoginForm/login";
import OtpForm from "./Pages/Registration/OtpForm";

function App() {
  return (
      <>
          {/*<section className="welcome-section" id="welcome-section">*/}
          {/*    <div className="title">*/}
          {/*        <h1>Welcome to Alexandria Library!</h1>*/}
          {/*        <span>*/}
          {/*            The all-knowing library... You can get all your information here!</span>*/}
          {/*    </div>*/}
          {/*</section>*/}

          <BrowserRouter>
              <Routes>
                  <Route>
                      <Route element={<Hero/>} path={"/home"}/>
                      <Route element={<SignUpForm/>} path={"/signup"}/>
                      <Route element={<LoginForm/>} path={"/login"}/>
                      <Route element={<OtpForm/>} path={"/authenticate"}/>
                  </Route>
              </Routes>
          </BrowserRouter>

          {/*<div>*/}
          {/*    <iframe width="480" height="270" src="https://www.youtube.com/embed/AqzW1nC7n7Q" title="Meet the Elites"*/}
          {/*            frameBorder="0"*/}
          {/*            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
          {/*            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>*/}
          {/*</div>*/}

          {/*<footer>*/}
          {/*    <p>&copy;2024 All rights reserved | This web app was created by*/}
          {/*        <a href="https://github.com/Orisakwe-Nwokocha" target="_blank" rel="noreferrer">*/}
          {/*            <span style={{color: "#28ae60"}}> Orisakwe Nwokocha</span></a>*/}
          {/*    </p>*/}
          {/*</footer>*/}

      </>
  );
}

export default App;
