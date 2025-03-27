import React, { useState } from 'react';
import { ButtonStyled, FormStyled, InputContainerStyled, InputStyled, LabelStyled } from './Filter.styled';

const Filter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <FormStyled>
        <InputContainerStyled>
            <LabelStyled htmlFor="filter">
                Filter by Name
            </LabelStyled>
            <InputStyled
                id="filter"
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search characters"

            />
        </InputContainerStyled>
        <ButtonStyled>Buscar</ButtonStyled>
    </FormStyled>
  );
};

export default Filter;