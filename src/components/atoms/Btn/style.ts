import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface BtnProps {
    btnType?: string;
    disabled?: boolean;
}

const BtnCSS = css<BtnProps>`
    display: inline-block;
    width: 100%;
    margin: 0;
    padding: 0;
    border: 1px solid #cccccc;
    font-size: 16px;
    color: #000000;
    text-align: center;
    text-decoration: none;
    background: #ffffff;
    cursor: pointer;

    &:disabled {
        color: #ffffff;
        background: #b9b9b9;
        cursor: default;
    }

    ${(props) => props.btnType === 'default' && css``}

    ${(props) =>
        props.btnType === 'blue' &&
        css`
            border: 0;
            color: #ffffff !important;
            background: #1a5ae8;
        `}

    ${(props) =>
        props.btnType === 'blue_outline' &&
        css`
            border-color: #1a5ae8;
        `}

    ${(props) =>
        props.btnType === 'border_none' &&
        css`
            border: 0;
        `}
`;

export const Btn = styled.button<BtnProps>`
    ${BtnCSS}
`;

export const LinkBtn = styled(Link)<BtnProps>`
    ${BtnCSS}
`;
