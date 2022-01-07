import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    display: flex;
    width: 200px;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #DA70D6;
    border-radius: 5px;
    margin-left: 30px;
    cursor: pointer;

    @media(max-width: 850px) {
        width: 100px;
        height: 35px;
        border-radius: 3px;
    }

    @media(max-width: 580px) {
        height: 30px;
    }
`;