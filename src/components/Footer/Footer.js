import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: 929-235-4345">929-235-4345</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:wkhaskhalu@gmail.com">
            wkhaskhalu@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons
            href="https://github.com/waleedkhaskhali"
            target="_blank"
          >
            <AiFillGithub size="3rem"></AiFillGithub>
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/waleed-khaskhali/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem"></AiFillLinkedin>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
