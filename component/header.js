import React, { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Link from "next/link";
import { useRouter } from "next/router";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { url } from "../Auth";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import Head from "next/head";

const pages = [
  {
    name: "About Us",
    id: 16,
    slug: "/about-us",
    child: [
      {
        name: "MEET THE DOCTOR",
        slug: "meet-the-doctor",
      },
      {
        name: "TESTIMONIALS",
        slug: "testimonial",
      },
    ],
  },
  {
    name: "Chiropractic Services",
    id: "16",
    slug: "#",
    child: [
      {
        name: "BACK PAIN",
        slug: "back-pain",
        child: [
          {
            name: "BACK PAIN FAQS",
            slug: "back-pain-faqs",
          },
        ],
      },
      {
        name: "Chiropractic Care",
        slug: "chiropractic-care-near-me",
      },
      {
        name: "Therapeutic Massage",
        slug: "therapeutic-massage",
      },
      {
        name: "Common Airbag and Seatbelt Injury",
        slug: "common-airbag-and-seatbelt-injuries",
      },
      {
        name: "Concussions",
        slug: "concussions",
      },
      {
        name: "Headaches",
        slug: "headaches",
      },
      {
        name: "Headaches After a Car Accident",
        slug: "headaches-after-a-car-accident",
      },
      {
        name: "Herniated Discs",
        slug: "herniated",
      },
      {
        name: "Headaches",
        slug: "headaches",
      },
      {
        name: "Knee Pain",
        slug: "knee-pain",
        child: [
          {
            name: "Knee Pain FAQs",
            slug: "knee-pain-faqs",
          },
        ],
      },
      {
        name: "Lifestyle & Nutritional Advice",
        slug: "lifestyle-and-nutritional-advice",
      },
      {
        name: "Lower Back Pain",
        slug: "lower-back-pain",
      },
      {
        name: "Neck Pain",
        slug: "neck-pain",
        child: [
          {
            name: "Neck Pain FAQs",
            slug: "neck-pain-faqs",
          },
        ],
      },

      {
        name: "Sciatica",
        slug: "sciatica",
      },
      {
        name: "Shockwave Therapy",
        slug: "shockwave-therapy",
      },
      {
        name: "Shoulder Injury from Auto Accident",
        slug: "shoulder-injury",
      },
      {
        name: "Shoulder Pain",
        slug: "shoulder-pain",
        child: [
          {
            name: "Shoulder Pain FAQs",
            slug: "shoulder-pain-faqs",
          },
        ],
      },

      {
        name: "Spinal Decompression",
        slug: "spinal-decompression",
      },
      {
        name: "Spinal Manipulation & Adjustment",
        slug: "spinal-manipulation-adjustment",
      },

      {
        name: "Sports Injury",
        slug: "sports-injury",
      },

      {
        name: "Whiplash",
        slug: "whiplash-treatment",
        child: [
          {
            name: "Whiplash FAQs",
            slug: "whiplash-faqs",
          },
        ],
      },
    ],
  },

  {
    name: "Auto Accident Treatment",
    id: 16,
    slug: "/auto-accident-treatment",
    child: [
      {
        name: "Auto Accident FAQs",
        slug: "auto-accident-faqs",
      },
    ],
  },
  {
    name: "New Patient Center",
    id: 16,
    slug: "/new-patient-center",
    child: [
      {
        name: "Special Offers",
        slug: "special-offers",
      },
      {
        name: "Online Forms",
        slug: "online-forms",
      },
      {
        name: "Payment Options",
        slug: "payment-options",
      },
      {
        name: "What to Expect",
        slug: "what-to-expect",
        child: [
          {
            name: "Your First Visit",
            slug: "your-first-visit",
          },
          {
            name: "Phase 1: Relief Care",
            slug: "phase-1-relief-care",
          },
          {
            name: "Phase 2: Corrective Care",
            slug: "phase-2-corrective-care",
          },
          {
            name: "Phase 3: Wellness Care",
            slug: "phase-3-wellness-care",
          },
        ],
      },
    ],
  },

  {
    name: "Resources",
    id: 16,
    slug: "/resources",
    child: [
      {
        name: "3D Spine Simulator",
        slug: "3d-spine-simulator",
      },
    ],
  },
  {
    name: "Contact",
    id: 16,
    slug: "/contact",
    child: [
      {
        name: "Appointment Request",
        slug: "appointment-request",
      },
    ],
  },
  {
    name: "Blog",
    id: 16,
    slug: "https://www.tonytropeadc.com/blog",
  },
];

const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [deta, setDeta] = useState([{ title: "", url: "", child: "" }]);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [menu, setMenu] = useState(false);
  const handleMenuOpen = () => {
    setMenu(true);
  };
  const handleMenuClose = () => {
    setMenu(false);
  };

  const handleDropdown = (event, isClild) => {
    if (isClild) {
      event.currentTarget.className =
        " navigation__item navigation__item--default  has-drop-down navigation-open";
    } else {
      event.currentTarget.className =
        " navigation__item navigation__item--default";
    }
  };
  const handleDropdownOut = (event, isClild) => {
    if (isClild) {
      event.currentTarget.className =
        " navigation__item navigation__item--default  has-drop-down";
    } else {
      event.currentTarget.className =
        " navigation__item navigation__item--default";
    }
  };
  // const toggleDrawer = (newOpen) => () => {
  //   setOpen(newOpen);
  // };
  // const open = Boolean(anchorEl);
  const handleClose = (event) => {
    event.currentTarget.className =
      "navigation__item navigation__item--default has-drop-down";
    //setAnchorEl(null);
  };

  const location = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const para = useRef();
  const btn = useRef();
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  const isSticky = () => {
    let height = window.scrollY;
    if (height > 100) {
      para.current.classList.add("d-none");
      btn.current.classList.add("d-block");
      para.current.classList.remove("d-block");
      btn.current.classList.remove("d-none");
    } else {
      para.current.classList.add("d-block");
      btn.current.classList.add("d-none");
      para.current.classList.remove("d-none");
      btn.current.classList.remove("d-block");
    }
  };
  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleMouse = (event) => {
    event.currentTarget.className += " navigation-open";
  };

  // useEffect(() => {
  //   axios.get(`${api_url}/menu`).then((data) => {
  //     let newData = data.data;
  //     console.log(newData);
  //     let obj_data = newData.map((deta) => {
  //       if (deta.menu_item_parent == 0) {
  //         let filt = newData.filter((dt) => {
  //           return deta.db_id == dt.menu_item_parent;
  //         });
  //         return { title: deta.title, url: deta.url, child: filt };
  //       } else {
  //         return false;
  //       }
  //     });
  //     setDeta(obj_data);
  //     console.log(obj_data);
  //   });
  // }, []);

  const list = (anchor) => (
    <Box
      sx={{ width: "300px" === "top" || anchor === "bottom" ? "auto" : 200 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
      style={{ width: "300px" }}
    >
      <List>
        {pages.map((text, index) => (
          <ListItem
            key={text}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <Link
                href={text.slug}
                onClick={handleMenuClose}
              >
                <ListItemText
                  primary={text.name}
                  style={{ color: "black" }}
                />
              </Link>
            </ListItemButton>
            <Divider />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const closeModalCOVID19 = () => {
    document.getElementById("COVID19").style.display = "none";
  };

  return (
    <>
      <Head>
        <meta
          name="robots"
          content="max-image-preview:large"
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      </Head>
      <div
        id="COVID19"
        className="modalDialog"
      >
        <div
          className="covid-modal"
          style={{ borderColor: "#CE0F0F" }}
        >
          <span
            className="covid-close"
            onClick={closeModalCOVID19}
          >
            ×
          </span>
          <h2 className="covid-heading text-danger">
            New Patient Special!
            {/* Celebrate with us! */}
          </h2>
          <p className="covid-content"></p>
          <p
            className="covid-headin"
            style={{ color: "#4a4a4a", fontWeight: "bold" }}
          >
            $50 Spinal Decompression Consultation
            {/* Dr. Tropea is celebrating his 27th year in practice. We want to
            celebrate by offering all new patients an initial visit (exam and
            treatment) for $27. This promotion is valid from July 3rd through
            July 31st, 2023. */}
            <br />
            Special Offer ($200 Normally){" "}
          </p>
          <p className="para-section">
            We offer personalized natural care through advanced treatments that
            decrease discomfort and increase cushioning and vitality.
            {/* This is the perfect time to have your friends and loved ones try out
            chiropractic adjustments. Have them bring a screenshot of this
            picture to receive the promotional price. */}
          </p>
          <p className="para-section">
            Call{" "}
            <a
              href="tel:4083299604"
              className="piwik_ignore"
            >
              (408) 329-9604
            </a>
          </p>
          <a
            href="tel:4083299604"
            className="piwik_ignore"
          >
            <p>
              <Image
                width={150}
                height={100}
                loading="lazy"
                src="/img/50-spinal-decompression-consultation-special-offer-200-normally_page-0001.jpg"
                style={{ width: "150px", height: "auto" }}
                alt="logo"
              />
            </p>
          </a>
          <div>
            <a
              href="tel:4083299604"
              className="piwik_ignore"
            ></a>
          </div>
          <div>
            <a
              className="covid-close-link"
              onClick={closeModalCOVID19}
            >
              Close
            </a>
          </div>
        </div>
      </div>
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
      {/* mobile menu */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="sticky"
          color="primary"
          style={{
            zIndex: 999,
            backgroundColor: "#6715ab",
            position: "fixed",
            top: "0px",
          }}
          className="mobile"
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon
                onClick={handleMenuOpen}
                style={{ fontSize: "32px" }}
              />
            </IconButton>

            <Button
              color="inherit"
              style={{ marginLeft: "auto" }}
            >
              <Link
                href="/appointment-request"
                className="btn btn-sm"
                style={{
                  bachgroundColor: "red",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              >
                Request Appointment
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <div>
        {["left", "right", "top", "bottom"].map((anchor) => (
          <React.Fragment key={anchor}>
            <SwipeableDrawer
              anchor={"left"}
              open={menu}
              onClose={handleMenuClose}
              onOpen={handleMenuOpen}
            >
              <Link
                href="/"
                style={{ cursor: "pointer" }}
                sx={{ flexGrow: 1 }}
                onClick={handleMenuClose}
              >
                <div className="text-center">
                  <Image
                    width={220}
                    height={200}
                    src={`${url}/img/logo.webp`}
                    className="logo-a__img"
                    style={{
                      height: "auto",
                      width: "220px",
                      borderBottom: "1px solid #000",
                      padding: "10px",
                    }}
                    alt="Tropea Chiropractic Inc​"
                    title=""
                  />
                </div>
              </Link>
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
      <div
        className="desktop"
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
        <div
          className="section-base-container ple-hide-for-mobile"
          style={{ position: "relative" }}
        >
          <div className="section-overlap-container"></div>
          <div
            id="id_3108e6d0-f41f-5166-9b03-d9ae29055df4"
            className="section section__bg--light-1 d-none d-sm-none d-md-block   forms--fullwidth forms-option--a section-editable section-logo section-editable"
          >
            <div className="section--inner container-fluid section--light  ">
              <div className="row equal">
                <div className="col-lg-4 section__column-1 col-sm-12 ple-module-justify-center align-self-center alias-fixed_phone">
                  <div className="fixed_phone__container editable__container ">
                    <div className="ple-column--single ple-module-container fixed_phone__container--inner editable__container--inner">
                      <p>
                        <a
                          href="tel:(408) 329-9604"
                          className="piwik_ignore"
                        >
                          <span className="phone__number">(408) 329-9604</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 section__column-2 col-sm-12 ple-module-justify-center alias-logo_header_sticky">
                  <div className="componentWith__container logo__container ">
                    <div className="ple-column--single ple-module-container logo_header_sticky__container--inner logo__container--inner">
                      <div className="logo ">
                        <div className="logo-a logo-a--4 logo-a__horizontal__left">
                          <Link
                            href="/"
                            className="logo-a__image-link"
                            style={{ cursor: "pointer" }}
                          >
                            <div className="logo-a__image">
                              <Image
                                width={500}
                                height={94}
                                src={`${url}/img/logo.webp`}
                                className="logo-a__img"
                                style={{ height: "94px", width: "500px" }}
                                alt="Tropea Chiropractic Inc​"
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 section__column-3 col-sm-12 ple-module-justify-center align-self-center alias-address">
                  <div className="address__container editable__container sedona">
                    <div className="ple-column--single ple-module-container address__container--inner editable__container--inner section--light">
                      <p ref={para}>
                        260 S Sunnyvale Ave #2
                        <br />
                        Sunnyvale, CA 94086, US
                      </p>
                      <Link
                        ref={btn}
                        className="cta__button component__button--1 px-4 py-1 d-none"
                        href="appointment-request"
                      >
                        Request Appointment
                      </Link>
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
                          {pages.map((item, index) => (
                            <li
                              className={`navigation__item navigation__item--default has-drop-down`}
                              onMouseOver={handleMouse}
                              onMouseLeave={handleClose}
                              key={index}
                            >
                              {item.name === "Blog" ? (
                                <a
                                  href={`${item.slug}`}
                                  className="navigation__item--link"
                                >
                                  {item.name}
                                </a>
                              ) : (
                                <Link
                                  href={`${item.slug}`}
                                  className="navigation__item--link"
                                >
                                  {item.name}
                                </Link>
                              )}

                              <ul className="navigation__list navigation__list--sub">
                                {item.child ? (
                                  <>
                                    {item.child.map((childItem, index) => (
                                      <li
                                        className={`navigation__item navigation__item--default  ${
                                          childItem.child ? "has-drop-down" : ""
                                        }`}
                                        key={index}
                                        onMouseEnter={(event) =>
                                          handleDropdown(event, childItem.child)
                                        }
                                        onMouseLeave={(event) =>
                                          handleDropdownOut(
                                            event,
                                            childItem.child
                                          )
                                        }
                                      >
                                        <Link
                                          href={`/${childItem.slug}`}
                                          className="navigation__item--link"
                                        >
                                          {childItem.name}
                                        </Link>

                                        <ul className="navigation__list navigation__list--sub">
                                          {childItem.child ? (
                                            <>
                                              {childItem.child.map(
                                                (subchild, index) => (
                                                  <li
                                                    className="navigation__item navigation__item--default "
                                                    key={index}
                                                  >
                                                    <Link
                                                      href={`/${subchild.slug}`}
                                                      className="navigation__item--link"
                                                    >
                                                      {subchild.name}
                                                    </Link>
                                                  </li>
                                                )
                                              )}
                                            </>
                                          ) : (
                                            ""
                                          )}
                                        </ul>
                                      </li>
                                    ))}
                                  </>
                                ) : (
                                  ""
                                )}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
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
