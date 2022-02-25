import styled from "styled-components";
import { ReactComponent as Gift } from "../../../assets/images/background/giftvouchersimg.svg";
import { ReactComponent as Loyaltyimg } from "../../../assets/images/background/loyaltyimg.svg";
import { ReactComponent as Mealvouchersimg } from "../../../assets/images/background/mealvouchersimg.svg";
import { ReactComponent as Cashback } from "../../../assets/images/background/cashback.svg";

function Cases() {
  return (
    <Title className="container">
      <h2>Use cases</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et arcu
        neque adipiscing.
      </p>
      <UseCases>
        <Case>
          <Mealvouchersimg />
          <h4>Meal Vouchers</h4>
        </Case>
        <Case>
          <Cashback />
          <h4>Cashback networks</h4>
        </Case>
        <Case>
          <Loyaltyimg />
          <h4>Loyalty</h4>
        </Case>
        <Case>
          <Gift />
          <h4>Gift Vouchers</h4>
        </Case>
      </UseCases>
    </Title>
  );
}

export default Cases;

const Title = styled.div`
  margin-top: 100px;
  text-align: center;
`;

const UseCases = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Case = styled.div`
  width: 270px;
  height: 240px;
  border: 2px solid #f7f8f7;
  background-color: #f7f8f7;
  padding: 50px;
  h4 {
    margin-top: 20px;
  }
`;
