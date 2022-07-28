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
    const timeStart = moment(combo.start*1000).format('DD/MM/YYYY');
    const timeEnd = moment(combo.end*1000).format('DD/MM/YYYY');
    const valid = Date.now() / 1000 >= combo.start && Date.now() / 1000 <= combo.end
    return (
        <ContainerCombo>
            <ImageItemCombo src={combo.banner}/>
            <div style={{padding: 8, display: "flex", flexDirection: "column", backgroundColor: '#FFF9F9'}}>
                <TextBoldCombo>{combo.title}</TextBoldCombo>
                <TextNormalCombo>{combo.description}</TextNormalCombo>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <TextLightCombo>{`Combo dành cho: ${combo.persons} người`}</TextLightCombo>
                        <TextLightCombo>{combo.off && combo.off > 0 ? combo.off + ' %Off' : 'Bonus'}</TextLightCombo>
                        <TextLightCombo>{`Thời gian: ${timeStart} - ${timeEnd}`}</TextLightCombo>
                    </div>
                    <AddButtonCombo
                        onClick={()=>{
                            setDone(!done)
                        }}
                    >
                        <AddTextCombo>CHỌN</AddTextCombo>
                    </AddButtonCombo>
                </div>
            </div>
            <ModalComboSelect done={done} id={props.comboId}/>
        </ContainerCombo>
    )
})
const ContainerCombo = styled(Box)`
  display: flex;
  background-color: #FFF9F9;
  border-radius: 12px;
  flex-direction: column;
  box-shadow: 2px 2px 4px 0px #00000040;
  height: 320px;
`
const ImageItemCombo = styled('img')`
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  width: 100%;
`
const TextBoldCombo = styled('span')`
  font-size: 20px;
  color: black;
  margin-bottom: 8px;
`
const TextNormalCombo = styled('span')`
  font-size: 16px;
  color: #424242;
  margin-bottom: 8px;

`
const TextLightCombo = styled('span')`
  font-size: 12px;
  color: #8d8a8a;
  margin-bottom: 4px;

`
const AddButtonCombo = styled(Button)({
    width: 32,
    height: 28,
    backgroundColor: '#E2D8D8',
    borderRadius: 12,
    '&:hover': {
        backgroundColor: '#EC393E'
    }
})

const AddTextCombo = styled('span')`
  font-size: 12px;
  color: white;
`