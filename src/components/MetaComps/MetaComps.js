import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import MetaComps1 from "../../assets/MetaComps1.png"
import MetaComps2 from "../../assets/MetaComps2.png"
import MetaComps3 from "../../assets/MetaComps3.png"
import MetaComps4 from "../../assets/MetaComps4.png"
import MetaComps5 from "../../assets/MetaComps5.png"
import MetaComps6 from "../../assets/MetaComps6.png"
import MetaComps7 from "../../assets/MetaComps7.png"
import MetaComps8 from "../../assets/MetaComps8.png"


function MetaComps() {
    return (
        <Container>
            <Navbar/>
            <Title>
                <h1>Meta Comps <span> Patch 11.5</span></h1>
            </Title>
            <CompsInfo>
                <div>
                    <span>S Tier</span>  <h2>Abomination Revenants</h2>
                    <img src={MetaComps1} alt="Abomination Revenants"/>
                </div>
                <div>
                    <span>S Tier</span> <h2>Dawnbringer Invokers</h2>
                    <img src={MetaComps2} alt="Dawnbringer Invokers"/>
                </div>
                <div>
                    <span>S Tier</span> <h2>Forgetten Ironclad</h2>
                    <img src={MetaComps3} alt="Forgotten Ironclad"/>
                </div>
                <div>
                    <span>S Tier</span> <h2>Nightbringer Dragonslayers</h2>
                    <img src={MetaComps4} alt="Nightbringer Dragonslayers"/>
                </div>
                <div>
                    <span>S Tier</span> <h2>Revenant Invokers</h2>
                    <img src={MetaComps5} alt="Revenant Invokers"/>
                </div>
                <div>
                    <span>A Tier</span>  <h2>Coven Renewers</h2>
                    <img src={MetaComps6} alt="Coven Renewers"/>
                </div>
                 <div>
                     <span>A Tier</span> <h2>Dragonslayer Skirmishers</h2>
                     <img src={MetaComps7} alt="Dragonslayer Skirmishers"/>
                 </div>
                <div>
                    <span>B Tier</span> <h2>Draconic Caretakers</h2>
                    <img src={MetaComps8} alt="Draconic Caretakers"/>
                </div>
                <a href="https://tftactics.gg/tierlist/team-comps">
                    The images here are taken from tftactics.gg. Click to access the site.</a>
            </CompsInfo>
        </Container>
    )
}
const Container = styled.div `
    height: 430vh;
  background: #13334C;
  @media (max-width: 768px) {
   height: 360vh;
  }
`
const Title = styled.div `
   text-align: center;
   padding: 6rem;
   color: coral;
   span {
     color: dodgerblue;
     font-weight: 700;
     padding-left: 1rem;
   }
  @media (max-width: 768px) {
    padding-bottom: 3rem;
    font-size: 12px;
    padding-left: 1rem;
    span {
      color: dodgerblue;
      font-weight: 700;
      padding-left: 0.5rem;
    }
  }
`
const CompsInfo = styled.div`
  display: grid;
  justify-content: space-around;
   span {
     font-size: 1.5rem;
     color: antiquewhite;
     border: 6px solid mediumseagreen;
     align-items: center;
     background: mediumseagreen;
     border-radius: 20px;
     padding: 0.2rem;
   }
  h2 {
    padding-top: 1rem;
    color: goldenrod;
    font-weight: 700;
    padding-bottom: 0.8rem;
  }
   img {
     width: 1000px;
     height: auto;
     padding-bottom: 5rem;
   }
  a {
    color: goldenrod;
  }
  @media (max-width: 768px) {
    display: grid;
    justify-content: space-around;
    padding-left: 1rem;
    span {
      font-size: 1rem;
      color: antiquewhite;
      border: 4px solid mediumseagreen;
      background: mediumseagreen;
      border-radius: 20px;
    }
    h2 {
      padding-top: 1rem;
      color: goldenrod;
      font-weight: 700;
      padding-bottom: 0.8rem;
    }
    img {
      width: 360px;
      height: auto;
      padding-bottom: 3rem;
      padding-right: 2rem;
    }
    a {
      color: goldenrod;
      text-align: center;
      align-items: center;
      padding-right: 8rem;
      padding-left: 2rem;
    }
  }
`
export default MetaComps