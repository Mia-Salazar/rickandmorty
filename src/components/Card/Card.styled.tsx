import styled from "styled-components";
import { ImageModel } from "../../models/Image";

export const ContainerStyled = styled.li`
  display: flex;
  background: #EAEAEA;
  border-radius: 4px;
`

export const ImageWrapperStyled = styled.figure`
  margin: 0;
  padding: 16px;
  width: 100%;

  @media (min-width: 768px) {
    width: 200px;
  }
`

export const ImageStyled = styled.img<ImageModel>`
  max-width: 100%;
  max-height: 100%;
  border-radius: 4px;
`

export const InfoContainerStyled = styled.div`
  padding: 16px;
`

export const NameStyled = styled.h3`
  margin: 0;
  color: #2DAA9E;
  font-size: 26px;
  font-family: "Jolly Lodger", system-ui;
`