import styled, { css } from 'styled-components';
import { device } from 'utils/style/media';

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
            padding: 115px 16px 113px;
        `}

    ${(props) =>
        props.type02 &&
        css`
            padding: 36px 16px 70px;
            text-align: center;
        `}

    ${(props) =>
        props.type03 &&
        css`
            padding: 80px 16px 185px;
        `}
`;

export const BoxWrap = styled.div`
    & + & {
        padding: 80px 0 0;
    }
`;

export const CardBox = styled.div<Props>`
    /* li + li {
        ${(props) =>
            props.type02 &&
            css`
                margin: 0 0 0 14px;
            `}

        ${(props) =>
            props.type03 &&
            css`
                margin: 0 0 0 20px;
            `}
    } */
`;
