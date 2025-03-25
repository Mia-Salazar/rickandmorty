import { Card } from "../../components";
import { CharacterModel } from "../../models/Character"
import { useSearchCharacterQuery } from "../../services/characterHook";

const Home = () => {
    const { data, isLoading } = useSearchCharacterQuery();

    //console.log(data, 'bla')

    return(
        <section>
            <ul>
                {data?.results?.map((character: CharacterModel) => <Card />)}
            </ul>
        </section>
    );
}
    

export default Home;