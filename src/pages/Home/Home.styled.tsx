import styled from "styled-components";

export const ContainerStyled = styled.ul`
    padding: 16px;
    margin: 0;
  
    display: grid;
    gap: 16px;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`