import styled, { css } from 'styled-components';

interface Props {
    type01?: boolean;
    type02?: boolean;
}

export const Container = styled.div``;

export const MainText = styled.div`
    margin: 0 0 20px;
    font-weight: 300;
    font-size: 46px;
    line-height: 58px;
    text-align: center;
`;

export const MainStrongText = styled.span`
    color: #1564f9;
`;

export const ListText = styled.div<Props>`
    ${(props) =>
        props.type01 &&
        css`
            margin: 0 0 2px;
            font-size: 28px;
        `}

    ${(props) =>
        props.type02 &&
        css`
            margin: 0 0 20px;
            color: #666666;
        `}
`;

export const SideMainText = styled.div`
    display: inline-block;
    position: relative;
    padding: 0 0 0 15px;
    color: #c5c5c5;

    &::after {
        display: block;
        position: absolute;
        left: 0;
        top: 5px;
        bottom: 5px;
        content: '';
        border-left: 1px solid #c5c5c5;
    }
`;