import { ReactComponent as Logo } from "../assets/images/logo/logo 1.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <Nav className="container">
      <NavLeft>
        <Logo />
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </NavLeft>
      <NavRight>
        <Select>
          <option>En</option>
          <option>Fr</option>
        </Select>
        <StyledLink to="/contact">Contact us</StyledLink>
      </NavRight>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.header`
  background-color: #f7f8f7;
  height: 75px;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 25%;
  height: 40px;
  margin: 17px;
  margin-top: 27px;
  margin-bottom: 17px;
`;

const NavRight = styled.div`
`;

const Select = styled.select`
  background-color: #f7f8f7;
  outline: none;
  border: none;
  font-family: Montserrat;
`;

const StyledLink = styled(Link)`
  border: 1px solid #222222;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 15px;
  padding: 5px;
  padding-left: 25px;
  padding-right: 25px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-left: 35px;
  text-decoration: none;
`;
