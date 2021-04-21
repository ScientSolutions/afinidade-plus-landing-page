import React from "react";

const ContactUsPageSection: React.FC = () => {
  return (
    <section className="contact-us-section ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-lg-9">
            <div className="section-heading mb-4">
              <h2>Reach us quickly</h2>
              <p className="lead">
                We provide professional services for grow your business and
                increases sell digital product. Increase sales by showing true
                dynamics of your website.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <form
              method="POST"
              id="contactForm1"
              className="contact-us-form"
              noValidate
            >
              <div className="row">
                <div className="col-sm-6 col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter name"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="company"
                      size={40}
                      className="form-control"
                      id="company"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-12">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      id="phone"
                      placeholder="Your Phone"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows={7}
                      cols={25}
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 mt-3">
                  <button
                    type="submit"
                    className="btn solid-btn"
                    id="btnContactUs"
                  >
                    SEND
                  </button>
                </div>
              </div>
            </form>
            <p className="form-message"></p>
          </div>
          <div className="col-md-5">
            <div className="contact-info-wrap">
              <ul className="list-creative">
                <li>
                  <dl className="list-terms-medium address">
                    <dt>Address</dt>
                    <dd>
                      <p>
                        212 Prospect Ave, Brooklyn, New York <br /> United
                        States{" "}
                      </p>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl className="list-terms-medium phone">
                    <dt>Phones</dt>
                    <dd>
                      <ul className="list-comma">
                        <li>
                          Support:{" "}
                          <a href="tel:+1-800-700-6200">+1-800-700-6200 </a>
                        </li>
                        <li>
                          Sales:{" "}
                          <a href="tel:+1-800-955-4567">+1-800-955-4567</a>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl className="list-terms-medium email">
                    <dt>E-mails</dt>
                    <dd>
                      <ul className="list-comma">
                        <li>
                          Support:{" "}
                          <a href="mailto:support@yourdomain.com">
                            support@yourdomain.com
                          </a>
                        </li>
                        <li>
                          Query:{" "}
                          <a href="mailto:query@yourdomain.com">
                            query@yourdomain.com
                          </a>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPageSection;
