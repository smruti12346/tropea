import Head from "next/head";
import Image from "next/image";
import { useEffect, useState, React } from "react";
import { useNavigate } from "next/router";
import { useRouter } from "next/router";
const Slug = (props) => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [image, setImage] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [keyWord, setKeyWord] = useState("");
  const navigate = useRouter();
  useEffect(() => {
    let fetchData = props.data;
    if (!props.data.id) {
      navigate.push("/404");
    }
    console.log(fetchData);
    setTitle(fetchData.title.rendered);
    setDesc(fetchData.content.rendered);
    setImage(fetchData.acf.url);
    setKeyWord(fetchData.acf?.keywords);
    // setMetaDesc(fetchData[yoast_head_json].og_description);
    // setMetaTitle(fetchData.yoast_head_json.og_title);
    console.log(fetchData);
  }, [props.data]);
  return (
    <>
      <Head>
        <title>Tropea Chiropractic Inc | Chiropractor in Sunnyvale, CA</title>
        <meta
          property="title"
          content={`"${props.data?.yoast_head_json?.og_title}"`}
        />
        <meta
          property="og:title"
          content={`"${props.data?.yoast_head_json?.og_title}"`}
        />
        <meta
          name="description"
          content={`"${props.data?.yoast_head_json?.og_description}"`}
        />
        <meta
          name="og:description"
          content={`"${props.data?.yoast_head_json?.og_description}"`}
        />
        <meta
          name="keywords"
          content={`"${props.data?.acf?.keyword}"`}
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
                              {title}
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
                                {image !== "" ? (
                                  <picture>
                                    <source
                                      media="(max-width: 767px)"
                                      srcset={image}
                                    />
                                    <source
                                      media="(min-width: 768px) and (max-width: 1023px)"
                                      srcset={image}
                                    />
                                    <source
                                      media="(min-width: 1024px) and (max-width: 1400px)"
                                      srcset={image}
                                    />
                                    <Image
                                      width={500}
                                      height={500}
                                      id="mediaManagerImage"
                                      src={image}
                                      alt="Image of woman doing yoga. "
                                      className="align-right"
                                      style={{
                                        aspectRatio: "0.6954",
                                        margin: "0px 0px 10px 10px",
                                        float: "right",
                                      }}
                                      title="Image of woman doing yoga. "
                                    />
                                  </picture>
                                ) : (
                                  ""
                                )}

                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: desc,
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
export default Slug;
export async function getStaticPaths() {
  const res = await fetch(
    `https://api.tonytropeadc.com/wp-json/wp/v2/pages?per_page=100`
  );
  const pages = await res.json();
  const paths = pages.map((item) => ({
    params: { slug: `${item.slug}` },
  }));
  // const paths = [{params: {slug: ''}}]
  return { paths: paths, fallback: true };
}

export async function getStaticProps({ params }) {
  //let url = router.query.slug;
  const res = await fetch(
    `https://api.tonytropeadc.com/wp-json/wp/v2/pages?slug=${params.slug}`
  );
  const data = await res.json();

  return { props: { data: data[0] } };
}
