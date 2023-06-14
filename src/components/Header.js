import React, { useState, useEffect } from "react";
import "./Header.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Divider from "@mui/material/Divider";
import { api_url } from "../Auth";
import axios, { Axios } from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { img_url } from "../Auth";
const pages = [
  { name: "About Us", id: 16, slug: "about-us" },
  { name: "Chiropractic Services", id: "16", slug: "chiropractic-care" },
  { name: "Auto Accident Treatment", id: 16, slug: "auto-accident-treatment" },
  { name: "New Patient Center", id: 16, slug: "new-patient-center" },
  { name: "Resources", id: 16, slug: "new-patient-center" },
  { name: "Contact", id: 16, slug: "contact" },
  { name: "3D Spine Simulator", id: 17, slug: "3d-spine-simulator" },
];
const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [deta, setDeta] = useState([{ title: "", url: "", child: "" }]);
  const [isLoading, setIsLoading] = useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    event.currentTarget.className =
      "navigation__item navigation__item--default has-drop-down";
    //setAnchorEl(null);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleNavMenuOpen = (slug) => {
    setAnchorElNav(null);
    navigate(`/${slug}`, {
      state: {
        slug: slug,
      },
    });
  };

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleMouse = (event) => {
    event.currentTarget.className += " navigation-open";
  };

  useEffect(() => {
    axios.get(`${api_url}/menu`).then((data) => {
      let newData = data.data;
      let obj_data = newData.map((deta) => {
        if (deta.menu_item_parent == 0) {
          let filt = newData.filter((dt) => {
            return deta.db_id == dt.menu_item_parent;
          });
          // if (filt.menu_item_parent == 0){

          // }else{

          // }
          return { title: deta.title, url: deta.url, child: filt };
        } else {
          return { title: deta.title, url: deta.url, clild: false };
        }
      });
      setDeta(obj_data);
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              style={{
                backgroundColor: "rgb(103, 21, 171)",
                position: "sticky",
                top: "0px",
                left: "0px",
                width: "100%",
              }}
            />
          </Box>
        </Box>
      ) : (
        ""
      )}

      <div
        className="section-base-container ple-hide-for-mobile"
        data-section-id="id_3108e6d0-f41f-5166-9b03-d9ae29055df4"
        style={{
          maxHeight: "99999px",
          opacity: 1,
          zIndex: 103,
          top: "0px",
          width: "100%",
          position: "sticky",
          transition: "opacity 0.3s linear 0s",
        }}
      >
        <div className="section-overlap-container"></div>
        <div
          id="id_3108e6d0-f41f-5166-9b03-d9ae29055df4"
          data-control="section"
          className="section section__bg--light-1 d-none d-sm-none d-md-block   forms--fullwidth forms-option--a section-editable section-logo section-editable"
        >
          <div className="section--inner container-fluid section--light  ">
            <div className="row equal">
              <div className="col-lg-4 section__column-1 col-sm-12 ple-module-justify-center align-self-center alias-fixed_phone">
                <div className="fixed_phone__container editable__container ">
                  <div
                    className="ple-column--single ple-module-container fixed_phone__container--inner editable__container--inner"
                    data-component-name="fixed_phone"
                    data-component-alias="fixed_phone"
                  >
                    <p>
                      <a
                        href="tel:(408) 329-9604"
                        className="piwik_ignore"
                      >
                        <span
                          className="phone__number"
                          src={`${img_url}/`}
                        >
                          (408) 329-9604
                        </span>
                        <br />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 section__column-2 col-sm-12 ple-module-justify-center alias-logo_header_sticky">
                <div className="componentWith__container logo__container ">
                  <div
                    className="ple-column--single ple-module-container logo_header_sticky__container--inner logo__container--inner"
                    data-component-name="logo_header_sticky"
                    data-component-alias="logo_header_sticky"
                    data-widget-alias="SMB__Logo__Widgets__LogoSettings___logo_header_sticky"
                    data-widget-id-base="LogoSettings-SMB__Logo__Widgets__LogoSettings___logo_header_sticky"
                    data-component-prop-colData=""
                    data-component-prop-componentWith="4"
                  >
                    <div className="logo ">
                      <div className="logo-a logo-a--4 logo-a__horizontal__left">
                        <Link
                          to="/"
                          className="logo-a__image-link"
                          style={{ cursor: "pointer" }}
                        >
                          <div className="logo-a__image">
                            <img
                              src="https://cdcssl.ibsrv.net/ibimg/smb/500x94_80/webmgr/1n/7/p/images/640650b70dfbf_SandboxLogo.png.webp"
                              className="logo-a__img"
                              style={{ height: "94px", width: "500px" }}
                              alt="Tropea Chiropractic Inc​"
                              title=""
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 section__column-3 col-sm-12 ple-module-justify-center align-self-center alias-address">
                <div className="address__container editable__container ">
                  <div
                    className="ple-column--single ple-module-container address__container--inner editable__container--inner"
                    data-component-name="address"
                    data-component-alias="address"
                  >
                    <p>
                      260 S Sunnyvale Ave #2
                      <br />
                      Sunnyvale, CA 94086, US
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="id_0718f26b-d7ad-51f5-827a-8ac089ea5565"
        data-control="section"
        className="section section__bg--dark-1 ple_module_sticky forms--fullwidth forms-option--a section-navigation"
        style={{
          maxHeight: "99999px",
          opacity: 1,
          zIndex: 105,
          top: "90px",
          width: "100%",
          position: "sticky",
          transition: "opacity 0.3s linear 0s",
        }}
      >
        <div className="section--inner container section--dark ">
          <div className="row equal">
            <div className="col-lg-12 section__column-1 col-sm-12 ple-module-justify-center alias-navigation_header">
              <div className="componentWith__container navigation__container ">
                <div className="ple-column--single ple-module-container navigation_header__container--inner navigation__container--inner">
                  <div
                    id="navigation_header"
                    className="navigation component"
                  >
                    <nav
                      className="navigation-a navigation-a--12"
                      id="ple-navigation-navigation_header"
                    >
                      <ul className="navigation__list navigation__list--head more_nav">
                        <li
                          className={`navigation__item navigation__item--default has-drop-down`}
                          onMouseOver={handleMouse}
                          onMouseLeave={handleClose}
                        >
                          <Link
                            to="/about-us"
                            className="navigation__item--link"
                          >
                            About Us
                          </Link>
                          <ul className="navigation__list navigation__list--sub">
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="meet-the-doctor"
                                className="navigation__item--link"
                              >
                                Meet the Doctor
                              </Link>
                            </li>
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="testimonial"
                                className="navigation__item--link"
                              >
                                Testimonials
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li
                          className="navigation__item navigation__item--default has-drop-down"
                          onMouseOver={handleMouse}
                          onMouseLeave={handleClose}
                        >
                          <a
                            href="javascript:void(0)"
                            className="navigation__item--link"
                          >
                            Chiropractic Services
                          </a>
                          <ul className="navigation__list navigation__list--sub">
                            <li
                              className="navigation__item navigation__item--default has-drop-down"
                              onMouseOver={handleMouse}
                              onMouseLeave={handleClose}
                            >
                              <Link
                                to="back-pain"
                                className="navigation__item--link"
                              >
                                Back Pain
                              </Link>
                              <ul className="navigation__list navigation__list--sub">
                                <li className="navigation__item navigation__item--default ">
                                  <Link
                                    to="back-pain-faqs"
                                    className="navigation__item--link"
                                  >
                                    Back Pain FAQs
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="chiropractic-care"
                                className="navigation__item--link"
                              >
                                Chiropractic Care
                              </Link>
                            </li>
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="common-airbag-and-seatbelt-injuries"
                                className="navigation__item--link"
                              >
                                Common Airbag and Seatbelt Injury
                              </Link>
                            </li>
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="concussions"
                                className="navigation__item--link"
                              >
                                Concussions
                              </Link>
                            </li>
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="headaches"
                                className="navigation__item--link"
                              >
                                Headaches
                              </Link>
                            </li>
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="headaches-after-a-car-accident"
                                className="navigation__item--link"
                              >
                                Headaches After a Car Accident
                              </Link>
                            </li>
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="herniated"
                                className="navigation__item--link"
                              >
                                Herniated Discs
                              </Link>
                            </li>
                            <li
                              className="navigation__item navigation__item--default has-drop-down "
                              onMouseOver={handleMouse}
                              onMouseLeave={handleClose}
                            >
                              <Link
                                to="knee-pain"
                                className="navigation__item--link"
                              >
                                Knee Pain
                              </Link>
                              <ul className="navigation__list navigation__list--sub">
                                <li className="navigation__item navigation__item--default ">
                                  <Link
                                    to="knee-pain-faqs"
                                    className="navigation__item--link"
                                  >
                                    Knee Pain FAQs
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="lifestyle-and-nutritional-advice/"
                                className="navigation__item--link"
                              >
                                Lifestyle &amp; Nutritional Advice
                              </Link>
                            </li>
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="lower-back-pain"
                                className="navigation__item--link"
                              >
                                Lower Back Pain
                              </Link>
                            </li>
                            <li
                              className="navigation__item navigation__item--default has-drop-down "
                              onMouseOver={handleMouse}
                              onMouseLeave={handleClose}
                            >
                              <Link
                                to="neck-pain"
                                className="navigation__item--link"
                              >
                                Neck Pain
                              </Link>
                              <ul className="navigation__list navigation__list--sub">
                                <li className="navigation__item navigation__item--default ">
                                  <Link
                                    to="neck-pain-faqs"
                                    className="navigation__item--link"
                                  >
                                    Neck Pain FAQs
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="sciatica"
                                className="navigation__item--link"
                              >
                                Sciatica
                              </Link>
                            </li>
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="shockwave-therapy"
                                className="navigation__item--link"
                              >
                                Shockwave Therapy
                              </Link>
                            </li>
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="shoulder-injury"
                                className="navigation__item--link"
                              >
                                Shoulder Injury from Auto Accident
                              </Link>
                            </li>
                            <li
                              className="navigation__item navigation__item--default has-drop-down "
                              onMouseOver={handleMouse}
                              onMouseLeave={handleClose}
                            >
                              <Link
                                to="shoulder-pain"
                                className="navigation__item--link"
                              >
                                Shoulder Pain
                              </Link>
                              <ul className="navigation__list navigation__list--sub">
                                <li className="navigation__item navigation__item--default ">
                                  <Link
                                    to="shoulder-pain-faqs"
                                    className="navigation__item--link"
                                  >
                                    Shoulder Pain FAQs
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="spinal-decompression"
                                className="navigation__item--link"
                              >
                                Spinal Decompression
                              </Link>
                            </li>
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="spinal-manipulation-adjustment/"
                                className="navigation__item--link"
                              >
                                Spinal Manipulation &amp; Adjustment
                              </Link>
                            </li>
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="sports-injury"
                                className="navigation__item--link"
                              >
                                Sports Injury
                              </Link>
                            </li>
                            <li
                              className="navigation__item navigation__item--default has-drop-down "
                              onMouseOver={handleMouse}
                              onMouseLeave={handleClose}
                            >
                              <Link
                                to="whiplash-treatment"
                                className="navigation__item--link"
                              >
                                Whiplash
                              </Link>
                              <ul className="navigation__list navigation__list--sub">
                                <li className="navigation__item navigation__item--default ">
                                  <Link
                                    to="whiplash-faqs"
                                    className="navigation__item--link"
                                  >
                                    Whiplash FAQs
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="navigation__item navigation__item--default has-drop-down"
                          onMouseOver={handleMouse}
                          onMouseLeave={handleClose}
                        >
                          <Link
                            to="auto-accident-treatment"
                            className="navigation__item--link"
                          >
                            Auto Accident Treatment
                          </Link>
                          <ul className="navigation__list navigation__list--sub">
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="auto-accident-faqs"
                                className="navigation__item--link"
                              >
                                Auto Accident FAQs
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="navigation__item navigation__item--default has-drop-down"
                          onMouseOver={handleMouse}
                          onMouseLeave={handleClose}
                        >
                          <Link
                            to="new-patient-center"
                            className="navigation__item--link"
                          >
                            New Patient Center
                          </Link>
                          <ul className="navigation__list navigation__list--sub">
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="special-offers"
                                className="navigation__item--link"
                              >
                                Special Offers
                              </Link>
                            </li>
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="online-forms"
                                className="navigation__item--link"
                              >
                                Online Forms
                              </Link>
                            </li>
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="payment-options"
                                className="navigation__item--link"
                              >
                                Payment Options
                              </Link>
                            </li>
                            <li
                              className="navigation__item navigation__item--default has-drop-down"
                              onMouseOver={handleMouse}
                              onMouseLeave={handleClose}
                            >
                              <Link
                                to="what-to-expect"
                                className="navigation__item--link"
                              >
                                What to Expect
                              </Link>
                              <ul className="navigation__list navigation__list--sub">
                                <li className="navigation__item navigation__item--default ">
                                  <Link
                                    to="your-first-visit"
                                    className="navigation__item--link"
                                  >
                                    Your First Visit
                                  </Link>
                                </li>
                                <li className="navigation__item navigation__item--default ">
                                  <Link
                                    to="phase-1-relief-care"
                                    className="navigation__item--link"
                                  >
                                    Phase 1: Relief Care
                                  </Link>
                                </li>
                                <li className="navigation__item navigation__item--default ">
                                  <Link
                                    to="phase-2-corrective-care"
                                    className="navigation__item--link"
                                  >
                                    Phase 2: Corrective Care
                                  </Link>
                                </li>
                                <li className="navigation__item navigation__item--default ">
                                  <Link
                                    to="phase-3-wellness-care"
                                    className="navigation__item--link"
                                  >
                                    Phase 3: Wellness Care
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="navigation__item navigation__item--default has-drop-down"
                          onMouseOver={handleMouse}
                          onMouseLeave={handleClose}
                        >
                          <Link
                            to="resources"
                            className="navigation__item--link"
                          >
                            Resources
                          </Link>
                          <ul className="navigation__list navigation__list--sub">
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="3d-spine-simulator"
                                className="navigation__item--link"
                              >
                                3D Spine Simulator
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="navigation__item navigation__item--default has-drop-down"
                          onMouseOver={handleMouse}
                          onMouseLeave={handleClose}
                        >
                          <Link
                            to="contact"
                            className="navigation__item--link"
                          >
                            Contact
                          </Link>
                          <ul className="navigation__list navigation__list--sub">
                            <li className="navigation__item navigation__item--default ">
                              <Link
                                to="appointment-request"
                                className="navigation__item--link"
                              >
                                Appointment Request
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
