import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    ham: "closed"
  }

  handleOpen = (e) => {
    if (this.state.ham === "closed") {
      this.setState({ham: "opened"});
    } else {
      this.setState({ham: "closed"})
    }
  }

  render() {
    return (
      <div className="App">
      <div className="page-1">
        <nav className="nav-container">
          <section className="nav-container2">
            <h1 className="nav-h1">Start Bootstrap</h1>
            <div className="ham-menu-cont">

            <button className="nav-menu-btn" onClick={this.handleOpen}>
                    MENU 
                    <img className ="ham-menu"
                    src="https://icon-library.net/images/menu-icon-white-png/menu-icon-white-png-27.jpg"
                    alt="menu-button"
                    />
            </button>
        <div id="ham" className={this.state.ham}>
          <ul className="menu">
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
          </ul>
        </div>
            </div>
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
          <h2 className="page-2-h2">SERVICES</h2>
          <p className="page-2-p">Lorem ipsum, dolor sit amet consectetur.</p>
        </section>
        <section className="page-2-lowerhalf">
          <div className="page-2-items">
            <div>Logo</div>
            <h2 className="page-2-item-h2">E-Commerce</h2>
            <p className="page-2-p">Lorem ipsum dolor sit, amet consectetur<br/>
            adipisicing elit. Nemo fugit obcaecati<br/>
            doloribus iusto sed, pariatur nulla,<br/>
            autem facere dolor earum.</p>
          </div>
          <div className="page-2-items">
            <div>Logo</div>
            <h2 className="page-2-item-h2">Responsive Design</h2>
            <p className="page-2-p">Lorem ipsum dolor sit, amet consectetur<br/>
            adipisicing elit. Nemo fugit obcaecati<br/>
            doloribus iusto sed, pariatur nulla,<br/>
            autem facere dolor earum.</p>
          </div>
          <div className="page-2-items">
            <div>Logo</div>
            <h2 className="page-2-item-h2">Web Security</h2>
            <p className="page-2-p">Lorem ipsum dolor sit, amet consectetur<br/>
            adipisicing elit. Nemo fugit obcaecati<br/>
            doloribus iusto sed, pariatur nulla,<br/>
            autem facere dolor earum.</p>
          </div>
        </section>
      </div>
      
    </div>
  );
}
}

export default App;


