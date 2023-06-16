import React, { memo, useEffect, useState } from "react";
import "./customersays.css";
import axios from "axios";

function Customersays() {
  const [data, setData] = useState([]);
  const [slice, setSlice] = useState(8);
  useEffect(() => {
    try {
      axios
        .get(
          "https://service-reviews-ultimate.elfsight.com/data/reviews?uris%5B%5D=ChIJVZVdel22j4ARx0fkPCFoFzc&with_text_only=1&min_rating=5&page_length=100&order=date"
        )
        .then((res) => {
          console.log(res.data.result.data);

          setData(res.data.result.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleReview = () => {
    setSlice(slice + 8);
  };
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
          {data.slice(0, slice).map((item) => {
            return (
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="testimonial-box text-center">
                  <img
                    src={item.reviewer_picture_url}
                    className="rounded-circle "
                    alt="Customer 1"
                  />
                  <h5 className="mt-3">{item.reviewer_name}</h5>
                  <p>By {item.supplier}</p>
                  <div className="rating">
                    <span className={`fa fa-star checked`} />
                    <span
                      className={`fa fa-star ${
                        item.rating > 1 ? "checked" : ""
                      }`}
                    />
                    <span
                      className={`fa fa-star ${
                        item.rating > 2 ? "checked" : ""
                      }`}
                    />
                    <span
                      className={`fa fa-star ${
                        item.rating > 3 ? "checked" : ""
                      }`}
                    />
                    <span
                      className={`fa fa-star ${
                        item.rating == 5 ? "checked" : ""
                      }`}
                    />
                  </div>
                  <p style={{ minHeight: "100px", maxHeight: "100px" }}>
                    <span
                      style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                    >
                      {item.text.substring(0, 100)}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
          <div className="col-12">
            <div className="text-center">
              <button
                onClick={handleReview}
                className="btn btn-primary"
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Customersays);
