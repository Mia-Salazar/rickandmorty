
import { CardModel } from "../../models/Card";
import { ContainerStyled, ImageStyled, ImageWrapperStyled, InfoContainerStyled, NameStyled } from "./Card.styled";

const Card: React.FC<CardModel> = ({ id, name, image, location, species, origin, status }) => (
    <ContainerStyled>
      <ImageWrapperStyled>
        <ImageStyled src={image} alt={name} />
      </ImageWrapperStyled>
      <InfoContainerStyled>
        <NameStyled>{name}</NameStyled>
        <p><strong>Especie:</strong> {species}</p>
        <p><strong>Origen:</strong> {origin}</p>
        <p><strong>Ubicación:</strong> {location}</p>
        <p><strong>Estado:</strong> {status}</p>
      </InfoContainerStyled>
    </ContainerStyled>
  );

export default Card;