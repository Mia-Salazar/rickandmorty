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

export const MainContainerStyled = styled.section`
    max-width: 1200px;
    margin: 32px auto;
    padding: 0 16px;
`

export const TitleContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 48px;
`

export const TitleStyled = styled.h2`
    margin-bottom: 10px;
    font-family: "Jolly Lodger", system-ui;
    font-size: 40px;
`