import styled, {keyframes} from 'styled-components';

const animate = keyframes`
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
`;

export const Spinner = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    animation: ${animate} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    div {
        position: absolute;
        border: 4px solid #fff;
        opacity: 1;
        border-radius: 50%;
    }

    div:nth-child(2) {
        animation-delay: -0.5s;
    }
`;

export const FirstLayer = styled.div`
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
`;

export const SecondLayer = styled.div`
    animation-delay: -0.5s;
`;


export const SpinnerWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 300px;
`;
