import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/logo/logo 2.svg";
import { ReactComponent as Twitter } from "../assets/images/icons/twitter.svg";
import { ReactComponent as Facebook } from "../assets/images/icons/facebook.svg";
import { ReactComponent as Linkedin } from "../assets/images/icons/linkedin.svg";
import { ReactComponent as Medium } from "../assets/images/icons/medium.svg";

function Footer() {
  return (
    <FooterContainer>
      <Content className="container">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
          <p>Digital payment solutions for prepaid cards.</p>
        </div>
        <div className="language">
          <h6>LANGUAGE</h6>
          <select>
            <option>English</option>
            <option>French</option>
          </select>
        </div>
        <div className="company">
          <h6>COMPANY</h6>
          <Link to="">Features</Link>
          <Link to="">Blog</Link>
          <Link to="">Cookies Policy</Link>
        </div>
        <div className="contact">
          <h6>CONTACT US</h6>
          <p>info@paycritical.com</p>
          <p>+351 211 451 620 (Mon-fri 8:00 - 20:00)</p>
          <a href="#">
            <Twitter />
          </a>
          <a href="#">
            <Linkedin />
          </a>
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Medium />
          </a>
        </div>
        <div className="address">
          <h6>ADDRESS</h6>
          <p>Alameda dos Oceanos, 41R 1990-203 Lisbon</p>
        </div>
      </Content>
      <Copyright className="container">
        <p>2020 © Paycritical. All rights reserved</p>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background-color: #32483e;
  padding-top: 60px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  .logo {
    svg {
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
    p {
      width: 235px;
      color: #ffffff;
      font-size: 12px;
      line-height: 150.6%;
      opacity: 0.8;
      margin-top: 20px;
    }
  }
  .address {
    width: 235px;
    p {
      margin-top: 20px;
      color: #ffffff;
      font-size: 12px;
      line-height: 150.6%;
      opacity: 0.8;
    }
  }
  .contact {
    width: 190px;
    p {
      margin-top: 20px;
      color: #ffffff;
      font-size: 12px;
      line-height: 150.6%;
      opacity: 0.8;
    }
    svg {
      margin-right: 13px;
      margin-top: 30px;
    }
  }
  .language {
    select {
      background-color: #32483e;
      outline: none;
      border: none;
      margin-top: 20px;
      color: #ffffff;
      font-size: 12px;
      line-height: 150.6%;
      opacity: 0.8;
    }
  }
  .company {
    display: flex;
    flex-direction: column;
    a {
      margin-top: 20px;
      color: #ffffff;
      font-size: 12px;
      line-height: 150.6%;
      opacity: 0.8;
    }
  }
`;

const Copyright = styled.div`
  margin-top: 80px;
  text-align: center;
  padding-bottom: 20px;
  p {
    color: #ffffff;
    font-size: 12px;
    line-height: 150.6%;
    opacity: 0.8;
  }
`;
