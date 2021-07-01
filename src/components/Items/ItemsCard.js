import React from "react";
import styled from "styled-components";

const Card = ({ data, cardIndex }) => {
    return (
        <Components>
            {data[cardIndex].map(item => (
                <Content>
                    <p>{item.title}</p>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={item.image} alt="item image"/>
                </Content>
            ))}
        </Components>
    );
};
const Components = styled.div `
  padding-left: 30rem;
  @media (max-width: 768px) {
    padding-left: 0.6rem;
  }
`
const Content = styled.div `
    p{
      color: blanchedalmond;
      text-align: center;
      padding-bottom: 2rem;
      padding-left: 2rem;
      font-size: 2.2rem;
      font-weight: 600;
    }
  @media (max-width: 768px) {
    p{
      color: blanchedalmond;
      text-align: center;
      padding-left: 5rem;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
`
export default Card;
