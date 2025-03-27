import { Card, Filter, Order, Spinner } from "../../components";
import { useCharacter } from "./Home.hooks";

import { ContainerStyled, MainContainerStyled, SpinnerWrapperStyled, TitleContainerStyled, TitleStyled } from "./Home.styled";

const Home = () => {
    const { characters, handleChangeSort, handleSubmit, isLoading, sortOrder } = useCharacter();

    return (
        <MainContainerStyled>
            <TitleContainerStyled>
                <TitleStyled>Rick and Morty Characters</TitleStyled>
                <Filter onSubmit={handleSubmit} />
            </TitleContainerStyled>

            {isLoading ? (
                <SpinnerWrapperStyled>
                    <Spinner />
                </SpinnerWrapperStyled>
            ):  (
                <>
                    <Order sortOrder={sortOrder} onChange={handleChangeSort} />
                    <ContainerStyled>
                        {(characters ?? []).map(({ id, name, image, location, species, origin, status }) => (
                            <Card
                                id={id}
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
                </>
            )}
        </MainContainerStyled>
    );
};

export default Home;
