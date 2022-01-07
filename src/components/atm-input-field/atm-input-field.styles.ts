import styled from 'styled-components';

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    width: 600px;
    height: 50px;
    border-radius: 10px;
    outline: none;
    appearance: none;

    @media(max-width: 850px) {
        width: 400px;
        height: 35px;
        border-radius: 5px;
    }

    @media(max-width: 580px) {
        width: 300px;
        height: 30px;
        border-radius: 5px;
    }

    @media(max-width: 475px) {
        width: 200px;
    }
`;