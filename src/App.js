import './App.css';
import Hero from "./Pages/Home/Hero";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <>
          <body>
          <nav className="nav" id="navbar">
              <ul className="nav-list">
                  <li><a href="#welcome-section">About</a></li>
                  <li><a href="#requests">Signup</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </nav>
          <section className="welcome-section" id="welcome-section">
              <div className="text-wrapper">
                  <h1>Welcome to Alexandria Library!</h1>
                  <span className="title1">The all-knowing library</span>
                  <span className="title2">...You can get all your information here!...</span>
              </div>
          </section>
          <section className="projects-section" id="requests">
              <section id="registerSection" className="container">
                  <BrowserRouter>
                      <Routes>
                          <Route>
                              <Route element={<Hero/>} path={"/home"}/>
                          </Route>
                      </Routes>
                </BrowserRouter>
              </section>
          </section>
              <section className="contact-section" id="contact">
                  <div className="contact-section-header">
                      <h2>Hit me up!</h2>
                      <p>- I don't bite... maybe -</p>
                  </div>
                  <div className="contact-links">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="#" className="btn contact-details"><i
                          className="fab fa-facebook-square"></i> Facebook</a>
                      <a id="profile-link" href="https://github.com/Orisakwe-Nwokocha" target="_blank"
                         className="btn contact-details" rel="noreferrer"><i className="fab fa-github"></i> GitHub</a>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="#" className="btn contact-details"><i className="fab fa-twitter"></i> Twitter</a>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="#" className="btn contact-details"><i className="fas fa-envelope"></i> Email</a>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="#" className="btn contact-details"><i className="fas fa-mobile-alt"></i> Call me</a>
                  </div>
              </section>
              <footer>
                  <p>&copy;2024 All rights reserved | This web app was created by
                      <a href="https://github.com/Orisakwe-Nwokocha" target="_blank" rel="noreferrer">
                          <span style={{color: "#28ae60"}}> Orisakwe Nwokocha</span></a>
                  </p>
              </footer>
          </body>
      </>
);
}

export default App;
