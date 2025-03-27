import styled from "styled-components";
import { InputModel, LabelModel } from "../../models/Input";

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormStyled = styled.form`
  display: flex;
  align-items: flex-end;
`

export const LabelStyled = styled.label<LabelModel>`
  margin-bottom: 8px;
`

export const InputStyled = styled.input<InputModel>`
  border: none;
  border-bottom: 1px solid #E3D2C3;
`

export const ButtonStyled = styled.button`
  margin-left: 24px;
  padding: 8px 24px;
  border: none;
  border-radius: 4px;
  background: #2DAA9E;
  color: #fff;

  &:hover {
    background: #66D2CE;
  }
`