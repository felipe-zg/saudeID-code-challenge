import React from 'react';
import * as S from './org-card.styles';

const Card: React.FC = ({children}) => {
    return(
        <S.Card>
            {children}
        </S.Card>
    )
}

export default Card;