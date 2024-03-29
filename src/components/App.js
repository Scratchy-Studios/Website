import React from 'react';
import './App.scss'; // Import SCSS file

export default function App() {
  return (
    <div className="scratchy-studios">
      <header className="header">
        <h1 className="logo">Scratchy Studios</h1>
        <p className="tagline">Creating Engaging Scratch Games</p>
      </header>
      <main className="main">
        <section className="about">
          <h2>About Us</h2>
          <p>We are a passionate team of developers dedicated to crafting interactive and educational scratch games. We believe in the power of scratch programming to spark creativity, problem-solving skills, and a love for coding in children of all ages.</p>
        </section>
        <section className="games">
          <h2>Our Games</h2>
          <ul className="game-list">
            {/* Add list items for individual games here */}
            <li className="game-item">
              <a href="#">Catch Those Fruit! (Coming soon)</a>
            </li>
          </ul>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>Have an idea for a scratch game? Let's work together!</p>
          <ul className="contact-methods">
            <li className="contact-method"><a href="https://scratch.mit.edu/studios/34911516/comments">Scratch Studio</a></li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Scratchy Studios</p>
      </footer>
    </div>
  );
}
