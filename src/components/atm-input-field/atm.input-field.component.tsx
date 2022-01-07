import React, { InputHTMLAttributes } from 'react'
import Label from '../atm-label/atm-label.component';
import * as S from './atm-input-field.styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}
const Input: React.FC<Props> = ({name, label, ...rest}) => {
    return (
        <S.InputWrapper>
            <Label text={label} />
            <S.Input id={name} {...rest} />
        </S.InputWrapper>
    )
}

export default Input;