import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 450px;
  height: auto;
  background-color: black;
  font-size: 16px;
  padding: 20px 24px;
  border-radius: 16px;
  box-shadow: 0 5px 16px 4px rgba(0, 0, 0, 0.6);
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const ProjectHeader = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const ProjectLogo = styled.div`
  /* background-color: red; */
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
export const FontAwesomeIcon = styled.i`
  color: white;
`;
export const ProjectTitleWrapper = styled.div`
  margin-left: 8px;
  text-align: left;
  padding: 5px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Header = styled.div`
  font-weight: 600;
  line-height: 9px;
  margin-bottom: 7px;
`;
export const Link = styled.a`
  opacity: 0.65;
  font-size: 12px;
`;
export const ProjectSub = styled.p`
  margin-top: 16px;
  text-align: left;
  font-size: 14px;
  margin-bottom: 20px;
  opacity: 0.65;
`;
export const ProjectDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProjectTools = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  /* overflow: hidden; */
`;
export const Img1 = styled.img`
  width: 100%;
  height: 100%;
  padding: 3.2px;
`;
export const ProjectDate = styled.div`
  opacity: 0.65;
  font-size: 12px;
`;
