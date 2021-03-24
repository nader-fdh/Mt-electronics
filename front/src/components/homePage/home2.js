import React from "react";
import "./styleHome2.css";

const HomePageTest = () => {
  return (
    <div>
      <div class="slider-area ">
        <div class="slider-active">
          <div
            class="single-slider  hero-overly slider-height d-flex align-items-center"
            data-background="assets/img/hero/h1_hero.jpg"
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-11">
                  <div class="hero__caption">
                    <div class="hero-text1">
                      <span data-animation="fadeInUp" data-delay=".3s">
                        La technologie est notre passion{" "}
                      </span>
                    </div>
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      Best-Building
                    </h1>
                    <div
                      class="stock-text"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                    >
                      <h2>Solution</h2>
                      <h2>Solution</h2>
                    </div>
                    <div
                      class="hero-text2 mt-110"
                      data-animation="fadeInUp"
                      data-delay=".9s"
                    >
                      <span>
                        <a href="services.html">Specialiste de l'impecable </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="single-slider  hero-overly slider-height d-flex align-items-center">
            <div class="container">
              <div class="row">
                <div class="col-lg-11">
                  <div class="hero__caption">
                    <div class="hero-text1">
                      <span data-animation="fadeInUp" data-delay=".3s">
                        hand car wash and detailing service
                      </span>
                    </div>
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      Best-Building
                    </h1>
                    <div
                      class="stock-text"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                    >
                      <h2>Solution</h2>
                      <h2>Solution</h2>
                    </div>
                    <div
                      class="hero-text2 mt-110"
                      data-animation="fadeInUp"
                      data-delay=".9s"
                    >
                      <span>
                        <a href="services.html">Our Services</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* <!----->
<!----->
        <!------------------> */}
      <section class="project-area  section-padding30">
        <div class="container">
          <div class="project-heading mb-35">
            <div class="row align-items-end">
              <div class="col-lg-6">
                <div class="section-tittle section-tittle3">
                  <div class="front-text">
                    <h2 class="">Nos PRODUITS</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="tab-content active" id="nav-tabContent">
                <div
                  class="tab-pane fade active show"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div class="project-caption">
                    <div class="row">
                      <div class="col-lg-4 col-md-6">
                        <div class="single-project mb-30">
                          <div class="project-img">
                            <img
                              src="https://images.unsplash.com/photo-1526724663981-439e8b32ed6e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                              style={{ maxHeight: "400px", minHeight: "400px" }}
                            />
                          </div>
                          <div class="project-cap">
                            <a href="" class="plus-btn">
                              <form method="POST" id=""></form>
                              <i class="ti-plus"></i>
                            </a>
                            <h4>hello</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Services Area Start --> */}
      <div class="services-area1 section-padding30">
        <div class="container">
          {/* <!-- section tittle --> */}
          <div class="row">
            <div class="col-lg-12">
              <div class="section-tittle mb-55">
                <div class="front-text">
                  <h2 class="">Nos Services</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6 brd-orange ">
              <div class="single-service-cap mb-30">
                <div class="service-cap">
                  <h4>
                    <a>FABRICATION DE MACHINES</a>
                  </h4>
                </div>
                <div class="service-img">
                  <img src="" alt="" />
                </div>
                <p>
                  Le cœur de notre métier est la conception et la réalisation de
                  machines spéciales. A partir d'un besoin défini ou d'un cahier
                  des charges nous vous apportons des solutions techniquement et
                  budgétairement optimales à vos besoins industriel .
                </p>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-6 brd-orange">
              <div class="single-service-cap mb-30">
                <div class="service-cap">
                  <h4>
                    <a>CONSTRUCTION MÉTALLIQUE</a>
                  </h4>
                </div>
                <div class="service-img">
                  <img src="" alt="" />
                </div>
                <p>
                  Nos connaissances dans la mécanique nous permets de bien gérer
                  des affaire en mécano-soudure, la tôlerie, l’usinage des
                  pièces mécaniques.
                </p>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-6 brd-orange">
              <div class="single-service-cap mb-30">
                <div class="service-cap">
                  <h4>
                    <a>MAINTENANCE INDUSTRIEL ET AUTOMATISME</a>
                  </h4>
                </div>
                <div class="service-img">
                  <img src="" alt="" />
                </div>
                L’équipe de Best Building Solution maitrise le process de
                conception, de réalisation et la maintenance d’un système
                industriel automatisé.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services Area End -->
<!--latest Nnews Area start --> */}
      {/* <div class="latest-news-area section-padding30">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
            
              <div class="section-tittle section-tittle7 mb-50">
                <div class="front-text">
                  <h2 class="">ACTUALITES</h2>
                </div>
                <span class="back-text">Our Blog</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6">
             
              <div class="single-news mb-30">
                <div class="news-img">
                  <img src="" alt="" />
                  <div class="news-date text-center">
                    <span>12</span>
                    <p>Jan</p>
                  </div>
                </div>
                <div class="news-caption">
                  <ul class="david-info">
                    <li>
                      <h1>AGROMED</h1>
                    </li>
                  </ul>
                  <h2>
                    <a>
                      Participation au foire international de l’agroalimentaire
                      de sousse" AgroMed 2016"
                    </a>
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
            
              <div class="single-news mb-30">
                <div class="news-img">
                  <img src="" alt="" />
                  <div class="news-date text-center">
                    <span>16</span>
                    <p>Nov</p>
                  </div>
                </div>
                <div class="news-caption">
                  <ul class="david-info">
                    <li>
                      <h1>PACK PRINT TUNISIA 2017</h1>
                    </li>
                  </ul>
                  <h2>
                    <a>
                      Salon international d'emballage et de l'imprimerie au parc
                      des expositions du KRAM
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePageTest;
