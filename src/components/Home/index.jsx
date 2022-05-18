import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import label from "../locale/label.config";
import "./style.scss";

export default function Home() {
  return (
    <div className="home-container">
      <Header />

      <div className="content">
        <nav>
          <ul>
            <li>
              <Link to="/desserts-lab/add-item">{label.add_new}</Link>
            </li>

            <li>
              <Link to="/desserts-lab/list">{label.all_dessert}</Link>
            </li>

            <li>
              <Link to="/desserts-lab/chart">{label.chart}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
