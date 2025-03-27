import { SpinnerStyled, SpinnerWrapperStyled } from "./Spinner.styled";

const Spinner = () => (
    <SpinnerWrapperStyled>
        <SpinnerStyled aria-label="Loading" />
    </SpinnerWrapperStyled>
);

export default Spinner;