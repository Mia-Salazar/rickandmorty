import { Card } from "../../components";
import { CharacterModel } from "../../models/Character"
import { useSearchCharacterQuery } from "../../services/characterHook";
import { ContainerStyled } from "./Home.styled";

const Home = () => {
    const { data, isLoading } = useSearchCharacterQuery();

    console.log(data?.results, 'bla')

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