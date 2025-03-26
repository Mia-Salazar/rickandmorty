import { OrderModel } from "../../models/Order";
import { ContainerStyled, InputStyled, CheckmarkStyled, SwitchContainerStyled, TitleStyled } from "./Order.styled";

const Order: React.FC<OrderModel> = ({ sortOrder, handleSortChange }) => {
    return (
        <ContainerStyled>
            <TitleStyled>Order by name:</TitleStyled>
    
            <SwitchContainerStyled>
                <InputStyled
                    type="radio"
                    name="sortOrder"
                    value="asc"
                    checked={sortOrder === "asc"}
                    onChange={handleSortChange}
                />
                Ascending
                <CheckmarkStyled />
            </SwitchContainerStyled>
    
            <SwitchContainerStyled>
                <InputStyled
                    type="radio"
                    name="sortOrder"
                    value="desc"
                    checked={sortOrder === "desc"}
                    onChange={handleSortChange}
                />
                Descending
                <CheckmarkStyled />
            </SwitchContainerStyled>
        </ContainerStyled>
    );
}

export default Order;