import HeroImage from "../../../assets/images/background/heroimage.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Hero() {
  return (
    <HeroSection className="container">
      <Content>
        <h1>Closed loop digital payments gateway</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices ut
          risus tellus commodo elementum tellus nec. Lobortis posuere sed duis
          nullam et tincidunt felis.
        </p>
        <Link to="">
          <button>Schedule a demo</button>
        </Link>
      </Content>
      <Image src={HeroImage} alt="Hero image"></Image>
    </HeroSection>
  );
}

export default Hero;

const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
`;

const Content = styled.div`
    padding-top: 150px;
    h1 {
        margin-bottom: 15px;
    }
    p {
        margin-bottom: 50px;
    }
`;

const Image = styled.img``;
