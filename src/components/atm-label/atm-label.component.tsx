import React from 'react';
import * as S from './atm-label.styles';

type Props = {
    text: string
}
export const Label: React.FC<Props> = ({text}) => {
    return (
        <S.LabelWrapper>{text}</S.LabelWrapper>
    )
}

export default Label;