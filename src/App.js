import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page-1">
        <nav className="nav-container">
          <section className="nav-container2">
            <h1 className="nav-h1">Start Bootstrap</h1>
            <button className="nav-menu-btn">MENU <img className ="ham-menu" src="https://icon-library.net/images/menu-icon-white-png/menu-icon-white-png-27.jpg" alt="menu-button"/></button>
            <ul className="nav-links-container">
              <li className="nav-links">SERVICES</li>
              <li className="nav-links">PORTFOLIO</li>
              <li className="nav-links">ABOUT</li>
              <li className="nav-links">TEAM</li>
              <li className="nav-links">CONTACT</li>
            </ul>
          </section>
        </nav>
        <section className="welcome-section">
          <h2 className="welcome-msg">Welcome To Our Studio!</h2>
          <h1 className="welcome-msg2">IT'S NICE TO MEET YOU</h1>
          <a className="btn-first" href="services">Tell Me More</a>
        </section>
      </div>
      <div className="page-2">
        <section className="page-2-upperhalf">
          <h2>SERVICES</h2>
          <p>Lorem ipsum, dolor sit amet consectetur.</p>
        </section>
        <section className="">
          <div>
            <div>Logo</div>
            <h2>E-Commerce</h2>
            <p>Lorem ipsum dolor sit, amet consectetur<br/>
            adipisicing elit. Nemo fugit obcaecati<br/>
            doloribus iusto sed, pariatur nulla,<br/>
            autem facere dolor earum.</p>
          </div>
          <div>
            <div>Logo</div>
            <h2>Responsive Design</h2>
            <p>Lorem ipsum dolor sit, amet consectetur<br/>
            adipisicing elit. Nemo fugit obcaecati<br/>
            doloribus iusto sed, pariatur nulla,<br/>
            autem facere dolor earum.</p>
          </div>
          <div>
            <div>Logo</div>
            <h2>Web Security</h2>
            <p>Lorem ipsum dolor sit, amet consectetur<br/>
            adipisicing elit. Nemo fugit obcaecati<br/>
            doloribus iusto sed, pariatur nulla,<br/>
            autem facere dolor earum.</p>
          </div>
        </section>
      </div>
      
    </div>
  );
}

export default App;


