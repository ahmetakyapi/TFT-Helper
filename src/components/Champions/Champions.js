import React, {Component} from "react";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import ChampionsData from "../champions.json";

class Champions extends Component {
    render() {
        return (
            <div className="ui grid container">
                <Navbar/>
                <Champs>
                    {ChampionsData.map((championDetail) => {
                        return <div>
                            <h2>{championDetail.title} </h2>
                            <img src={championDetail.image} alt=""/>
                            <p>{championDetail.costs}</p>
                        </div>
                    })}
                </Champs>
            </div>
        )
    }
}
 const Champs = styled.div `
     display: flex;
     flex-direction: row;
     padding: 6rem;
     
   
   div {
     width: 200px;
   }
   img {
     max-width: 400px;
   }
   
 `
export default Champions