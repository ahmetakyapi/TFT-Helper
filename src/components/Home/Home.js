import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

function Home() {
    return (
        <Container>
            <Navbar/>
         <MainPage>
             {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
             <img src="https://cdnportal.mobalytics.gg/production/2021/04/bd8b6ba0-tft_reckoning_cheatsheet_final.jpg" alt="tft photo"/>
         </MainPage>
        </Container>

    )
}
const Container = styled.div `
`

const MainPage = styled.div `
  height:85vh;
  width: 100vh;
  padding-top: 75px;
  justify-content: space-between;
  background-size: 500px;
  display: inline-flex; 
  
`

export default Home