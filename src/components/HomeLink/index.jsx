import React from "react";
import { Link } from "react-router-dom";
import label from "../locale/label.config";
import "./style.scss";

export default function HomeLink() {
  return (
    <div className="home-link-container">
      <Link to="/desserts-lab/">{label.back_to_home}</Link>
    </div>
  );
}
