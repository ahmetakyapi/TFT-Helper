import React, {Component} from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import oneCostChampionsData from "./oneCostChampions.json";
import twoCostChampionsData from "./twoCostChampions.json";
import threeCostChampionsData from "./threeCostChampions.json";
import fourCostChampionsData from"./fourCostChampions.json";
import fiveCostChampionsData from "./fiveCostChampions.json";

class Champions extends Component {
    render() {
        return (
            <Container>
                <Navbar/>
                <OneCostTitle>
                    <h1>One Cost Champions</h1>
                </OneCostTitle>
                <OneCostChamps>
                    {oneCostChampionsData.map((oneCostChampions) => {
                        return <div>
                            <h2>{oneCostChampions.title} </h2>
                            <img src={oneCostChampions.image} alt=""/>
                            <p>{oneCostChampions.traits1}</p>
                            <p>{oneCostChampions.traits2} </p>
                            <p>{oneCostChampions.traits3}</p>
                        </div>
                    })}
                </OneCostChamps>
                <TwoCostTitle>
                    <h1>Two Cost Champions</h1>
                </TwoCostTitle>
                <TwoCostChamps>
                    {twoCostChampionsData.map((twoCostChampions) => {
                        return <div>
                            <h2>{twoCostChampions.title} </h2>
                            <img src={twoCostChampions.image} alt=""/>
                            <p>{twoCostChampions.traits1}</p>
                            <p>{twoCostChampions.traits2} </p>
                            <p>{twoCostChampions.traits3}</p>
                        </div>
                    })}
                </TwoCostChamps>
                <ThreeCostTitle>
                    <h1>Three Cost Champions</h1>
                </ThreeCostTitle>
                <ThreeCostChamps>
                    {threeCostChampionsData.map((threeCostChampions) => {
                        return <div>
                            <h2>{threeCostChampions.title} </h2>
                            <img src={threeCostChampions.image} alt=""/>
                            <p>{threeCostChampions.traits1}</p>
                            <p>{threeCostChampions.traits2} </p>
                            <p>{threeCostChampions.traits3}</p>
                        </div>
                    })}
                </ThreeCostChamps>
                <FourCostTitle>
                    <h1>Four Cost Champions</h1>
                </FourCostTitle>
                <FourCostChamps>
                    {fourCostChampionsData.map((fourCostChampions) => {
                        return <div>
                            <h2>{fourCostChampions.title} </h2>
                            <img src={fourCostChampions.image} alt=""/>
                            <p>{fourCostChampions.traits1}</p>
                            <p>{fourCostChampions.traits2} </p>
                            <p>{fourCostChampions.traits3}</p>
                        </div>
                    })}
                </FourCostChamps>

                <FiveCostTitle>
                    <h1>Five Cost Champions</h1>
                </FiveCostTitle>
                <FiveCostChamps>
                    {fiveCostChampionsData.map((fiveCostChampions) => {
                        return <div>
                            <h2>{fiveCostChampions.title} </h2>
                            <img src={fiveCostChampions.image} alt=""/>
                            <p>{fiveCostChampions.traits1}</p>
                            <p>{fiveCostChampions.traits2} </p>
                            <p>{fiveCostChampions.traits3}</p>
                        </div>
                    })}
                </FiveCostChamps>
            </Container>
        )
    }
}
const Container = styled.div `
  background: #13334C;
  height: 490vh;
`

 const OneCostTitle = styled.div `
  padding-top: 6rem;
   text-align: center;
   color: darkgray;
 `
 const OneCostChamps = styled.div `
     display: flex;
     flex-wrap: wrap;
     justify-content: flex-start;
     padding-left: 24rem;
     padding-top: 4rem;
   div {
     width: 24rem;
   }
   img {
     width: 240px;
     padding-bottom: 1rem;
   }
   h2 {
     text-align: center;
     color: darkgoldenrod;
     padding-right: 8rem;
     padding-bottom: 1rem;
     padding-top: 1.5rem;
   }
   p{
     text-align: center;
     color: khaki;
     font-weight: 500;
     padding-right: 8rem;
     padding-bottom: 0.5rem;
   }
 `
 const TwoCostTitle = styled.div `
   padding-top: 4rem;
   text-align: center;
   color: mediumseagreen;
 `
const TwoCostChamps = styled.div `
     display: flex;
     flex-wrap: wrap;
     justify-content: flex-start;
     padding-left: 24rem;
     padding-top: 4rem;
   div {
     width: 24rem;
   }
   img {
     width: 240px;
     padding-bottom: 1rem;
   }
   h2 {
     text-align: center;
     color: darkgoldenrod;
     padding-right: 8rem;
     padding-bottom: 1rem;
     padding-top: 1.5rem;
   }
   p{
     text-align: center;
     color: khaki;
     font-weight: 500;
     padding-right: 8rem;
     padding-bottom: 0.2rem;
   }
 `
const ThreeCostTitle = styled.div `
   padding-top: 4rem;
   text-align: center;
   color: dodgerblue;
 `
const ThreeCostChamps = styled.div `
     display: flex;
     flex-wrap: wrap;
     justify-content: flex-start;
     padding-left: 24rem;
     padding-top: 2rem;
   div {
     width: 24rem;
   }
   img {
     width: 240px;
     padding-bottom: 1rem;
   }
   h2 {
     text-align: center;
     color: darkgoldenrod;
     padding-right: 8rem;
     padding-bottom: 1rem;
     padding-top: 1.5rem;
   }
   p{
     text-align: center;
     color: khaki;
     font-weight: 500;
     padding-right: 8rem;
     padding-bottom: 0.2rem;
   }
 `
const FourCostTitle = styled.div `
   padding-top: 4rem;
   text-align: center;
   color: mediumpurple;
 `
const FourCostChamps = styled.div `
     display: flex;
     flex-wrap: wrap;
     justify-content: flex-start;
     padding-left: 24rem;
     padding-top: 4rem;
   div {
     width: 24rem;
   }
   img {
     width: 240px;
     padding-bottom: 1rem;
   }
   h2 {
     text-align: center;
     color: darkgoldenrod;
     padding-right: 8rem;
     padding-bottom: 1rem;
     padding-top: 1.5rem;
   }
   p{
     text-align: center;
     color: khaki;
     font-weight: 500;
     padding-right: 8rem;
     padding-bottom: 0.2rem;
   }
 `
const FiveCostTitle = styled.div `
   padding-top: 2rem;
   text-align: center;
   color: goldenrod;
 `
const FiveCostChamps = styled.div `
     display: flex;
     flex-wrap: wrap;
     justify-content: flex-start;
     padding-left: 24rem;
     padding-top: 4rem;
   div {
     width: 24rem;
   }
   img {
     width: 240px;
     padding-bottom: 1rem;
   }
   h2 {
     text-align: center;
     color: darkgoldenrod;
     padding-right: 8rem;
     padding-bottom: 1rem;
     padding-top: 1.5rem;
   }
   p{
     text-align: center;
     color: khaki;
     font-weight: 500;
     padding-right: 8rem;
     padding-bottom: 0.2rem;
   }
 `
export default Champions