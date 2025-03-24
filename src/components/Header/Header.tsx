import { HeaderStyled, LinkStyled, TitleStyled } from "./Header.styled";

const Header = () => (
    <HeaderStyled>
        <LinkStyled to={`/`} className="card__button">
            <TitleStyled>Rick and Morty</TitleStyled>
        </LinkStyled>
    </HeaderStyled>
);

export default Header;