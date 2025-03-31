import PropTypes from "prop-types";
import OwlCarousel from "react-owl-carousel";
import { FaAngleRight } from "react-icons/fa";

const Header = ({
  items,
  className = "welcome-area-wrap",
  autoplayTimeout = 10000,
}) => {
  return (
    <div className={`${className} welcome__wrap1`} id="inicio">
      <OwlCarousel
        className="welcome-carousel owl-theme"
        dots={false}
        margin={10}
        items={1}
        loop
        autoplayTimeout={autoplayTimeout}
      >
        {items.map((item, index) => (
          <div className="single-welcome-area home_1" key={index}>
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="wlc-title white">
                    <h1 className="animate__fadeInDown animate__animated">
                      <span>{item.title}</span>
                      <br /> {item.subtitle}
                    </h1>
                    <p className="animate__fadeInDown animate__animated">
                      {item.description}
                    </p>
                    <a
                      href={item.buttonLink}
                      className="cbtn cbnt1 animate__fadeInDown animate__animated"
                    >
                      {item.buttonText} <FaAngleRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="wlc-author-1">
              <img
                className="animate__animated animate__pulse"
                src={item.authorImg}
                alt={item.authorTitle}
              />
              <h1 className="wlc-filltext">{item.authorTitle}</h1>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

Header.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      buttonLink: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
      authorImg: PropTypes.string.isRequired,
      authorTitle: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
  autoplayTimeout: PropTypes.number,
};

export default Header;
