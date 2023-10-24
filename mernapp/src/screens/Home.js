import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";

export default function Home() {
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
        <Carousel />
      </div>
      <div className="container">
        {foodCat.length > 0 ? (
          foodCat.map((data) => (
            <div className="row mb-3">
            
              <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
              <hr />
              {foodItem.length > 0 ? (
                foodItem
                  .filter((items) => items.CategoryName === data.CategoryName)
                  .map((filterItems) => (
                    <div key={filterItems._id} className="col-12 col-md-6 col-lg-3 m-4">
                      <Cards 
                       foodName={filterItems.name}
                       options={filterItems.options}
                       imgSrc={filterItems.img}
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
