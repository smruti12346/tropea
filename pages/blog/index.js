import React, { useEffect, useState } from "react";
import { api_url } from "@/Auth";
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Link from "next/link";
import Image from "next/image";
const Blog = (props) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log(props);
  });
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
      <div className="fullwidth-layout">
        <div
          data-control="section-available"
          className="section-available"
        >
          <div
            className="section-base-container"
            data-section-id="id_8ae4235d-c419-5c8a-9641-ea834e7cdb6f"
          >
            <div className="section-overlap-container"></div>
            <div
              id="id_8ae4235d-c419-5c8a-9641-ea834e7cdb6f"
              data-control="section"
              className="section section__bg--dark-1   section-lazy forms--fullwidth forms-option--a section-breadcrumbs section-pagetitle section-pagecontent"
            >
              <div className="section--inner container section--dark  ">
                <div className="row equal">
                  <div className="col-lg-12 section__column-1 ple-column-padding col-sm-12">
                    <div className="row">
                      <div className="col-sm-12 stacked alias-breadcrumb">
                        <div id="breadcrumbs">
                          <ul className="breadcrumb__list">
                            <li
                              className="breadcrumb__item"
                              style={{ display: "inline" }}
                            >
                              <a
                                rel="nofollow"
                                className="breadcrumb__item"
                                href="index.html"
                              >
                                Home
                              </a>
                            </li>
                            <span className="breadcrumb__separator">&gt;</span>
                            <li
                              className="breadcrumb__item"
                              style={{ display: "inline" }}
                            >
                              Blog
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 stacked alias-pagetitle">
                        <div className="componentWith__container pagetitle__container ">
                          <div className="ple-column--stack ple-module-container pagetitle__container--inner pagetitle__container--inner">
                            <div className="component pagetitle ">
                              {/* <div className="pagecomponent__wrap text--left">
                                <h1>{title}</h1>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 stacked alias-pcontent">
                        <div className="wrap__page-content">
                          <div className="wrap__page-content--inner">
                            <div className="editable__container editable__container ">
                              <div
                                className=" editable__container--inner editable__container--inner"
                                data-component-name="editable"
                                data-component-alias="editable"
                              >
                                <div className="row mb-4">
                                  {props.data?.map((item) => (
                                    <>
                                      <div className="col-md-4 mb-3">
                                        <div className="card">
                                          <div className="card-body">
                                            <Image
                                              width={400}
                                              height={400}
                                              alt={item.title.rendered}
                                              className="img-fluid"
                                              src={
                                                item._embedded[
                                                  "wp:featuredmedia"
                                                ][0].source_url
                                              }
                                            />
                                            <h1
                                              className="card-title text-center mt-2"
                                              style={{
                                                fontSize: "1.5rem",
                                                lineHeight: "30px",
                                              }}
                                            >
                                              {item.title.rendered}
                                            </h1>
                                            <div
                                              dangerouslySetInnerHTML={{
                                                __html: `${item.excerpt.rendered.substring(
                                                  0,
                                                  150
                                                )}...`,
                                              }}
                                              style={{ marginBottom: "30px" }}
                                            ></div>
                                          </div>
                                          <div className="card-footer text-center">
                                            <Link
                                              href={`/blog/${item.slug}`}
                                              className="btn btn-sm btn-secondery"
                                            >
                                              Read More
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ))}
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

export default Blog;

export async function getStaticProps() {
  //let url = router.query.slug;
  const res = await fetch(
    `https://api.tonytropeadc.com/wp-json/wp/v2/posts?_embed`
  );
  const data = await res.json();
  return { props: { data: data } };
}
