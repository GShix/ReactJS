import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <body>
    <header>
        <h1>DambarGM</h1>
        <nav>
            <ul>
                <li><a href="about">About</a></li>
                <li><a href="portfolio">Portfolio</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <div id="content">
        <div id="about" class="section">
            <h2>About Me</h2>
            <p>This is a brief description of yourself.</p>
        </div>

        <div id="portfolio" class="section">
            <h2>Portfolio</h2>
            {/* <!-- Add your portfolio projects here --> */}
        </div>

        <div id="contact" class="section">
            <h2>Contact Me</h2>
            <p>Email: your@email.com</p>
            <p>Phone: (123) 456-7890</p>
        </div>
    </div>

    <footer>
        <p>&copy; 2023 DambarGM</p>
    </footer>
</body>
  )
}

export default Home