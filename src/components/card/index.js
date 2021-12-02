import React from "react";
import {
  CardContainer,
  CardWrapper,
  ProjectHeader,
  ProjectLogo,
  ProjectTitleWrapper,
  Header,
  Link,
  ProjectDetails,
  ProjectTools,
  ProjectDate,
  ProjectSub,
  Img,
  Img1,
} from "./cardElements";
import ReactIcon from "../../images/react.svg";
import BootstrapIcon from "../../images/bootstrap.svg";
import FigmaIcon from "../../images/figma-1.svg";
import MuiIcon from "../../images/material-ui-1.svg";
import NextIcon from "../../images/next-js.svg";
import VueIcon from "../../images/vue.svg";
import SassIcon from "../../images/sass-1.svg";

const Card = () => {
  return (
    <>
      <CardContainer>
        <CardWrapper>
          <ProjectHeader>
            <ProjectLogo>
              <Img src={ReactIcon} alt="icon" />
            </ProjectLogo>
            <ProjectTitleWrapper>
              <Header>React project</Header>
              <Link>https://vansweb.vercel.app/</Link>
            </ProjectTitleWrapper>
          </ProjectHeader>
          <ProjectSub>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas
            modi explicabo saepe. Nihil itaque, fugit repellat volu!
          </ProjectSub>
          <ProjectDetails>
            <ProjectTools>
              <Img1 src={FigmaIcon} alt="icon" />
              <Img1 src={SassIcon} alt="icon" />
              <Img1 src={VueIcon} alt="icon" />
              <Img1 src={MuiIcon} alt="icon" />
            </ProjectTools>
            <ProjectDate>sep 12</ProjectDate>
          </ProjectDetails>
        </CardWrapper>
      </CardContainer>
    </>
  );
};

export default Card;
