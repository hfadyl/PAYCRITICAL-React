import styled from "styled-components";
import Thumbnail1 from "../../../assets/images/img/thumbnail.svg";
import Thumbnail2 from "../../../assets/images/img/thumbnail (1).svg";
import Thumbnail3 from "../../../assets/images/img/thumbnail (2).svg";

function Blog() {
  return (
    <Blogcontainer>
      <Title className="container">
        <h3>Blog</h3>
        <p>
          Stay tuned for news about payments and Paycritical - "the revolution
          starts with the information and ends with the result."
        </p>
      </Title>
      <Posts className="container">
        <Post>
          <img src={Thumbnail1} alt="thumbnail" />
          <h4>Fintech Meeting PSD2 - Bank of Portugal</h4>
          <p>
            Following the invitation from Bank of Portuga, PAYCRITICAL
            attended...
          </p>
          <button>CONTINUE READING</button>
          <Date>23 MAY</Date>
        </Post>
        <Post>
          <img src={Thumbnail2} alt="thumbnail" />
          <h4>SSL Certificates - Its importance and the existing options</h4>
          <p>
            Portugal, although incresingly digital, remains quite fragile with
            regard to security...
          </p>
          <button>CONTINUE READING</button>
        </Post>
        <Post>
          <img src={Thumbnail3} alt="thumbnail" />
          <h4>All struggles are worthwhile when you have a big heart</h4>
          <p>
            We never actually start anything. Although paradoxical, the
            beginning is always a...
          </p>
          <button>CONTINUE READING</button>
        </Post>
      </Posts>
    </Blogcontainer>
  );
}

export default Blog;

const Blogcontainer = styled.div`
  background-color: #f7f8f7;
  margin-top: 60px;
  padding-top: 50px;
  padding-bottom: 100px;
`;

const Title = styled.div`
  text-align: center;
  h3 {
    font-weight: 600;
    color: #222222;
  }
  p {
    margin-top: 10px;
    width: 650px;
    display: inline-block;
  }
`;

const Posts = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

const Post = styled.div`
  background-color: #ffffff;
  width: 367px;
  height: 452px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.02);
  button {
    color: #02a556;
    background-color: #ffffff;
    text-align: center;
    margin-top: auto;
    padding: 25px 35px;
  }
  h4 {
    margin-top: 15px;
  }
  p {
    text-align: center;
  }
  position: relative;
`;

const Date = styled.time`
  border: 2px solid black;
  width: 66px;
  height: 73px;
  background-color: #FFFFFF;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.05);
  position: absolute;
  right: 20px;
  top: 20px;
`;
