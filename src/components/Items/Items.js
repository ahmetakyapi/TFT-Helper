import React, { useState } from "react";
import styled from "styled-components";
import ItemsCard from "./ItemsCard";
import ItemsData from "./ItemsData";
import Navbar from "../Navbar/Navbar";

export default function Items() {
    const [active, setActive] = useState("FirstCard");
    return (
        <Container>
                <Navbar/>
              <h1>Item Recipes</h1>
            <Buttons>
                    <button onClick={() => setActive("Bf Sword")}><img src="https://rerollcdn.com/items/BFSword.png" alt="BfSword"/></button>
                    <button onClick={() => setActive("Large Rod")}><img src="https://rerollcdn.com/items/NeedlesslyLargeRod.png" alt="LargeRod"/></button>
                    <button onClick={() => setActive("Recurve Bow")}><img src="https://rerollcdn.com/items/RecurveBow.png" alt="RecurseBow"/></button>
                    <button onClick={() => setActive("Chain Vest")}><img src="https://rerollcdn.com/items/ChainVest.png" alt="ChainVest"/></button>
                    <button onClick={() => setActive("Giant's Belt")}><img src="https://rerollcdn.com/items/GiantsBelt.png" alt="GiantsBelt"/></button>
                    <button onClick={() => setActive("Negatron Cloak")}><img src="https://rerollcdn.com/items/NegatronCloak.png" alt="NegatronCloak"/></button>
                    <button onClick={() => setActive("Sparring Gloves")}><img src="https://rerollcdn.com/items/SparringGloves.png" alt="SparringGloves"/></button>
                    <button onClick={() => setActive("Tear of the Goddess")}><img src="https://rerollcdn.com/items/TearoftheGoddess.png" alt=""/></button>
                    <button onClick={() => setActive("Spatula")}><img src="https://rerollcdn.com/items/Spatula.png" alt="Spatula"/></button>
            </Buttons>
            <ButtonsIndex>
                {active === "Bf Sword" && <ItemsCard data={ItemsData} cardIndex={0} />}
                {active === "Large Rod" && <ItemsCard data={ItemsData} cardIndex={1} />}
                {active === "Recurve Bow" && <ItemsCard data={ItemsData} cardIndex={2} />}
                {active === "Chain Vest" && <ItemsCard data={ItemsData} cardIndex={3} />}
                {active === "Giant's Belt" && <ItemsCard data={ItemsData} cardIndex={4} />}
                {active === "Negatron Cloak" && <ItemsCard data={ItemsData} cardIndex={5} />}
                {active === "Sparring Gloves" && <ItemsCard data={ItemsData} cardIndex={6} />}
                {active === "Tear of the Goddess" && <ItemsCard data={ItemsData} cardIndex={7} />}
                {active === "Spatula" && <ItemsCard data={ItemsData} cardIndex={8} />}
            </ButtonsIndex>
        </Container>
    );
}
const Container = styled.div `
  margin-top: 4.5rem;
  margin-left: 8rem;
  h1 {
    text-align: center;
    color:burlywood;
    padding-top: 2rem;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    margin-left: 0.5px;
    h1 {
      text-align: center;
      color:burlywood;
      padding-top: 1rem;
      font-weight: 700;
      font-size: 1.6rem;
      padding-bottom: 1rem;
      padding-right: 3rem;
    }
  }
`
const Buttons = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding-top: 5rem;
  padding-left: 7rem;
  img {
    width: 4.5rem;
    height: auto;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    padding-top: 1rem;
    padding-left: 1rem;
    img { 
      width: 1.5rem;
      height: 2.3rem;
    }
  }
`
const ButtonsIndex = styled.div `
  display: inline-flex;
  flex-direction: column;
  padding-left: 11rem;
  img {
    width: 48rem;
    height: auto;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-top: 1.5rem;
    padding-left: 0.1rem;
    width: 40rem;
    img {
      width: 23rem;
      height: auto;
    }
    p {
      padding-right: 20rem;
    }
  }
`
