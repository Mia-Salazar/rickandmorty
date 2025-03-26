import { Card, Order, Spinner } from "../../components";
import { useSearchCharacterQuery } from "../../services/characterHook";

import { ContainerStyled, MainContainerStyled, SpinnerWrapperStyled } from "./Home.styled";

const Home = () => {
    const { data, isLoading } = useSearchCharacterQuery();

    if (isLoading) return <SpinnerWrapperStyled><Spinner /></SpinnerWrapperStyled>

    return(
        <MainContainerStyled>
            <div>

            </div>
            <Order sortOrder="asc" />
            <ContainerStyled>
                {(data?.results ?? []).map(({ id, name, image, location, species, origin, status }) => (
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
}

export default Home;