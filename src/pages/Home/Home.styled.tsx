import styled from "styled-components";

export const ContainerStyled = styled.ul`
    padding: 0;
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

export const SpinnerWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    padding: 36px;
`

export const MainContainerStyled = styled.section`
    max-width: 1200px;
    margin: 32px auto;
    padding: 0 16px;
`