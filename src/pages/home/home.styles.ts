import styled  from "styled-components";

export const Header = styled.div`
    display: flex;
    padding: 30px 0;
    width: 100%;
    justify-content: center;
    align-items: flex-end;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    padding: 30px 0;
    width: 100%;

    @media(max-width: 1250px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 30px;
    }

    @media(max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 15px;
    }
`;

export const Title = styled.h2`
    color: #fff;
`;

export const Paragraph = styled.p`
    color: #fff;

    span {
        font-weight: bolder;
    }
`;