import Microsoft from "../../../assets/images/partners/Microsoft.svg";
import Elavon from "../../../assets/images/partners/elavon.svg";
import Ems from "../../../assets/images/partners/EMS.svg";
import Phos from "../../../assets/images/partners/phos_logo.svg";
import Nayax from "../../../assets/images/partners/logo_dark.svg";
import Twelve from "../../../assets/images/partners/twelve.svg";
import Adyen from "../../../assets/images/partners/adyen.svg";
import Freedompay from "../../../assets/images/partners/freedompay.svg";
import styled from "styled-components";

function Partners() {
  return (
    <Title className="container">
      <h2>Our partners</h2>
      <PartnersContainer>
        <img src={Adyen} alt="" />
        <img src={Ems} alt="" />
        <img src={Freedompay} alt="" />
        <img src={Elavon} alt="" />
        <img src={Twelve} alt="" />
        <img src={Nayax} alt="" />
        <img src={Microsoft} alt="" />
        <img src={Phos} alt="" />

        {/* they should be imgs not svg because you wont change anything on them. they are static */}
      </PartnersContainer>
    </Title>
  );
}

export default Partners;

const Title = styled.div`
  margin-top: 80px;
  text-align: center;
  h2 {
    border-bottom: 4px solid #02d871;
    display: inline-block;
    padding-bottom: 10px;
  }
`;

const PartnersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;
