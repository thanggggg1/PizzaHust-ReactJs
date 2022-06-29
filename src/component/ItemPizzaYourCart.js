import {memo} from "react";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {IC_DELETE, IC_EDIT, IMG_PIZZA_YOUR_CART} from "../assets";
import Button from "@mui/material/Button";
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const ItemPizzaYourCart = memo(function ItemPizzaYourCart(props) {
    const cartInfo = props.cartInfo
    const cartId = props.cartId
    const pizza = props.pizza
    const handleCartChange = props.handleCartChange;
    const navigate = useNavigate();
    const remove = ()=>{
        handleCartChange(cartId);
    }
    return (
        <Container>
            <ImagePizza src={pizza.image_url}/>
            <div style={{display: 'flex', justifyContent: 'space-between',padding:12}}>
                <LeftSection>
                    <TextNormal>{pizza.title}</TextNormal>
                    <br/>
                    <br/>
                    <TextNormal style={{marginRight: 12}}>Cỡ: S</TextNormal>
                    <TextNormal>Đế: Đế giòn</TextNormal>
                    <br/>
                    <br/>
                    <RowText>
                        <TextLight>Topping 1 </TextLight>
                        <TextLight>Topping 1 </TextLight>
                        <TextLight>Topping 1 </TextLight>
                    </RowText>
                </LeftSection>
                <RightSection>
                    <div>
                        <TextNormal style={{marginRight: 16}}>260.000 đ</TextNormal>
                        <TextNormal>x2</TextNormal>
                    </div>
                    <div>
                        <ButtonAction>
                            <ImageAction src={IC_EDIT}/>
                        </ButtonAction>
                        <ButtonAction>
                            <ImageAction src={IC_DELETE}/>
                        </ButtonAction>
                    </div>
                </RightSection>
            </div>
        </Container>
    )
})
const Container = styled(Box)`
  display: flex;
  background-color: white;
  border-radius: 20px;
  box-shadow: 5px 6px 8px -3px rgba(84,66,66,0.75);
  -webkit-box-shadow: 5px 6px 8px -3px rgba(84,66,66,0.75);
  -moz-box-shadow: 5px 6px 8px -3px rgba(84,66,66,0.75);
  margin: 20px 0;
`
const ImagePizza = styled('img')`
  width: 180px;
  height: 100%;
`
const LeftSection = styled('div')`
  width: 48%;
`

const TextNormal = styled('span')`
  font-size: 16px;
  color: black;
`
const TextLight = styled('span')`
  font-size: 8px;
  color: black;
`
const RowText = styled('div')`
  display: flex;
  background-color: #E2D8D8;
  justify-content: space-between;
  padding: 8px;
  border-radius: 8px;
`

const RightSection = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`
const ButtonAction = styled(IconButton)`
  background-color: #E2D8D8;
  margin: 0 12px;
`
const ImageAction = styled('img')`
  width: 12px;
  height: 12px;
`