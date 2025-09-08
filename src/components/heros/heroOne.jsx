import SlideUp from "@/utils/animations/slideUp";
import Link from "next/link";
import React from "react";

const HeroOne = () => {
  return (
    <section className="banner overflow-hidden">
      <div className="container position-relative">
        <div className="row align-items-center py-3 py-lg-5" style={{ position: 'relative', zIndex: 1 }}>
          <div className="col-lg-8">
            <div className="banner__content">
              <div className="banner__content_title">
                <SlideUp>
                  <h1 className="fw-bold" style={{ fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: 1.1 }}>
                    Hi, I&apos;m Alika Maya
                  </h1>
                </SlideUp>
                <SlideUp delay={2}>
                  <p className="mt-3" style={{ fontSize: 'clamp(16px, 2vw, 22px)', opacity: 0.85, maxWidth: '46ch' }}>
                    Empowering Lives Through Style & Inspiration
                  </p>
                </SlideUp>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="banner__right position-relative">
              <img
                src="/images/banner/Shape.svg"
                alt="img"
                className="bg__shap"
                style={{ zIndex: 0 }}
              />
              <img
                src="/images/banner/Video.svg"
                alt="img"
                className="bg__video"
                style={{ zIndex: 0 }}
              />
              <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.25)', position: 'relative', zIndex: 2 }}>
                <div style={{ position: 'relative', paddingTop: '125%' }}>
                  <img
                    src="/images/banner/Rectangle96.png"
                    alt="img"
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 h-100 w-100" style={{ zIndex: 0 }}>
          {/* <div class="position-relative w-100 h-100"> */}
          <div className="banner__shap_1 banner__shap" />
          <div className="banner__shap_2 banner__shap" />
          <div className="banner__shap_3 banner__shap" />
          <div className="banner__shap_4 banner__shap" />
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default HeroOne;
