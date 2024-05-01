import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="a_header_top"></div>
        <div className="a_header_bottom"></div>
      </header>
      <div className="a_main position-relative">
        <div className="a_main1">
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./images/slider/1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./images/slider/2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./images/slider/3.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./images/slider/4.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./images/slider/5.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./images/slider/6.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./images/slider/7.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./images/slider/8.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev h-50" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next h-50" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
        {/* <div className="a_main2 w-100 position-absolute top-2"></div> */}
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
