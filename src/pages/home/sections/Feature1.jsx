import HeroImage from "../../../assets/images/background/featuresimg1.svg";
import styled from "styled-components";

function Feature1() {
  return (
    <Feature className="container">
      <Title>
        <h2>A whitelabel fully customizable platform</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et arcu
          neque adipiscing.
        </p>
      </Title>
      <Feature2>
        <Content>
          <h3>Omnichannel</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, etiam
            aliquam sit vitae, quisque a egestas.
          </p>
          <h3>APIs 360</h3>
          <span>POS, Online, Unattended Vending Machines</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            euismod enim, gravida arcu nisl.
          </p>
        </Content>
        <Image src={HeroImage} alt="Hero image"></Image>
      </Feature2>
    </Feature>
  );
}

export default Feature1;

const Feature = styled.div``;

const Title = styled.div`
  h2 {
    margin-top: 150px;
	text-align: center;
  }
  p {
    width: 480px;
    height: 55px;
    text-align: center;
    margin: auto;
  }
`;

const Feature2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  Image {
    margin-right: auto;
  }
`;

const Content = styled.div`
margin-top: 20px;
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
  p {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 500px;
  }
  span, p {
    margin-left: 40px;
}
`;

const Image = styled.img``;
