import styled from "styled-components";

export const SpinnerStyled = styled.div`
    width: 42px;
    height: 42px;
    border: 5px solid #FFF;
    border-bottom-color: #2DAA9E;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export const SpinnerWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    padding: 36px;
`