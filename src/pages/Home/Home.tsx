import { Card, Spinner } from "../../components";
import { useSearchCharacterQuery } from "../../services/characterHook";

import { ContainerStyled, SpinnerWrapperStyled } from "./Home.styled";

const Home = () => {
    const { data, isLoading } = useSearchCharacterQuery();

    if (isLoading) return <SpinnerWrapperStyled><Spinner /></SpinnerWrapperStyled>

    return(
        <section>
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
        </section>
    );
}

export default Home;