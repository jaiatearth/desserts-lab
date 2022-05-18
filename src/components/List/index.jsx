import React, { useState, useEffect } from "react";
import Header from "../Header";
import label from "../locale/label.config";
import "./style.scss";
import HomeLink from "../HomeLink";
import m1 from "../../images/1.png";
import m2 from "../../images/2.png";
import m3 from "../../images/3.png";
import m4 from "../../images/4.png";
import m5 from "../../images/5.png";
import m6 from "../../images/6.png";
import m7 from "../../images/7.png";
import { Link } from "react-router-dom";

const List = () => {
  const [dessertItems, setDessertItems] = useState([]);
  const images = [m1, m2, m3, m4, m5, m6, m7];

  useEffect(() => {
    let currentItems = JSON.parse(localStorage.getItem("items"));
    currentItems && setDessertItems(currentItems);
  }, []);

  const removeItem = (id) => {
    const currentElement = document.getElementById(id);
    if (currentElement) {
      document.getElementById(id).style.display = "none";
    }
    const filtered = dessertItems.filter((item) => item.id !== id);
    localStorage.setItem("items", JSON.stringify(filtered));
  };

  return (
    <div className="list-container">
      <Header />
      <HomeLink />
      <div className="content">
        <div className="widget">
          <div className="widget__title">{label.all_desserts_label}</div>
          <div className="widget__content">
            {dessertItems.length === 0 && (
              <Link to="/desserts-lab/add-item">{label.info_empty_item}</Link>
            )}
            {dessertItems &&
              dessertItems.map((item) => (
                <div className="widget__content-row" id={item.id}>
                  <div className="img">
                    <img
                      src={images[Math.floor(Math.random() * 6) + 1]}
                      alt="dessert"
                    />
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="price">{item.price}</div>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
