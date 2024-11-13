import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <h1>GameStore</h1>
          <div className="nav-links">
            <button className="nav-button">Login</button>
            <button className="nav-button">Register</button>
          </div>
        </nav>
        <div className="header-content">
          <h2>Welcome to GameStore</h2>
          <p>Your one-stop shop for the best games!</p>
        </div>
      </header>

      <main className="App-main">
        <section className="featured-section">
          <h2>Hot Games!</h2>
          <div className="featured-games">
            <div className="game-card">
              <img src="roblox.jpg" alt="" className="game-image"/>
              <h3>Roblox</h3>
              <p>A creative platform that allows players to build their own virtual worlds</p>
            </div>
            <div className="game-card">
              <img src="minecraft.jpg" alt="" className="game-image"/>
              <h3>Minecraft</h3>
              <p>An iconic sandbox game that lets players explore a randomly generated</p>
            </div>
            <div className="game-card">
              <img src="skrim.png" alt="" className="game-image"/>
              <h3>Skyrim</h3>
              <p>An action RPG set in an open fantasy world with an epic storyline</p>
            </div>
          </div>
        </section>

        <section className="latest-games-section">
          <h2>Latest Releases</h2>
          <div className="latest-games">
            <div className="game-card">
              <img src="gt.jpg" alt="" className="game-image"/>
              <h3>Growtopia</h3>
              <p>A 2D sandbox platformer that allows players to create and explore worlds</p>
            </div>
            <div className="game-card">
              <img src="dot4.jpg" alt="" className="game-image"/>
              <h3>Dota 2</h3>
              <p>A popular online multiplayer strategy game in the MOBA "Multiplayer Online Battle Arena" genre</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>© 2023 GameStore. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/support">Support</a>
        </div>
        <p>
          GameStore is your trusted destination for a wide range of games from various genres,
          providing top-quality gaming experiences. Whether you enjoy action, adventure, RPGs, or
          puzzle games, we have something for every player. Our dedicated support team is here to
          help you with any questions, ensuring an enjoyable experience every time.
        </p>
      </footer>
    </div>
  );
}

export default App;
