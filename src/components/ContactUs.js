import React from "react";

function ContactUs() {
  return (
    <>
      <div
        className="section-base-container"
        data-section-id="id_1cfea32e-e6e8-53b1-a965-ec4e5b88a4c4"
      >
        <div className="section-overlap-container" />
        <div
          id="id_1cfea32e-e6e8-53b1-a965-ec4e5b88a4c4"
          data-control="section"
          className="section section__bg--dark-3 co section-lazy forms--fullwidth forms-option--a section-form"
        >
          <div className="section--inner container section--dark ">
            <div className="row equal">
              <div className="col-lg-12 section__column-1 ple-column-padding col-sm-12 alias-form_body">
                <div className="componentWith__container form__container ">
                  <div
                    className="ple-column--single ple-module-container form_body__container--inner form__container--inner"
                    data-component-name="form_body"
                    data-component-alias="form_body"
                    data-widget-alias="SMB__Form__Widgets__FormSettings___form_body"
                    data-widget-id-base="FormSettings-SMB__Form__Widgets__FormSettings___form_body"
                    data-component-prop-componentwith={12}
                  >
                    <div className="form isPleForm ">
                      <div className="component__title-caption-wrap">
                        <h2 className="form__title component__title">
                          CONTACT US TODAY
                        </h2>
                        <h3 className="form__caption component__subtitle">
                          We look forward to hearing from you
                        </h3>
                        <form>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Enter your name(Required)"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Enter your email(Required)"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="(XXX)-XXX XXXX(Required)"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              id="message"
                              rows={5}
                              placeholder="Note to the Doctor"
                              defaultValue={""}
                            />
                          </div>
                          <p className="contactinfo">
                            Please do not submit any Protected Health
                            Information (PHI).
                          </p>
                          <div className="text-center mb-4">
                            <button
                              type="submit"
                              className="btn btn-primary"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                      <div
                        className="leadForm_wNZ3vxkqjau01j0LCMMlceGS"
                        data-control="form"
                        data-template-id="custom-website-custom-template"
                        data-mhorgid
                      />
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
}

export default ContactUs;