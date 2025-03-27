import { Card, Filter, Order, Spinner } from "../../components";
import { useCharacter } from "./Home.hooks";

import { ContainerStyled, MainContainerStyled, SpinnerWrapperStyled, TitleContainerStyled, TitleStyled } from "./Home.styled";

const Home = () => {
    const { characters, isLoading, handleChangeSort, sortOrder } = useCharacter();

    if (isLoading) 
        return (
            <SpinnerWrapperStyled>
                <Spinner />
            </SpinnerWrapperStyled>
        );

    return (
        <MainContainerStyled>
            <TitleContainerStyled>
                <TitleStyled>Rick and Morty Characters</TitleStyled>
                <Filter />
            </TitleContainerStyled>
            <Order sortOrder={sortOrder} onChange={handleChangeSort} />
            <ContainerStyled>
                {(characters ?? []).map(({ id, name, image, location, species, origin, status }) => (
                    <Card
                        key={id}
                        name={name}
                        image={image}
                        location={location.name}
                        species={species}
                        origin={origin.name}
                        status={status}
                    />
                ))}
            </ContainerStyled>
        </MainContainerStyled>
    );
};

export default Home;
