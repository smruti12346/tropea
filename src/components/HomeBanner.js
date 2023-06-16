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
              <h3 class="banner-c__title component__title banner-text__title--large text-center text-white">
                Supporting Spinal Health.
              </h3>
              <div class="tc-divider"></div>
              <p
                class="banner-c__subtitle component__subtitle banner-text__subtitle--medium text-center text-white"
                style={{ paddingBottom: "30px", paddingTop: "30px" }}
              >
                You've only got one spine. Take great care of it with supportive
                chiropractic care.
              </p>
              <div class="w-100 banner-c__button component__button text-center">
                <Link
                  class="cta__button component__button--1 banner_btn"
                  to="appointment-request"
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
