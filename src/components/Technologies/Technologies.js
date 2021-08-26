import React from "react";
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiGithubBadge,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br></br>
    <SectionTitle>My ToolKit</SectionTitle>
    <List>
      <ListItem>
        <DiHtml5 size="3rem" />
        <ListContainer>
          <ListTitle>HTML5</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size="3rem" />
        <ListContainer>
          <ListTitle>CSS3</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiBootstrap size="3rem" />
        <ListContainer>
          <ListTitle>BOOTSTRAP</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript1 size="3rem" />
        <ListContainer>
          <ListTitle>JAVASCRIPT</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>REACT</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGithubBadge size="3rem" />
        <ListContainer>
          <ListTitle>GITHUB</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
