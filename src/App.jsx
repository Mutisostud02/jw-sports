import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Routes, Route, Link } from "react-router-dom";
import Athletes from "./pages/Athletes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AthleteDetail from "./pages/AthleteDetail";

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="logo" to="/">
            <img src="/logo/android-chrome-192x192.png" alt="JW Sport Management Logo" className="logo-img" />
            <span className="logo-text">JW Sport Management</span>
          </Link>
          <input
            id="nav-toggle"
            type="checkbox"
            className="nav-toggle"
            aria-label="Toggle navigation"
          />
          <nav className="main-nav" aria-label="Primary">
            <ul>
              <li>
                <Link to="/">Start</Link>
              </li>
              <li>
                <Link to="/athletes">Athletes</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <label className="hamburger" htmlFor="nav-toggle" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <section id="start" className="hero">
                <div className="container">
                  <h1 className="visually-hidden">JW Sport management</h1>
                  <div className="hero-carousel">
                    <Swiper
                      modules={[Autoplay, Navigation, Pagination]}
                      spaceBetween={0}
                      slidesPerView={1}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      loop={true}
                    >
                      <SwiperSlide>
                        <article className="hero-slide hero-bg hero-bg-1">
                          <div className="hero-overlay">
                            <h2>Armand “Mondo” Duplantis</h2>
                            <p>Pole vault</p>
                          </div>
                        </article>
                      </SwiperSlide>
                      <SwiperSlide>
                        <article className="hero-slide hero-bg hero-bg-2">
                          <div className="hero-overlay">
                            <h2>Sarah Sjöström</h2>
                            <p>SWIMMING</p>
                          </div>
                        </article>
                      </SwiperSlide>
                      <SwiperSlide>
                        <article className="hero-slide hero-bg hero-bg-3">
                          <div className="hero-overlay">
                            <h2>Jakob Ingebrigtsen</h2>
                            <p>1500m / 3000m / 5000m</p>
                          </div>
                        </article>
                      </SwiperSlide>
                      <SwiperSlide>
                        <article className="hero-slide hero-bg hero-bg-4">
                          <div className="hero-overlay">
                            <h2>Nicola Olyslagers</h2>
                            <p>High jump</p>
                          </div>
                        </article>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </section>

              <section id="athletes" className="athletes">
                <div className="container">
                  <div className="athletes-grid">
                    <Link
                      to="/athletes/armand-mondo-duplantis"
                      className="athlete-card--row"
                    >
                      <div className="athlete-media">
                        <img
                          src="/athletes/armand-mondo-duplantis.jpg"
                          alt="Armand Mondo Duplantis"
                          onError={(e) => {
                            e.target.src = "/athletes/placeholder.jpg";
                          }}
                        />
                      </div>
                      <div className="athlete-info">
                        <div className="athlete-flag">🇺🇸</div>
                        <h2>Armand "Mondo" Duplantis</h2>
                        <p className="athlete-discipline">Pole vault</p>
                      </div>
                    </Link>

                    <Link
                      to="/athletes/sarah-sjostrom"
                      className="athlete-card--row"
                    >
                      <div className="athlete-media">
                        <img
                          src="/athletes/sarah-sjostrom.jpg"
                          alt="Sarah Sjöström"
                          onError={(e) => {
                            e.target.src = "/athletes/placeholder.jpg";
                          }}
                        />
                      </div>
                      <div className="athlete-info">
                        <div className="athlete-flag">🇸🇪</div>
                        <h2>Sarah Sjöström</h2>
                        <p className="athlete-discipline">SWIMMING</p>
                      </div>
                    </Link>

                    <Link
                      to="/athletes/jakob-ingebrigtsen"
                      className="athlete-card--row"
                    >
                      <div className="athlete-media">
                        <img
                          src="/athletes/jakob-ingebrigtsen.jpg"
                          alt="Jakob Ingebrigtsen"
                          onError={(e) => {
                            e.target.src = "/athletes/placeholder.jpg";
                          }}
                        />
                      </div>
                      <div className="athlete-info">
                        <div className="athlete-flag">🇳🇴</div>
                        <h2>Jakob Ingebrigtsen</h2>
                        <p className="athlete-discipline">
                          1500m / 3000m / 5000m
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/athletes/sandra-elkasevic"
                      className="athlete-card--row"
                    >
                      <div className="athlete-media">
                        <img
                          src="/athletes/sandra-elkasevic.jpg"
                          alt="Sandra Elkasević"
                          onError={(e) => {
                            e.target.src = "/athletes/placeholder.jpg";
                          }}
                        />
                      </div>
                      <div className="athlete-info">
                        <div className="athlete-flag">🇭🇷</div>
                        <h2>Sandra Elkasević</h2>
                        <p className="athlete-discipline">Discus throw</p>
                      </div>
                    </Link>
                  </div>
                  <div className="actions">
                    <Link className="button" to="/athletes">
                      ALL ATHLETES
                    </Link>
                  </div>
                </div>
              </section>

              <section id="contact" className="contact">
                <div className="container">
                  <h2>Contact</h2>
                  <div className="contact-grid">
                    <div>
                      <h3>JW Sport management</h3>
                    </div>
                  </div>
                </div>
              </section>

              <section className="image-cards">
                <div className="container">
                  <div className="cards-grid">
                    <div className="director-card">
                      <div className="director-media">
                        <img
                          src="/jwdirector.jpg"
                          alt="JW Sport Management Director"
                        />
                      </div>
                      <div className="card-content">
                        <h3>Robert Hafredal</h3>
                        <p>Chief Executive Officer</p>
                        <p>
                          <a href="tel:+46406118688">+46 406 118 688</a>
                        </p>
                        <p>
                          <a href="mailto:info@jwsportmanagement.com">
                            info@jwsportmanagement.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="arena-card">
                      <img src="/arena.jpg" alt="JW Sport Arena" />
                      <div className="card-content">
                        <h3>JW Sport Arena</h3>
                        <p>State-of-the-art training facility</p>
                        <p>Professional equipment and coaching</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          }
        />
        <Route path="/athletes" element={<Athletes />} />
        <Route path="/athletes/:slug" element={<AthleteDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-address">
            <p>JW Sport management</p>
            <p>+46 406 118 688</p>
            <p>CEO - Robert Hafredal</p>
            <p>info@jwsportmanagement.com</p>
          </div>
          <p className="footer-copy">© Copyright 2023. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
