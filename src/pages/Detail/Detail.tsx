import { useParams } from "react-router";

import { useSearchCharacterQuery } from "../../services/characterHook";
import { ContainerStyled, TextStyled, TitleStyled } from "./Detail.styled";
import { Spinner } from "../../components";

const Detail = () => {
    const { id } = useParams();

    const { data, isLoading } = useSearchCharacterQuery(Number(id));

    if (isLoading) return <Spinner />

    return (
        <ContainerStyled>
            <TitleStyled>
                {data?.name}
            </TitleStyled>
            <figure>
                <img src={data?.image} alt="" />
            </figure>
            <TextStyled><strong>Specie:</strong> {data?.species}</TextStyled>
            {data?.type && <TextStyled><strong>Subspecie:</strong> {data?.type}</TextStyled>}
            <TextStyled><strong>Origin:</strong> {data?.origin.name}</TextStyled>
            <TextStyled><strong>Location:</strong> {data?.location.name}</TextStyled>
            <TextStyled><strong>Gender:</strong> {data?.gender}</TextStyled>
            <TextStyled><strong>Number of episodes:</strong> {data?.episode?.length}</TextStyled>
        </ContainerStyled>
    )
};

export default Detail;