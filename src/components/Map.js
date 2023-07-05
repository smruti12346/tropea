import React from "react";

function Map() {
  return (
    <>
      <div
        className="section-base-container"
        data-section-id="id_ef66bf9b-b36a-5643-8260-79a11976b34c"
      >
        <div className="section-overlap-container" />
        <div
          id="id_ef66bf9b-b36a-5643-8260-79a11976b34c"
          data-control="section"
          className="section section__bg--dark-1 forms--fullwidth forms-option--a section-map"
        >
          <div className="section--inner container-fluid section--dark ">
            <div className="row equal">
              <div className="col-lg-12 section__column-1 col-sm-12 alias-map_home">
                <div className="componentWith__container map__container ">
                  <div
                    className="ple-column--single ple-module-container map_home__container--inner map__container--inner"
                    data-component-name="map_home"
                    data-component-alias="map_home"
                    data-widget-alias="SMB__Map__Widgets__MapSettings___map_home"
                    data-widget-id-base="MapSettings-SMB__Map__Widgets__MapSettings___map_home"
                    data-component-prop-componentwith={12}
                  >
                    <div className="map component ">
                      <div className="map-a map-a--12">
                        <div className="map__wrap">
                          <div className="map__container row">
                            <div className="map__col col-sm-12 col-lg-5">
                              <div className="map__title-caption-wrap">
                                <h2 className="map__title component__title">
                                  Location
                                </h2>
                                <h3 className="map__caption component__subtitle">
                                  Find us on the map
                                </h3>
                              </div>
                              <div className="map-search">
                                <div className="map-search__location">
                                  <div className="map-search__location-distance">
                                    <span>--</span>
                                    <b>mi</b>
                                    <h3>
                                      <b>Primary Location</b>
                                    </h3>
                                  </div>
                                  <div className="map-search__location-address">
                                    <b>Address</b>
                                    <p>
                                      260 S Sunnyvale Ave #2
                                      <br />
                                      Sunnyvale, CA 94086, US
                                    </p>
                                  </div>
                                  <div className="map-search__location-contact">
                                    <b>Contact Information</b>
                                    <a
                                      className="map-search__location-phone"
                                      href="tel:(408) 329-9604"
                                    >
                                      (408) 329-9604
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="gmap"
                          className="js-mapComponent map__display"
                          data-offset="right"
                          data-zoom={15}
                          data-markerclick
                          data-alwaysshowinfowindow={1}
                          data-allowzoom={1}
                          data-map='{"width":100,"height":100,"autoFit":true,"assetsPath":"plugins\/smb\/map\/assets\/","hue":{"stylers":[{"gama":"1,61"},{"lightness":"-7"},{"hue":"none"}]},"icon":"default","iconColor":"default","iconUrl":"","zoom":15,"zoomControl":true,"streetViewControl":false,"mapTypeControl":false,"showAddressOnHover":false,"alwaysShowInfoWindow":true,"fitBounds":true,"xaxis":-150,"yaxis":0,"isPle":true,"locations":[{"latitude":37.374949999999998,"longitude":-122.029579,"address":"260 S Sunnyvale Ave #2, Sunnyvale, CA 94086, US","address_format":{"first":"260 S Sunnyvale Ave #2","second":"Sunnyvale, CA 94086, US"},"title":"Primary Location","cta":{"buttonStyle":"0","displayStyle":"1","buttonText":"Call To Action","iconClass":"","linkType":"2","linkPage":"\/","linkUrl":"","openInNew":false},"phone":"(408) 329-9604","phone2":"","fax":"(408) 262-1321","city":"Sunnyvale","country":"US","state":"CA","zip":"94086","name":"Primary Location","ID":"location_6479ccb741fe8","email":"sunnyvalehealth@gmail.com"}]}'
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
    </>
  );
}

export default Map;
