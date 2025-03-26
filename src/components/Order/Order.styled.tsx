import styled from "styled-components";
import { InputModel } from "../../models/Input";

export const ContainerStyled = styled.fieldset`
  border: none;
  padding: 0;
  margin-bottom: 24px;
`

export const TitleStyled = styled.legend`
  padding: 0;
  margin-bottom: 12px;
  color: #2DAA9E;
  font-size: 24px;
  font-family: "Jolly Lodger", system-ui;
`

export const SwitchContainerStyled = styled.label`
  display: block;
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
  font-size: 18px;
  user-select: none;
`

export const CheckmarkStyled = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 4px;
`

export const InputStyled = styled.input<InputModel>`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked ~ ${CheckmarkStyled} {
    background-color: #2DAA9E;
  }
`

