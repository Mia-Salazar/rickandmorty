import { HeaderStyled, LinkStyled, SmallStyled, TitleStyled } from "./Header.styled";

const Header = () => (
    <HeaderStyled>
        <LinkStyled to={`/`} aria-label="Ir al inicio">
            <TitleStyled>Rick <SmallStyled>and</SmallStyled> Morty</TitleStyled>
        </LinkStyled>
    </HeaderStyled>
);

export default Header;