import React, { forwardRef, useRef } from "react";
import "../styles/roadmap.css";

const Roadmap = forwardRef(({ onBackClick }, ref) => {
  return (
    <div ref={ref} className="road-map">
      <p>Roadmap</p>

    
      <div className="section-timeline">
        <div className="container">
          <div className="timeline-wrapper">
            <div className="timeline-progress">
              <div className="timeline-progress-bar"></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item-left">
                <div className="timeline-date-text">25%</div>
              </div>
              <div className="timeline-center">
                <div className="timeline-circle"></div>
              </div>
              <div className="timeline-right">
                <div className="margin-bottom-xlarge">
                  <div className="timeline-text">
                    Sell out the entire collection and open the gates. We will
                    release all caged cows of which society shall embrace in all
                    forms and color.
                  </div>
                </div>
                <div className="timeline-image-wrapper">
                  <img
                    src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018.png"
                    loading="lazy"
                    width="480"
                    // sizes="(max-width: 479px) 48px, (max-width: 767px) 64px, 36vw"
                    srcSet="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018-p-500.png 500w, https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018-p-1600.png 1600w, https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018-p-2000.png 2000w, https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018.png 2160w"
                    alt=""
                    class="image-2"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item-left">
                <div className="timeline-date-text">50%</div>
              </div>
              <div className="timeline-center">
                <div className="timeline-circle"></div>
              </div>
              <div className="timeline-right">
                <div className="margin-bottom-xlarge">
                  <div className="timeline-text">
                    Sell out the entire collection and open the gates. We will
                    release all caged cows of which society shall embrace in all
                    forms and color.
                  </div>
                </div>
                <div className="timeline-image-wrapper">
                  <img
                    src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018.png"
                    loading="lazy"
                    width="480"
                    sizes="(max-width: 479px) 48px, (max-width: 767px) 64px, 36vw"
                    srcSet="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018-p-500.png 500w, https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018-p-1600.png 1600w, https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018-p-2000.png 2000w, https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018.png 2160w"
                    alt=""
                    class="image-2"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item-left">
                <div className="timeline-date-text">75%</div>
              </div>
              <div className="timeline-center">
                <div className="timeline-circle"></div>
              </div>
              <div className="timeline-right">
                <div className="margin-bottom-xlarge">
                  <div className="timeline-text">
                    Sell out the entire collection and open the gates. We will
                    release all caged cows of which society shall embrace in all
                    forms and color.
                  </div>
                </div>
                <div className="timeline-image-wrapper">
                  <img
                    src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018.png"
                    loading="lazy"
                    width="480"
                    sizes="(max-width: 479px) 48px, (max-width: 767px) 64px, 36vw"
                    srcSet="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018-p-500.png 500w, https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018-p-1600.png 1600w, https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018-p-2000.png 2000w, https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018.png 2160w"
                    alt=""
                    class="image-2"
                  />
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item-left">
                <div className="timeline-date-text">100%</div>
              </div>
              <div className="timeline-center">
                <div className="timeline-circle"></div>
              </div>
              <div className="timeline-right">
                <div className="margin-bottom-xlarge">
                  <div className="timeline-text">
                    Sell out the entire collection and open the gates. We will
                    release all caged cows of which society shall embrace in all
                    forms and color.
                  </div>
                </div>
                <div className="timeline-image-wrapper">
                  <img
                    src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018.png"
                    loading="lazy"
                    width="480"
                    sizes="(max-width: 479px) 48px, (max-width: 767px) 64px, 36vw"
                    srcSet="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018-p-500.png 500w, https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018-p-1600.png 1600w, https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018-p-2000.png 2000w, https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368f9ed5f36f42f2ee40_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010018.png 2160w"
                    alt=""
                    class="image-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Roadmap;
