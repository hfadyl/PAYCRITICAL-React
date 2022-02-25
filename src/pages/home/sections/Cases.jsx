import styled from "styled-components";
import { ReactComponent as Gift } from "../../../assets/images/background/giftvouchersimg.svg";
import { ReactComponent as Loyaltyimg } from "../../../assets/images/background/loyaltyimg.svg";
import { ReactComponent as Mealvouchersimg } from "../../../assets/images/background/mealvouchersimg.svg";
import { ReactComponent as Cashback } from "../../../assets/images/background/cashback.svg";

function Cases() {
  return (
    <Title>
      <h2>Use cases</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et arcu
        neque adipiscing.
      </p>
    </Title>
  );
}

export default Cases;

const Title = styled.div`
    margin-top: 100px;
    text-align: center;
`;
