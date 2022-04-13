import "./style.css";
import linkin from "../img/linkedin-brands.svg";
import twitter from "../img/twitter-square-brands.svg";
import fb from "../img/facebook-square-brands.svg";
import ig from "../img/instagram-square-brands.svg";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://twitter.com/AkinolaKb">
        <img src={twitter} alt="" srcset="" />
      </a>
      <a href="https://www.facebook.com/akinola.kb/">
        <img src={fb} alt="" srcset="" />
      </a>{" "}
      <a href="https://www.facebook.com/akinola.kb/">
        <img src={ig} alt="" srcset="" />
      </a>{" "}
      <a href="https://www.linkedin.com/in/ibrahim-kolabalogun-7130631b9/">
        <img src={linkin} alt="" srcset="" />
      </a>
    </div>
  );
};

export default Footer;
