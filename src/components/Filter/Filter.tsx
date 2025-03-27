import React from 'react';

import { ButtonStyled, FormStyled, InputContainerStyled, InputStyled, LabelStyled } from './Filter.styled';
import { FilterModel } from '../../models/Filter';

const Filter: React.FC<FilterModel> = ({ onSubmit }) => {

  return (
    <FormStyled onSubmit={onSubmit}>
      <InputContainerStyled>
        <LabelStyled htmlFor="filter">
          Filter by Name
        </LabelStyled>
        <InputStyled
          id="filter"
          type="text"
          name="name"
          placeholder="Search characters"
        />
      </InputContainerStyled>
      <ButtonStyled>Buscar</ButtonStyled>
    </FormStyled>
  );
};

export default Filter;