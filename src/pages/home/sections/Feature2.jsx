import HeroImage from "../../../assets/images/background/featuresimg2.svg";
import styled from "styled-components";

function Feature2() {
  return (
    <Feature className="container">
      <Image src={HeroImage} alt="Hero image"></Image>
      <Content>
        <h3>QR Code and Phonenumber payments</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, etiam
          aliquam sit vitae, quisque a egestas.
        </p>
        <h3>Authorizations, Captures and Refunds</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
          euismod enim, gravida arcu nisl.
        </p>
      </Content>
    </Feature>
  );
}

export default Feature2;

const Feature = styled.div`
margin-top: 100px;
  display: flex;
  justify-content: space-between;
  `;
const Image = styled.img``;

const Content = styled.div`
p {
    width: 500px;
    margin-left: 40px;
}
h3 {
    display: flex;
    align-items: center;
    &::before {
      content: "";
      width: 30px;
      height: 3px;
      background-color: #02D871;
      display: inline-block;
      margin-right: 20px;
    }
    margin-top: 50px;
  }
`;
