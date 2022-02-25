import HeroImage from "../../../assets/images/background/featuresimg3.svg";
import styled from "styled-components";

function Feature3() {
  return (
    <Feature className="container">
      <Content>
        <h3>Merchant’s Portal</h3>
        <ul>
          <li>Virtual Terminal</li>
          <li>Developer’s Center - Simulator, Webhooks,</li>
          <li>Plugins for CMS</li>
          <li>Realtime</li>
        </ul>
        <h3>Security Centric</h3>
        <span>2FA, Anti-Fraud Protection</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
          euismod enim, gravida arcu nisl.
        </p>
      </Content>
      <Image src={HeroImage} alt="Hero image"></Image>
    </Feature>
  );
}

export default Feature3;

const Feature = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;

const Content = styled.div`
ul {
    margin-left: 60px;
}

span, p {
    margin-left: 40px;
}
p {
    width: 500px;
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

const Image = styled.img``;
