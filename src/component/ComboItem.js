import React, {memo, useState} from "react";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import moment from "moment";
import {useNavigate} from "react-router-dom";
import {ModalComboSelect} from "./ModalComboSelect";

export const ComboItem = memo(function ComboItem(props) {

    const [done,setDone]=useState(false);
    const navigate = useNavigate();
    const combo = props.combo;
    const [hov, setHov] = useState(false);
    const switchHov = () => {
        setHov(prev => !prev);
    }
    const timeStart = moment(combo.start).format('DD/MM/YYYY');
    const timeEnd = moment(combo.end).format('DD/MM/YYYY');
    const valid = Date.now() / 1000 >= combo.start && Date.now() / 1000 <= combo.end
    return (
        <Container>
            <ImageItem src={combo.banner}/>
            <div style={{padding: 8, display: "flex", flexDirection: "column", backgroundColor: '#FFF9F9'}}>
                <TextBold>{combo.title}</TextBold>
                <TextNormal>{combo.description}</TextNormal>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <TextLight>{`Combo dành cho: ${combo.persons} người`}</TextLight>
                        <TextLight>{combo.off && combo.off > 0 ? combo.off + ' %Off' : 'Bonus'}</TextLight>
                        <TextLight>{`Thời gian: ${timeStart} - ${timeEnd}`}</TextLight>
                    </div>
                    <AddButton
                        onClick={()=>{
                            setDone(!done)
                        }}
                    >
                        <AddText>CHỌN</AddText>
                    </AddButton>
                </div>
            </div>
            <ModalComboSelect done={done} id={props.comboId}/>
        </Container>
    )
})
const Container = styled(Box)`
  display: flex;
  background-color: white;
  border-radius: 12px;
  flex-direction: column;
  box-shadow: 9px 9px 8px -3px rgba(84, 66, 66, 0.75);
  -webkit-box-shadow: 9px 9px 8px -3px rgba(84, 66, 66, 0.75);
  -moz-box-shadow: 9px 9px 8px -3px rgba(84, 66, 66, 0.75);
`
const ImageItem = styled('img')`
  width: 100%;
`
const TextBold = styled('span')`
  font-size: 20px;
  color: black;
  margin-bottom: 8px;
`
const TextNormal = styled('span')`
  font-size: 16px;
  color: #424242;
  margin-bottom: 8px;

`
const TextLight = styled('span')`
  font-size: 12px;
  color: #8d8a8a;
  margin-bottom: 4px;

`
const AddButton = styled(Button)({
    width: 32,
    height: 28,
    backgroundColor: '#E2D8D8',
    borderRadius: 12,
    '&:hover': {
        backgroundColor: '#EC393E'
    }
})

const AddText = styled('p')`
  font-size: 12px;
  color: white;
`