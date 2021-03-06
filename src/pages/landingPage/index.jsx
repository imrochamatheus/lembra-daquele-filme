import React from "react";

import logo from "../../assets/img/logoCompleta.svg";
import landingPage_1 from "../../assets/img/landingPage_1.svg";

import ButtonToPage from "../../components/buttonToPage";
import TextLandingPage from "../../components/textLandingPage";
import FooterLandingPage from "../../components/footerLandingPage";

import { Header, LogoContainer, TopPageContainer, Container } from "./styles";
import SeeMoreArrow from "../../components/SeeMoreArrow";

const LandingPage = () => {
  return (
    <Container>
      <Header>
        <ButtonToPage route="/login">Entrar</ButtonToPage>
      </Header>
      <TopPageContainer>
        <div>
          <LogoContainer>
            <img className="img_logo" src={logo} alt="" />
            <h2>Sua biblioteca de filmes.</h2>
          </LogoContainer>

          <ButtonToPage route="/register">Faça seu cadastro</ButtonToPage>
          <div className="div_button-login">
            <ButtonToPage route="/login">Entrar</ButtonToPage>
          </div>
        </div>

        <SeeMoreArrow/>

        <img src={landingPage_1} alt="Ilustração" />
      </TopPageContainer>
      <TextLandingPage />
      <FooterLandingPage />
    </Container>
  );
};

export default LandingPage;
