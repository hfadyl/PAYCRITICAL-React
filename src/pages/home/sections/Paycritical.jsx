import { ReactComponent as Phone } from "../../../assets/images/icons/smartphone.svg";
import { ReactComponent as Slash } from "../../../assets/images/icons/slash.svg";
import { ReactComponent as Tag } from "../../../assets/images/icons/tag.svg";
import { ReactComponent as Nonstop } from "../../../assets/images/icons/nonstop.svg";
import styled from "styled-components";

function Paycritical() {
  return (
    <Why className="container">
      <h3>Why Paycritical</h3>
      <First>
        <div>
          <Nonstop style={style}/>
          <p>Built for closed loop solutions</p>
        </div>
        <div>
          <Slash style={style}/>
          <p>Independence from payment providers</p>
        </div>
      </First>
      <Second>
        <div>
          <Phone style={style}/>
          <p>Integrate on your own mobile app</p>
        </div>
        <div>
          <Tag style={style}/>
          <p>Adaptable to your business requirements</p>
        </div>
      </Second>
    </Why>
  );
}

export default Paycritical;

const Why = styled.div`
  width: 1200px;
  height: 550px;
  background-color: #04b560;
  margin-top: 130px;
  h3 {
    text-align: center;
    padding-top: 100px;
    font-size: 30px;
    line-height: 35px;
    color: #ffffff;
  }
`;

const First = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    margin-top: 50px;
    margin-left: 100px;
    margin-right: 100px;
    border: 2px solid #04B560;
    padding: 30px;
    width: 400px;
    background-color: #ffffff3e;
  }
  p {
    margin-left: 10px;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
  }
`;

var style = {
    width: "40px",
    height: "35px",
};

const Second = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    margin-top: 50px;
    margin-left: 100px;
    margin-right: 100px;
    border: 2px solid #04B560;
    padding: 30px;
    width: 400px;
    background-color: #ffffff3e;
  }
  p {
    margin-left: 10px;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
  }
`;
