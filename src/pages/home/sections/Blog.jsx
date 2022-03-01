import styled from "styled-components";
import Thumbnail1 from "../../../assets/images/img/thumbnail.svg";
import Thumbnail2 from "../../../assets/images/img/thumbnail (1).svg";
import Thumbnail3 from "../../../assets/images/img/thumbnail (2).svg";
import { Link } from "react-router-dom";

function Blog() {
  const data = [
    {
      id: 1,
      Thumbnail: Thumbnail1,
      title: "Fintech Meeting PSD2 - Bank of Portugal",
      description:
        "Following the invitation from Bank of Portuga, PAYCRITICAL attended",
      date: {
        day: "23",
        month: "MAY",
      },
    },
    {
      id: 2,
      Thumbnail: Thumbnail2,
      title: "SSL Certificates - Its importance and the existing options",
      description:
        "Portugal, although incresingly digital, remains quite fragile with regard to security",
        date: {
          day: "23",
          month: "MAY",
        },
    },
    {
      id: 3,
      Thumbnail: Thumbnail3,
      title: "All struggles are worthwhile when you have a big heart",
      description:
        "We never actually start anything. Although paradoxical, the beginning is always a",
        date: {
          day: "23",
          month: "MAY",
        },
    },
  ];
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
        {data.map((item, index) => (
          <Post key={index}>
            <img src={item.Thumbnail} alt="thumbnail" />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <Link to={"/blogs/" + item.id}>CONTINUE READING</Link>
            <Date>
              {item.date.day}<Month>{item.date.month}</Month>
            </Date>
          </Post>
        ))}
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
  a {
    color: #02a556;
    background-color: #ffffff;
    text-align: center;
    margin-top: auto;
    padding: 25px 35px;
    display: flex;
  }
  h4 {
    margin-top: 15px;
  }
  p {
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; // number of lines to show
    -webkit-box-orient: vertical;
    line-height: 1.5;
  }
  position: relative;
`;

const Date = styled.time`
  border: 2px solid #ffffff;
  width: 66px;
  height: 73px;
  background-color: #ffffff;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.05);
  position: absolute;
  right: 20px;
  top: 20px;
`;

const Month = styled.p`
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #02170d;
`;
