import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Subscribe Form */}
        <div className="subscribe">
          <div className="row">
            <div className="col-lg-8">
              <h2>Subscribe to our newsletter &amp; get more information</h2>
            </div>
            <div className="col-lg-4 mt-5 mt-lg-0">
              <div>
                <input type="text" placeholder="Your Email" />
                <button className="common__btn">
                  <span>Subscribe Now</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        {/* Subscribe Form */}
        {/* -------Logo and socal icon */}
        <div className="row footer__lo_co">
          <div className="col-12">
            <h1 className="text-center text-white">
              Send us a message and let’s talk about your project
            </h1>
          </div>
          <div className="col-12 mt-3">
            <form className="footer__form" action="#" method="post">
              <div className="form__grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  aria-label="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  aria-label="Your Email"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                aria-label="Your Message"
              ></textarea>
              <button type="submit" className="common__btn">
                <span>Send Message</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
          </div>
          <div className="col-12 mt-3">
            <div className="d-flex justify-content-center">
              <Link
                href={"#"}
                className="d-flex align-items-center footer__logo"
              >
                <img src="/images/logo_white.svg" alt="img" />
                <h5>Digiv</h5>
              </Link>
            </div>
            <ul className="d-flex justify-content-center gap-3 footer__socal">
              <li>
                <Link href={"#"}>
                  <i className="fa-brands fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <i className="fa-brands fa-pinterest-p" />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <i className="fa-brands fa-instagram" />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <i className="fa-brands fa-twitter" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row footer__copyright">
          <div className="col-12">
            <hr className="footer__border" />
            <p className="text-center">
              © Copyright 2025 All Rights Reserved by{" "}
              <Link href={"#"}>digiv</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
