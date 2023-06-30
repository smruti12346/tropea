import React from "react";
import "./HomeBanner.css";
import { Link } from "react-router-dom";
const HomeBanner = () => {
  return (
    <>
      <div className="section">
        <div className="banner">
          <div className="banner-layer">
            <div className="innerContent">
              <h3 className="banner-c__title component__title banner-text__title--large text-center text-white">
                Supporting Spinal Health.
              </h3>
              <div className="tc-divider"></div>
              <p
                className="banner-c__subtitle component__subtitle banner-text__subtitle--medium text-center text-white"
                style={{ paddingBottom: "30px", paddingTop: "30px" }}
              >
                You've only got one spine. Take great care of it with supportive
                chiropractic care.
              </p>
              <div className="w-100 banner-c__button component__button text-center">
                <Link
                  className="cta__button component__button--1 banner_btn"
                  to="appointment-request"
                  style={{ display: "inline-block" }}
                >
                  Request Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
