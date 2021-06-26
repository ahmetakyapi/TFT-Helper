import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import penguin from "../../assets/Pengu.png"
import Reckoning from "../../assets/Reckoning.jpg"
import TftLogo from "../../assets/TFT-Logo.png"
function Home() {
    return (
        <Container>
            <Navbar/>
            <Logo>
                <img src={TftLogo} alt="traits img"/>
            </Logo>
         <MainPage>
             <img src={Reckoning} alt="reckoning img"/>
             <Text>
                 <div>
                     <h1>TFT Guide Site, Developed To Help Users in TFT Game</h1>
                 </div>
                 <h1>TFT - SET 5 RECKONING</h1>
                 <h2>BATTLE FOR THE CONVERGENCE</h2>
                 <h3>Draft, deploy, and dominate with a revolving roster of League of Legends champions,
                     in a round-based battle for supremacy.</h3>
                 <span>
                     <img src={penguin} alt="penguin img"/>
                 </span>
             </Text>
         </MainPage>
        </Container>

    )
}
const Container = styled.div `
    margin-top: 4.5rem;
    margin-left: 8rem;
  @media (max-width: 768px) {
   margin-left: 4px;
  }
`
const Logo = styled.div `
    display: inline-flex;
    flex-direction: column;
    width: 26vh;
    padding-top: 2rem;
    padding-left: 62rem;
  @media (max-width: 768px) {
    display: none;
  }
`

const MainPage = styled.div `
  height:60vh;
  width: 180vh;
  padding-top: 3rem;
  padding-right: 5px;
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 52vh;
    padding-top: 2rem;
    padding-left: 0.6rem;
  }
`
 const Text = styled.div `
   h1 {
     color: antiquewhite;
     font-size: 48px;
     text-align: center;
     padding-left: 9rem;
     padding-top: 3rem;
   }
   h2 {
     color: mediumaquamarine;
     font-size: 32px;
     text-align: center;
     padding-left: 9rem;
     margin-top: 3rem;
   }
   h3 {
     color: whitesmoke;
     font-size: 28px;
     text-align: center;
     margin-left: 9rem;
     margin-top: 3rem;
     margin-bottom: 2.5rem;
   }
  div>h1 {
    color: darkgoldenrod;
    padding-right: 1rem;
    font-size: 20px;
  }
   span {
    display: flex;
       flex-direction: column;
       width: 10rem;
       padding-left: 30rem;
   }
   @media (max-width: 768px) {
     h1 {
       color: antiquewhite;
       font-size: 28px;
       text-align: center;
       padding-left: 1rem;
       padding-top: 2rem;
     }
     h2 {
       color: mediumaquamarine;
       font-size: 20px;
       text-align: center;
       padding-left: 1rem;
       margin-top: 2rem;
     }
     h3 {
       color: whitesmoke;
       font-size: 18px;
       text-align: center;
       margin-left: 1rem;
       margin-top: 3rem;
       margin-bottom: 2rem;
     }
     span {
       display: flex;
       flex-direction: column;
       width: 8rem;
       padding-left: 8rem;
     }
   }
 `
export default Home