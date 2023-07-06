import React, { useEffect } from "react";
import CumSlider from "./slider/CumSlider";
import Customersays from "./WhatCustomerSays/Customersays";
import HomeBanner from "./HomeBanner";
import { Link } from "react-router-dom";
import { url } from "../Auth";
import { Helmet } from "react-helmet-async";
import "./home.css";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Tropea Chiropractic Inc | Chiropractor in Sunnyvale, CA</title>
        <meta
          name="description"
          content="Looking for a trusted chiropractic doctor near you? Tropea Chiropractic
offers noninvasive pain relief and personalized care. Schedule your consultation today!"
        />
        <meta
          name="keywords"
          content="chiropractic doctor near me, chiropractic doctors near me, best chiropractic doctor near me, chiropractic treatment near me, best chiropractic near me, emergency chiropractic near me, chiropractic clinic near me, chiropractic near me walk in"
        />
        <meta
          name="SiteID"
          content="0076741"
        />
        <meta
          property="og:title"
          content="Trusted Chiropractic Doctor Near Me | Tropea Chiropractic"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:description"
          content="Looking for a trusted chiropractic doctor near you? Tropea Chiropractic
offers noninvasive pain relief and personalized care. Schedule your consultation today!"
        />
        <meta
          property="og:url"
          content="https://www.tonytropeadc.com"
        />
        <meta
          property="og:image"
          content="https://cdcssl.ibsrv.net/ibimg/smb/200x200_80/webmgr/1n/7/p/61f456f6b11f6_blade_20230124_1537.jpg.webp"
        />
      </Helmet>
      <HomeBanner />
      <div className="section-base-container">
        <div className="section-overlap-container"></div>
        <div
          id="id_7c9a10a3-8c9e-562a-b390-cfac6e3ff054"
          data-control="section"
          className="section section__bg--light-1 section-lazy forms--fullwidth forms-option--a section-blade section-featuredblocks section-blade"
        >
          <div className="section--inner container-fluid section--light ">
            <div className="row equal">
              <div className="col-lg-12 section__column-1 col-sm-12">
                <div className="row">
                  <div className="col-sm-12 stacked alias-blade_home">
                    <div className="componentWith__container blade__container ">
                      <div className="ple-column--stack ple-module-container blade_home__container--inner blade__container--inner">
                        <div className="blade-a blade-a--12 blade-a__text--swapped ">
                          <div className="blade-a__wrap justify-content-end">
                            <div className="row align-items-center">
                              <div className="blade-a__bg blade-a__bg--12 col-sm-12 col-lg-5 blade-a__bg--swapped">
                                <div>
                                  <img
                                    loading="lazy"
                                    style={{ width: "100%" }}
                                    src={`${url}/img/64065ab2d5fbd_TropeaChiropractic3160027.jpg.webp`}
                                    alt="Consultation"
                                    title="Consultation"
                                  />
                                </div>
                              </div>
                              <div className="blade-a__text col-sm-12 col-lg-7">
                                <div className="blade-a__title-subtitle">
                                  <h3 className="blade-a__title blade-a__title--border component__title">
                                    Welcome to Tropea Chiropractic Inc in
                                    Sunnyvale, CA
                                    <br />
                                  </h3>
                                  <h4 className="blade-a__subtitle component__subtitle">
                                    Your Chiropractor in Sunnyvale, CA.
                                    <br />
                                  </h4>
                                </div>
                                <div className="blade-a__description component__p">
                                  <p>
                                    Call&nbsp;
                                    <a
                                      href="tel:(408) 329-9604"
                                      className="piwik_ignore"
                                    >
                                      (408) 329-9604
                                    </a>
                                    &nbsp;today!
                                    <br />
                                  </p>
                                  <p>
                                    At Tropea Chiropractic Inc, we are fully
                                    dedicated to providing chiropractic
                                    solutions to address your unique needs,
                                    whether you are experiencing back pain, neck
                                    pain, headaches, or even muscle tightness
                                    and tension. Dr. Tropea welcomes you to our
                                    practice where we strive to make patients
                                    feel at home. This personal care is why
                                    people throughout the Sunnyvale area come to
                                    Tropea Chiropractic Inc.
                                  </p>
                                </div>
                                <div className="row blade-a__links">
                                  <div
                                    className="col-sm-12 col-lg-6"
                                    style={{ height: "60px" }}
                                  >
                                    <Link
                                      className="cta__button component__button--1"
                                      to="meet-the-doctor"
                                    >
                                      Meet the Doctor
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 stacked alias-featuredblocks_home">
                    <div className="componentWith__container featuredblocks__container ">
                      <div className="ple-column--stack ple-module-container featuredblocks_home__container--inner featuredblocks__container--inner">
                        <div className="featuredblocks component ">
                          <div className="featuredblocks-flyup-a ">
                            <div className="featuredblocks__container">
                              <ul
                                className="featuredblock row"
                                id="a-group"
                              >
                                <li className="featuredblock__item col-sm-12 col-lg">
                                  <div className="featuredblock__wrap">
                                    <Link
                                      className="featuredblock__link d-none d-lg-block"
                                      to="spinal-decompression"
                                    >
                                      <span
                                        className="featuredblock__icon"
                                        aria-label="cicon chiro_1"
                                      >
                                        {/* <span
                                          className="icon cicon-chiro_1 main-icon"
                                          aria-hidden="true"
                                        ></span> */}
                                        <img
                                          src={`/icons/spinal.png`}
                                          width={60}
                                          style={{ color: "red" }}
                                        />
                                      </span>
                                      <span className="featuredblock__title">
                                        Spinal Decompression
                                        <br />
                                      </span>
                                    </Link>
                                    <Link
                                      className="featuredblock__link d-sm-block d-lg-none"
                                      to="spinal-decompression"
                                      target=""
                                    >
                                      <span
                                        className="featuredblock__icon"
                                        aria-label="cicon chiro_1"
                                      >
                                        {/* <span
                                          className="icon cicon-chiro_1 main-icon"
                                          aria-hidden="true"
                                        ></span> */}
                                        <img
                                          src={`/icons/spinal.png`}
                                          width={60}
                                          style={{ color: "red" }}
                                        />
                                      </span>
                                      <span className="featuredblock__title">
                                        Spinal Decompression
                                        <br />
                                      </span>
                                    </Link>
                                  </div>
                                </li>
                                <li className="featuredblock__item col-sm-12 col-lg">
                                  <div className="featuredblock__wrap">
                                    <Link
                                      className="featuredblock__link d-none d-lg-block"
                                      to="accident-injury-treatments"
                                    >
                                      <span
                                        className="featuredblock__icon"
                                        aria-label="icon automobile"
                                      >
                                        {/* <span
                                          className="icon icon-automobile main-icon"
                                          aria-hidden="true"
                                        ></span> */}
                                        <img
                                          src={`/icons/car.png`}
                                          width={60}
                                          style={{ color: "red" }}
                                        />
                                      </span>
                                      <span className="featuredblock__title">
                                        Auto Accident Injury
                                        <br />
                                      </span>
                                    </Link>
                                    <Link
                                      className="featuredblock__link d-sm-block d-lg-none"
                                      to="accident-injury-treatments"
                                    >
                                      <span
                                        className="featuredblock__icon"
                                        aria-label="icon automobile"
                                      >
                                        <img
                                          src={`/icons/car.png`}
                                          width={60}
                                          style={{ color: "red" }}
                                        />
                                      </span>
                                      <span className="featuredblock__title">
                                        Auto Accident Injury
                                        <br />
                                      </span>
                                    </Link>
                                  </div>
                                </li>
                                <li className="featuredblock__item col-sm-12 col-lg">
                                  <div className="featuredblock__wrap">
                                    <Link
                                      className="featuredblock__link d-none d-lg-block"
                                      to="chiropractic-care"
                                    >
                                      <span
                                        className="featuredblock__icon"
                                        aria-label="cicon chiro_2"
                                      >
                                        {/* <span
                                          className="icon cicon-chiro_2 main-icon"
                                          aria-hidden="true"
                                        ></span> */}
                                        <img
                                          src={`/icons/adjustment.png`}
                                          width={60}
                                          style={{ color: "red" }}
                                        />
                                      </span>
                                      <span className="featuredblock__title">
                                        Spinal Adjustment
                                        <br />
                                      </span>
                                    </Link>
                                    <Link
                                      className="featuredblock__link d-sm-block d-lg-none"
                                      to="chiropractic-care"
                                    >
                                      <span
                                        className="featuredblock__icon"
                                        alt=""
                                        title=""
                                        aria-label="cicon chiro_2"
                                      >
                                        <img
                                          src={`/icons/adjustment.png`}
                                          width={60}
                                          style={{ color: "red" }}
                                        />
                                      </span>
                                      <span className="featuredblock__title">
                                        Spinal Adjustment
                                        <br />
                                      </span>
                                    </Link>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 stacked alias-blade2_home">
                    <div className="componentWith__container blade__container ">
                      <div className="ple-column--stack ple-module-container blade2_home__container--inner blade__container--inner">
                        <div className="blade-a blade-a--12 ">
                          <div className="blade-a__wrap ">
                            <div className="row align-items-center">
                              <div className="blade-a__text col-sm-12 col-lg-7">
                                <div className="blade-a__title-subtitle">
                                  <h3 className="blade-a__title blade-a__title--border component__title">
                                    A Second Opinion You Can Trust
                                    <br />
                                  </h3>
                                </div>
                                <div className="blade-a__description component__p">
                                  <p>
                                    Many of our patients come to us on strong
                                    pain medication seeking a way to avoid
                                    dangerous surgeries. In most cases, we can
                                    relieve your pain and restore mobility to
                                    pre-injury levels.
                                  </p>
                                  <p>
                                    Every case is unique and starts with a full
                                    consultation; call us today to schedule an
                                    appointment.
                                  </p>
                                </div>
                                <div className="row blade-a__links">
                                  <div
                                    className="col-sm-12 col-lg-6"
                                    style={{ height: "100px" }}
                                  >
                                    <a
                                      className="cta__button component__button--1"
                                      href="https://player.vimeo.com/video/110774448"
                                      target="_blank"
                                      rel="noopener"
                                    >
                                      Watch Our Video
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="blade-a__bg blade-a__bg--12 col-sm-12 col-lg-5 ">
                                <div>
                                  <img
                                    loading="lazy"
                                    style={{ width: "100%" }}
                                    src={`${url}/img/blade2.jpg.webp`}
                                    alt="Patient receiving treatment"
                                    title="Patient receiving treatment"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="section-base-container"
        data-section-id="id_ca60db7e-95c7-534a-a3f5-0d8384cb6e86"
      >
        <section className="bg-overlay">
          <div className="container trust">
            <div className="row">
              <div className="col-md-6">
                <h1 className="title1">
                  Your Trusted Chiropractic Treatment Near Me
                </h1>
                <li>Noninvasive, drug-free pain relief</li>
                <li>In-house rehabilitation facility</li>
                <li>Expertise in various conditions and injuries</li>
                <li>Personalized one-on-one care</li>
                <li>Comprehensive treatment options</li>
                <div className="who-are-we">
                  <h2 className="subtitle">Who Are We?</h2>
                  <p>
                    Dr. Tropea, the best chiropractic doctor near me, offers
                    noninvasive, natural pain relief without the use of
                    medicines or the risks associated with intrusive treatments.
                    He appreciates building one-on-one connections with his
                    patients and strives to satisfy each individual's
                    requirements and health objectives.
                  </p>
                  <p>
                    At Tropea Chiropractic Inc., chiropractic doctors near me
                    provide a complete in-house rehabilitation facility allowing
                    patients to benefit from all aspects of their treatment plan
                    under one roof. Bemer mat therapy, electrical muscle
                    stimulation, cold laser, and Proprioceptive Neuromuscular
                    Facilitation (PNF) are among the chiropractic treatments
                    available near me to enhance circulation, ease muscle spasms
                    and trigger points, and reduce pain.
                  </p>
                </div>
                <div className="expertise">
                  <h2 className="subtitle2">Our Expertise</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <ul>
                        <li>Chiropractic Care</li>
                        <li>Common Airbag and Seatbelt Injury</li>
                        <li>Concussions</li>
                        <li>Headaches</li>
                        <li>Headaches After a Car Accident</li>
                        <li>Herniated Discs</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li>Knee Pain</li>
                        <li>Lifestyle & Nutritional Advice</li>
                        <li>Lower Back Pain</li>
                        <li>Neck Pain</li>
                        <li>Sciatica</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="right-content">
                  <h2 className="subtitle">
                    Why Choose Us For the Best Chiropractic Near Me?
                  </h2>
                  <ul>
                    <li>Committed to providing the best care</li>
                    <li>Convenient walk-in availability</li>
                    <li>Emergency chiropractic services</li>
                    <li>State-of-the-art clinic facilities</li>
                    <li>Positive patient testimonials</li>
                  </ul>
                  <h2 className="subtitle">
                    Revitalize Your Spine, Revitalize Your Life!
                  </h2>
                  <p>
                    Discover how chiropractic care may change your life. Get the
                    potential benefits of a properly positioned spine, such as
                    increased mobility, less discomfort, and improved overall
                    wellbeing.
                  </p>
                  <p>
                    Boost your energy levels and maximize your performance with
                    chiropractic doctors near me. Through chiropractic
                    adjustments, nutritional advice, and lifestyle
                    recommendations, we'll help you unlock your full potential.
                  </p>
                  <p>
                    Also, avail emergency chiropractic near me at Tropea
                    Chiropractic.
                  </p>
                  <h2 className="subtitle">
                    Discover the Tropea Chiropractic Advantage
                  </h2>
                  <ul>
                    <li>
                      Cutting-edge techniques for effective pain management
                    </li>
                    <li>Best approach to health and wellness</li>
                    <li>Collaborative and patient-centered care</li>
                    <li>Extensive experience in treating sports injuries</li>
                    <li>Focus on long-term results and preventive care</li>
                    <li>
                      Convenient location and flexible appointment options
                    </li>
                  </ul>
                  <p className="bold">
                    Choose us as your best chiropractic near me.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="faqs">
                  <h2 className="title3">
                    FAQs About Chiropractic Treatment Near Me
                  </h2>
                  <ol className="faq">
                    <li>Is chiropractic treatment safe?</li>
                    <p>
                      Chiropractic treatment is considered to be safe and
                      noninvasive. The chiropractic clinic near me employs
                      gentle techniques to ensure comfort and safety throughout
                      treatment.
                    </p>
                    <li>
                      How many chiropractic sessions will I need to recover?
                    </li>
                    <p>
                      The number of sessions required will depend on your
                      specific condition, symptoms' severity and your response
                      to a particular therapy. Chiropractic doctor near me will
                      evaluate your progress regularly and create the treatment
                      plan as needed.
                    </p>
                    <li>Can chiropractic care help with back pain?</li>
                    <p>
                      Treatments like spinal adjustments can help relieve pain,
                      restore spinal alignment and improve general back health
                      to a great extent.{" "}
                    </p>
                    <li>
                      Should I go for chiropractic treatment after a car
                      accident?
                    </li>
                    <p>
                      Absolutely! It helps people who have suffered injuries or
                      trauma in car accidents. Chiropractic doctor near me has
                      expertise in treating car accident-related injuries like
                      whiplash and can help you recover and regain mobility
                    </p>
                    <li>
                      Is chiropractic treatment effective for sports injuries?
                    </li>
                    <p>
                      Yes, chiropractic treatment near me can play a crucial
                      role in recovering and managing sports injuries. Our
                      chiropractic doctors near me have specialized knowledge
                      and techniques to address sports-related injuries and help
                      athletes return to peak performance.
                    </p>
                  </ol>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h2 className="subtitle">
                  Experience Natural Pain Relief Today
                </h2>
                <p>
                  Tropea chiropractor is ready to help if you're seeking for an
                  efficient chiropractic near me walk-in. Visit or call us right
                  now to get the best chiropractic therapy in the area.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h2 className="subtitle">Schedule Your Consultation Today!</h2>
                <form>
                  <div className="form-group">
                    {/* <label htmlFor="full-name">Full Name</label> */}
                    <input
                      type="text"
                      id="full-name"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="form-group">
                    {/* <label htmlFor="email">Email Address</label> */}
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group">
                    {/* <label htmlFor="phone">Phone Number</label> */}
                    <input
                      type="text"
                      id="phone"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    {/* <label htmlFor="preferred-appointment">Preferred Appointment</label> */}
                    <input
                      type="text"
                      id="preferred-appointment"
                      className="form-control"
                      placeholder="Preferred Appointment"
                    />
                  </div>
                  <div className="form-group text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* 
=====================
END
====================
*/}

        <div
          className="section-base-container"
          data-section-id="id_ca60db7e-95c7-534a-a3f5-0d8384cb6e86"
        >
          <div className="section-overlap-container"></div>
          <div
            id="id_ca60db7e-95c7-534a-a3f5-0d8384cb6e86"
            data-control="section"
            className="section section__bg--dark-1 cta-no-padding forms--fullwidth forms-option--a section-cta"
          >
            <div className="section--inner container-fluid section--dark ">
              <div className="row equal">
                <div className="col-lg-12 section__column-1 ple-column-padding col-sm-12 alias-cta_special">
                  <div className="componentWith__container cta__container ">
                    <div className="ple-column--single ple-module-container cta_special__container--inner cta__container--inner">
                      <div className="cta">
                        <div className="cta-a cta-a--12 text-center">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="row justify-content-center">
                                <div className="col-sm-12 col-lg-6">
                                  <Link
                                    className="cta__button component__button--1"
                                    to="special-offers"
                                  >
                                    SPECIAL OFFER FOR NEW PATIENTS ONLY
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section-base-container"
          data-section-id="id_1c41ad26-3b89-5934-a219-349de06c9398"
        >
          <div className="section-overlap-container"></div>
          <div
            id="id_1c41ad26-3b89-5934-a219-349de06c9398"
            data-control="section"
            className="section section__bg--dark-3 section-lazy forms--fullwidth forms-option--a section-gallery section-staff section-editable"
          >
            <div className="section--inner container section--dark ">
              <div className="row equal">
                <div className="col-lg-12 section__column-1 ple-column-padding col-sm-12">
                  <div className="row">
                    <CumSlider />
                    <div
                      className="col-sm-12 stacked alias-staff_home_"
                      style={{ margin: "60px 0px" }}
                    >
                      <div className="componentWith__container staff__container ">
                        <div className="ple-column--stack ple-module-container staff_home___container--inner staff__container--inner">
                          <div className="staff-b staff-b--12 staff__slider ">
                            <div
                              className="js-staff-layout-settings"
                              data-layout-type="list"
                            >
                              <ul className="staff__list">
                                <li className="staff__item">
                                  <div className="staff-member">
                                    <div className="staff-member__image-wrapper col-sm-12 col-md-4 col-lg-3">
                                      <img
                                        loading="lazy"
                                        alt="Tony Tropea, DC"
                                        title="Tony Tropea, DC"
                                        className="staff-member__image"
                                        src={`${url}/img/640664820ba6f_11.jpg.webp`}
                                      />
                                    </div>
                                    <div
                                      className="staff-member__text row justify-content-end"
                                      data-mh="staff__staff_home_-1"
                                    >
                                      <div className="staff-member__text-wrap col-sm-12 col-md-8 col-lg-9">
                                        <div className="staff-member__name component__title">
                                          <span className="staff-member__prefix"></span>
                                          <span className="staff-member__first-last">
                                            Tony Tropea, DC
                                          </span>
                                          <span className="staff-member__suffix"></span>
                                        </div>
                                        <div className="staff-member__description component__p">
                                          <p>
                                            <strong>
                                              Chiropractor located in Downtown
                                              Sunnyvale, Sunnyvale, CA
                                            </strong>
                                          </p>
                                          <p>
                                            Tony Tropea, DC, is a kind and
                                            dedicated chiropractor providing
                                            gentle, effective care to men,
                                            women, and children in Downtown
                                            Sunnyvale, California. As the
                                            founder of Tropea Chiropractic Inc.,
                                            Dr. Tropea has brought together
                                            top-notch providers to offer
                                            patients the best and most
                                            personalized care for their pain and
                                            health challenges.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Customersays />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-base-container ple-hide-for-desktop ple-hide-for-mobile ple-hide-for-tablet">
          <div className="section-overlap-container"></div>
          <div
            id="id_9fe82360-8745-584d-8f0d-903e3eab610a"
            className="section section__bg--dark-1 forms--fullwidth forms-option--a section-partial"
          >
            <div className="section--inner container section--dark ">
              <div className="row equal">
                <div className="col-lg-12 section__column-1 col-sm-12 alias-chiro_where_is_your_pain">
                  <div className="wrap__where_is_your_pain">
                    <div className="image_chiro__container image__container ">
                      <div className=" image_chiro__container--inner image__container--inner">
                        <div className="image ">
                          <img
                            loading="lazy"
                            src={`${url}/img/chiro_spine_model_transparent.png.webp`}
                            alt=""
                            title=""
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="wrap__where_is_your_pain--inner">
                      <div className="cta_chiro0__container cta__container ">
                        <div className=" cta_chiro0__container--inner cta__container--inner">
                          <div className="cta">
                            <div className="cta-a cta-a--12 text-center">
                              <div className="row">
                                <div className="col-md-12">
                                  <h3 className="cta-a__title component__title">
                                    Where is your pain?
                                  </h3>
                                  <h4 className="cta-a__subtitle component__subtitle">
                                    Learn how we can help with your pain
                                  </h4>
                                  <div className="row justify-content-center">
                                    <div className="col-sm-12 col-lg-6">
                                      <Link
                                        className="cta__button component__button--1"
                                        to="head-and-neck"
                                      >
                                        Head and Neck
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cta_chiro1__container cta__container ">
                        <div className=" cta_chiro1__container--inner cta__container--inner">
                          <div className="cta">
                            <div className="cta-a cta-a--12 text-center">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="row justify-content-center">
                                    <div className="col-sm-12 col-lg-6">
                                      <Link
                                        className="cta__button component__button--1"
                                        to="upper-back"
                                      >
                                        Upper Back
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cta_chiro2__container cta__container ">
                        <div className=" cta_chiro2__container--inner cta__container--inner">
                          <div className="cta">
                            <div className="cta-a cta-a--12 text-center">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="row justify-content-center">
                                    <div className="col-sm-12 col-lg-6">
                                      <Link
                                        className="cta__button component__button--1"
                                        to="shoulder-and-clavicle"
                                      >
                                        Shoulder or Clavicle
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cta_chiro3__container cta__container ">
                        <div className=" cta_chiro3__container--inner cta__container--inner">
                          <div className="cta">
                            <div className="cta-a cta-a--12 text-center">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="row justify-content-center">
                                    <div className="col-sm-12 col-lg-6">
                                      <Link
                                        className="cta__button component__button--1"
                                        to="mid-back"
                                      >
                                        Mid-Back
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="cta_chiro4__container cta__container ">
                        <div className=" cta_chiro4__container--inner cta__container--inner">
                          <div className="cta">
                            <div className="cta-a cta-a--12 text-center">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="row justify-content-center">
                                    <div className="col-sm-12 col-lg-6">
                                      <Link
                                        className="cta__button component__button--1"
                                        to="lower-back"
                                      >
                                        Lower Back
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cta_chiro5__container cta__container ">
                        <div className=" cta_chiro5__container--inner cta__container--inner">
                          <div className="cta">
                            <div className="cta-a cta-a--12 text-center">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="row justify-content-center">
                                    <div className="col-sm-12 col-lg-6">
                                      <Link
                                        className="cta__button component__button--1"
                                        to="elbow-hand-and-wrist"
                                      >
                                        Elbow, Hand, and Wrist
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default Home;
