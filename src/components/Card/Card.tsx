
import { CardModel } from "../../models/Card";
import { ContainerStyled, ImageStyled, ImageWrapperStyled, InfoContainerStyled, NameStyled } from "./Card.styled";



const Card: React.FC<CardModel> = ({ name, image, location, species, origin, status }) => (
    <ContainerStyled>
      <ImageWrapperStyled>
        <ImageStyled src={image} alt={name} />
      </ImageWrapperStyled>
      <InfoContainerStyled>
        <NameStyled>{name}</NameStyled>
        <p><strong>Specie:</strong> {species}</p>
        <p><strong>Origin:</strong> {origin}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Status:</strong> {status}</p>
      </InfoContainerStyled>
    </ContainerStyled>
  );

export default Card;