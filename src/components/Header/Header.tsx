import { HeaderStyled, LinkStyled, TitleStyled } from "./Header.styled";

const Header = () => (
    <HeaderStyled>
        <LinkStyled to={`/`} aria-label="Ir al inicio">
            <TitleStyled>Rick and Morty</TitleStyled>
        </LinkStyled>
    </HeaderStyled>
);

export default Header;