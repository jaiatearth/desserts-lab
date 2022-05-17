import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import label from "../locale/label.config";

export default function Header() {
  return (
    <div className="header">
      <Link to="/desserts-lab/">
        <div className="header__icon">
          <span className="desserts-lab-icon"></span>
        </div>
      </Link>
      <div className="header__info">
        <span className="label">{label.desserts_lab}</span>
      </div>
    </div>
  );
}
