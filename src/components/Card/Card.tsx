
import { CardModel } from "../../models/Card";
import { STATUS } from "./Card.contants";
import { ContainerStyled, ImageStyled, ImageWrapperStyled, InfoContainerStyled, NameStyled } from "./Card.styled";



const Card: React.FC<CardModel> = ({ name, image, location, species, origin, status }) => (
    <ContainerStyled>
      <ImageWrapperStyled>
        <ImageStyled src={image} alt={name} />
      </ImageWrapperStyled>
      <InfoContainerStyled>
        <NameStyled>{name}</NameStyled>
        <p><strong>Especie:</strong> {species}</p>
        <p><strong>Origen:</strong> {origin}</p>
        <p><strong>Ubicación:</strong> {location}</p>
        <p><strong>Estado:</strong> {STATUS[status]}</p>
      </InfoContainerStyled>
    </ContainerStyled>
  );

export default Card;