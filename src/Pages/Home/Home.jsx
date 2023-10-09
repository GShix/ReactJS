import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <body>
    <div class="portfolio">
        <div class="navbar">
                <nav>DambarGM</nav>
                <ul>
                    <li><a href="/" class="active">Home</a></li>
                    <li><a href="projects.html" >Projects</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="/about">Contact</a></li>
                    <li><a href="DAMBAR-SING-GHARTI-CV.pdf" target="blank" >Download CV</a></li>
                </ul>
        </div>
        <div class="home">
            <img src="dambargm_img.png" alt="" />
            <div class="home-data">
                <h1>Future Developer∞</h1>
                <h2>Learning on 'How to render You'</h2>
                <a href="https://github.com/GShix " class="button" >GitHub Profile</a>
            </div>

        </div>
        
    </div>

</body>
  )
}

export default Home