import React from 'react';
import Label from '../atm-label/atm-label.component';
import * as S from './mol-button.styles'

type Props = {
    label: string;
    onClick: () => void;
}

const Button: React.FC<Props> = ({label, onClick}) =>{
    return (
        <S.ButtonWrapper onClick={onClick}>
            <Label text={label} />
        </S.ButtonWrapper>
    )
}

export default Button;