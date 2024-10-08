import React from 'react';

function Home() {
  return (
    <section id="inicio">
      <h1>
        I´m <span>Ángelo Palma</span>, Wed Developer<br />
        <span className="highlight">looking for a new experience</span>
      </h1>
      <div className="contact-icons">
        <a href="https://github.com/apalma2022125" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" /></a>
        <a href="https://www.linkedin.com/in/angelo-palma2005" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /></a>
      </div>
    </section>
  );
}

export default Home;
