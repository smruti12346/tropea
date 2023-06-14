import React from "react";
import "./customersays.css";

function Customersays() {
  return (
    <>
      <div className="container">
        <h2
          className="text-center testimonialheading"
          style={{ position: "relative" }}
        >
          What our customers say
        </h2>
        <div
          className="row"
          style={{ paddingTop: "30px" }}
        >
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="testimonial-box text-center">
              <img
                src="img/dp1.png"
                className="rounded-circle "
                alt="Customer 1"
              />
              <h5 className="mt-3">Himansu S. Das</h5>
              <p>2 months ago on</p>
              <div className="rating">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          {/* Repeat the above code for other testimonial boxes */}
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="testimonial-box text-center">
              <img
                src="img/dp1.png"
                className="rounded-circle"
                alt="Customer 8"
              />
              <h5 className="mt-3">John Doe</h5>
              <p>1 year ago on</p>
              <div className="rating">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="testimonial-box text-center">
              <img
                src="img/dp1.png"
                className="rounded-circle"
                alt="Customer 8"
              />
              <h5 className="mt-3">John Doe</h5>
              <p>1 year ago on</p>
              <div className="rating">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="testimonial-box text-center">
              <img
                src="img/dp1.png"
                className="rounded-circle"
                alt="Customer 8"
              />
              <h5 className="mt-3">John Doe</h5>
              <p>1 year ago on</p>
              <div className="rating">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="testimonial-box text-center">
              <img
                src="img/dp1.png"
                className="rounded-circle"
                alt="Customer 8"
              />
              <h5 className="mt-3">John Doe</h5>
              <p>1 year ago on</p>
              <div className="rating">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          {/* Repeat the above code for other testimonial boxes */}
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="testimonial-box text-center">
              <img
                src="img/dp1.png"
                className="rounded-circle"
                alt="Customer 8"
              />
              <h5 className="mt-3">John Doe</h5>
              <p>1 year ago on</p>
              <div className="rating">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="testimonial-box text-center">
              <img
                src="img/dp1.png"
                className="rounded-circle"
                alt="Customer 8"
              />
              <h5 className="mt-3">John Doe</h5>
              <p>1 year ago on</p>
              <div className="rating">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="testimonial-box text-center">
              <img
                src="img/dp1.png"
                className="rounded-circle"
                alt="Customer 8"
              />
              <h5 className="mt-3">John Doe</h5>
              <p>1 year ago on</p>
              <div className="rating">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center mt-4 ">
              <div className="text-center">
                <button
                  className="button loadmorebutton text-center"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  Load more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customersays;
