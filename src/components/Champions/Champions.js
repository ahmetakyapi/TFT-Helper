import React, {Component} from "react";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import oneCostChampionsData from "./oneCostChampions.json";

class Champions extends Component {
    render() {
        return (
            <div className="ui grid container">
                <Navbar/>
                <Champs>
                    {oneCostChampionsData.map((oneCostChampions) => {
                        return <div>
                            <h2>{oneCostChampions.title} </h2>
                            <img src={oneCostChampions.image} alt=""/>
                            <p>{oneCostChampions.traits1}</p>
                            <p>{oneCostChampions.traits2} </p>
                            <p>{oneCostChampions.traits3}</p>
                        </div>
                    })}
                </Champs>
            </div>
        )
    }
}
 const Champs = styled.div `
     display: flex;
     flex-wrap: wrap;
     justify-content: flex-start;
     padding-left: 24rem;
     padding-top: 8rem;
   
   
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
     padding-top: 1rem;
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