import { Card } from "../../components";
import { CharacterModel } from "../../models/Character"
import { useSearchCharacterQuery } from "../../services/characterHook";

const Home = () => {
    const { data, isLoading } = useSearchCharacterQuery();

    console.log(data?.results, 'bla')

    return(
        <section>
            <ul>
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
            </ul>
        </section>
    );
}

export default Home;