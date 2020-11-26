import styled, { css } from 'styled-components';

interface Props {
    type01?: boolean;
    type02?: boolean;
    type03?: boolean;
}

export const Part = styled.div<Props>`
    & + & {
        border-top: 1px solid #ebebeb;
    }

    ${(props) =>
        props.type01 &&
        css`
            padding: 115px 0 113px;
        `}

    ${(props) =>
        props.type02 &&
        css`
            padding: 36px 0 70px;
            text-align: center;
        `}

    ${(props) =>
        props.type03 &&
        css`
            padding: 80px 0 185px;
        `}
`;

export const LastBox = styled.div<Props>`
    display: inline-block;
    width: 23.5%;
    margin: 0 0 0 20px;
    vertical-align: top;
`;

export const BoxWrap = styled.div`
    & + & {
        padding: 80px 0 0;
    }
`;
