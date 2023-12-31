import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
// import Carousel from "../components/Carousel";

export default function Home() {
  const [search, setsearch] = useState('')
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0], response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important", objectFit:"fill" }}
        >
          <div className="carousel-inner" id="carusel">
            <div class="carousel-caption d-none d-md-block" style={{zIndex:"10"}}>
              <div class="d-flex justify-content-center" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e)=>{setsearch(e.target.value)}}
                />
                {/* <button className="btn btn-outline-success" type="submit">
                  Search
                </button> */}
              </div>
            </div>
            <div className="carousel-item active" data-bs-interval="3000">
              <img
                src="https://source.unsplash.com/random/480x480/?burger"
                className="d-block w-100 img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="https://source.unsplash.com/random/480x480/?pizza"
                className="d-block w-100 img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="https://source.unsplash.com/random/480x480/?dumpling"
                className="d-block w-100 img-fluid"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {foodCat.length > 0 ? (
          foodCat.map((data) => (
            <div className="row mb-3">
              <div key={data._id} className="fs-3 m-3">
                {data.CategoryName}
              </div>
              <hr />
              {foodItem.length > 0 ? (
                foodItem
                  .filter((items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLocaleLowerCase())))
                  .map((filterItems) => (
                    <div
                      key={filterItems._id}
                      className="col-12 col-md-6 col-lg-3 m-4"
                    >
                      <Cards
                        foodItem={filterItems}
                        options={filterItems.options[0]}
                        
                      ></Cards>
                    </div>
                  ))
              ) : (
                <div>"-------------"</div>
              )}
            </div>
          ))
        ) : (
          <div>"-------------"</div>
        )}
      </div>

      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
