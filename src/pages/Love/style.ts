import styled from 'styled-components';

export const LoveTitle = styled.div`
    margin: 70px 0 45px;
    font-weight: 400;
    font-size: 33px;
    color: #222222;
    text-align: center;
`;

export const List = styled.div`
    height: 40px;
    margin: 0 0 50px;
    padding: 5px 0 0;
    border-bottom: 1px solid #e8e8e8;
`;

export const MaxData = styled.div`
    font-size: 14px;
    color: #a0a0a0;
`;

export const AlertBox = styled.div`
    padding: 0 0 20px;
`;

export const RecData = styled.div`
    font-size: 15px;
    color: #666666;
`;

export const RecDataNum = styled.span`
    color: #1564f9;
`;

export const CardGridBox = styled.div`
    padding: 0 0 80px;

    li + li {
        margin: 0 0 0 20px;

        &:nth-child(4n + 1) {
            margin: 0;
        }
    }
`;
