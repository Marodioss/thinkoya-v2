import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./About.css";

export const About = () => {
  //about us page content
  return (
    <>
      <div className="aboutus-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="aboutus">
                <h2 className="aboutus-title">About Us</h2>
                <p className="aboutus-text">
                  Thinkoya est une entreprise dynamique et novatrice qui est
                  dédiée à aider ses clients à atteindre leurs objectifs. Nous
                  nous spécialisons dans la fourniture de services de
                  consultation et de support de haute qualité aux entreprises de
                  toutes tailles et nous nous engageons à offrir des résultats
                  exceptionnels à nos clients. Avec une équipe de professionnels
                  expérimentés et compétents, thinkoya est bien équipé pour
                  faire face à un large éventail de défis et aider nos clients à
                  réussir sur le marché concurrentiel d'aujourd'hui. Que vous
                  cherchiez à améliorer vos opérations, à étendre votre portée
                  ou simplement à recevoir des conseils et un soutien, thinkoya
                  est là pour vous aider. Contactez-nous dès aujourd'hui pour en
                  savoir plus sur ce que nous pouvons faire pour vous !
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="aboutus-banner">
                <img src="./DSC_2818.jpg" className="admin" />
                <img src="./DSC_2823.jpg" className="admin" />
              </div>
            </div>
            <div className="col-md-5 col-sm-6 col-xs-12">
              <div className="feature">
                <div className="feature-box">
                  <div className="clearfix">
                    <div className="iconset">
                      <span className="glyphicon glyphicon-cog icon"></span>
                    </div>
                    <div className="feature-content">
                      <h4>Work with heart</h4>
                      <p>
                        Working with heart means putting passion and enthusiasm
                        into everything we do. This can motivate us and help us
                        perform at our best. When we are passionate about our
                        work, we are more likely to take on challenges and
                        succeed. Plus, working with heart can make us happy and
                        fulfilled. So, always let your passion guide you in your
                        career!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="feature-box">
                  <div className="clearfix">
                    <div className="iconset">
                      <span className="glyphicon glyphicon-cog icon"></span>
                    </div>
                    <div className="feature-content">
                      <h4>Reliable services</h4>
                      <p>
                        Reliable services are essential for businesses and
                        organizations of all sizes. When a company provides
                        reliable services, it means that their customers can
                        count on them to deliver high-quality products and
                        services on time and as promised. This can help to build
                        trust and credibility with customers and can lead to
                        long-term relationships and repeat business.
                        Additionally, reliable services can help to improve a
                        company's reputation and can attract new customers. So,
                        whether you're a business owner or a customer, look for
                        companies that offer reliable services and you can be
                        confident that you'll receive the support you need.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="feature-box">
                  <div className="clearfix">
                    <div className="iconset">
                      <span className="glyphicon glyphicon-cog icon"></span>
                    </div>
                    <div className="feature-content">
                      <h4>Great support</h4>
                      <p>
                        Great support is essential for businesses and
                        organizations. When a company provides great support,
                        their customers can count on them for help. This can
                        build trust and lead to long-term relationships. Plus,
                        great support can improve a company's reputation and
                        attract new customers. So, look for companies that offer
                        great support and you can be confident you'll receive
                        the assistance you need.
                      </p>
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

export default About;
