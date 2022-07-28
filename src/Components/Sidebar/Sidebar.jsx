import React from "react";
import { Link, useLocation } from "react-router-dom";
const Sidebar = ({ active }) => {
  const location = useLocation();
  return (
    <>
      <div className="dlabnav">
        <div className="dlabnav-scroll">
          <ul className="metismenu" id="menu">
            <li className={active == "dashboard" ? "mm-active" : ""}>
              <Link to="dashboard" aria-expanded="false">
                <i className="bi bi-grid"></i>
                <span className="nav-text">داشبورد</span>
              </Link>
            </li>
            <li>
              <Link to="tpo" aria-expanded="false">
                <i
                  className="fa fa-graduation-cap"
                  style={{ marginBottom: "10px" }}
                ></i>
                <span className="nav-text">TPO</span>
              </Link>
            </li>
            <li>
              <Link to="zhenti" aria-expanded="false">
                <i
                  className="fa fa-graduation-cap"
                  style={{ marginBottom: "10px" }}
                ></i>
                <span className="nav-text">ZHENTI</span>
              </Link>
            </li>
            <li>
              <Link to="dashboard" aria-expanded="false">
                <i
                  className="flaticon-381-success-1"
                  style={{ marginBottom: "10px" }}
                ></i>
                <span className="nav-text">آزمون آزمایشی</span>
              </Link>
            </li>
            <li className={active == "leitner" ? "mm-active" : ""}>
              <Link to="leitner" aria-expanded="false">
                <i className="fa fa-check" style={{ marginBottom: "10px" }}></i>
                <span className="nav-text">مرور کلمات لایتنر</span>
              </Link>
            </li>
            <li>
              <Link to="dashboard" aria-expanded="false">
                <i className="fa fa-check" style={{ marginBottom: "10px" }}></i>
                <span className="nav-text">مرور کلمات تیک 8</span>
              </Link>
            </li>
            <li>
              <Link to="dashboard" aria-expanded="false">
                <i className=" bi bi-book"></i>
                <span className="nav-text">لیست کلمات</span>
              </Link>
            </li>
            <li>
              <Link to="dashboard" aria-expanded="false">
                <i className="fa fa-plus-circle"></i>
                <span className="nav-text">افزودن کلمات</span>
              </Link>
            </li>
            <li>
              <Link to="dashboard" aria-expanded="false">
                <i className="fas fa-shopping-cart"></i>
                <span className="nav-text">اشتراک ها</span>
              </Link>
            </li>
            <li>
              <Link to="dashboard" aria-expanded="false">
                <i className="flaticon-381-help"></i>
                <span className="nav-text">پشتیبانی</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
