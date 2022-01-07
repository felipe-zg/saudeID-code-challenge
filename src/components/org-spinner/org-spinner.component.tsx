import React from 'react'
import * as S from './org-spinner.styles';

const Spinner: React.FC = () => {
    return (
        <S.SpinnerWrapper>
            <S.Spinner>
                <S.FirstLayer />
                <S.SecondLayer />
            </S.Spinner>
        </S.SpinnerWrapper>
    )
}

export default Spinner;