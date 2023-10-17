import React, { useEffect, useState } from "react";
import axios from "axios";
import { api_url } from "@/Auth";
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Head from "next/head";
const Single = (props) => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [data, setData] = useState();
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setIsLoading(true);
  //   try {
  //     axios.get(`${api_url}/posts?slug=${params.pages}&_embed`).then((data) => {
  //       console.log(data);
  //       if (data.data.length === 0) {
  //         console.log("return 0");
  //       } else {
  //         setData(data.data[0]);
  //         let fetchData = data.data[0];
  //         setTitle(fetchData.title.rendered);
  //         setDesc(fetchData.content.rendered);
  //         setImage(fetchData.acf.url);
  //       }

  //       setIsLoading(false);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [location]);

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
      <Head>
        <title>{`${props.data?.yoast_head_json?.og_title}`}</title>
        <meta
          property="title"
          content={`${props.data?.yoast_head_json?.og_title}`}
        />
        <meta
          property="og:title"
          content={`${props.data?.yoast_head_json?.og_title}`}
        />
        <meta
          name="description"
          content={`${props.data?.yoast_head_json?.og_description}`}
        />
        <meta
          name="og:description"
          content={`${props.data?.yoast_head_json?.og_description}`}
        />
        <meta
          name="keywords"
          content={`${props.data?.acf?.keyword}`}
        />
        <meta
          property="og:type"
          content="website"
        />
      </Head>
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
                              {props.data.title.rendered}
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
                                <h1 className="my-4">
                                  {props.data.title.rendered}
                                </h1>
                                {props.data._embedded["wp:featuredmedia"][0]
                                  .source_url !== "" ? (
                                  <picture>
                                    <source
                                      media="(max-width: 767px)"
                                      srcset={
                                        props.data._embedded[
                                          "wp:featuredmedia"
                                        ][0].source_url
                                      }
                                    />
                                    <source
                                      media="(min-width: 768px) and (max-width: 1023px)"
                                      srcset={
                                        props.data._embedded[
                                          "wp:featuredmedia"
                                        ][0].source_url
                                      }
                                    />
                                    <source
                                      media="(min-width: 1024px) and (max-width: 1400px)"
                                      srcset={
                                        props.data._embedded[
                                          "wp:featuredmedia"
                                        ][0].source_url
                                      }
                                    />
                                    <img
                                      id="mediaManagerImage"
                                      src={
                                        props.data._embedded[
                                          "wp:featuredmedia"
                                        ][0].source_url
                                      }
                                      alt="Image of woman doing yoga. "
                                      className="img-fluid"
                                      style={{
                                        margin: "0px 0px 10px 10px",
                                      }}
                                      title="Image of woman doing yoga. "
                                    />
                                  </picture>
                                ) : (
                                  ""
                                )}

                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: props.data.content.rendered,
                                  }}
                                  style={{ marginBottom: "30px" }}
                                ></div>
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

export default Single;

export async function getStaticPaths() {
  const res = await fetch(
    `https://api.tonytropeadc.com/wp-json/wp/v2/posts?per_page=100`
  );
  const pages = await res.json();
  const paths = pages.map((item) => ({
    params: { single: `${item.slug}` },
  }));
  // const paths = [{params: {slug: ''}}]
  return { paths: paths, fallback: false };
}

export async function getStaticProps({ params }) {
  //let url = router.query.slug;
  const res = await fetch(`${api_url}/posts?slug=${params.single}&_embed`);
  const data = await res.json();
  return { props: { data: data[0] } };
}
