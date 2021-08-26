import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

function TimeLine() {
  return (
    <Section id="about">
      <SectionDivider></SectionDivider>
      <br />
      <br />
      <SectionTitle> About Me</SectionTitle>
      <SectionText>
        2019 the year I began coding, It started as a curiosity but later led to
        a passion. My first experience with coding was with a bootcamp,
        specifically freeCodeCamp. This was my starting steps to learn the
        basics of coding and also the reason why I have a passion for web
        development. Along with this new found passion I also aquired some
        cerftificates to bring verability to my name. I found that once I
        started coding I wasnt able to stop. I always wanted to learn more and
        more. Because of coding I switched my major to computer science, in
        abitions of aquiring new and useful skills.
      </SectionText>
    </Section>
  );
}

export default TimeLine;
