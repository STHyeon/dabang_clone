import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface BtnStyleProps {
    styletype?: string;
}

export const BtnStyle = css<BtnStyleProps>`
    display:inline-block;
    width: 14rem;
    height: 40px;
    padding: 0;
    border: 0;
    border-radius: 0.3rem;
    font-size: 15px;
    line-height: 40px;
    text-align: center;
    transition: opacity 0.2s ease 0s, background 0.2s ease 0s, color 0.2s ease 0s;

    &:hover {
        color: #ffffff;
        opacity: 0.9
    }

    &:disabled {
        color: #ffffff;
        background: #b9b9b9;
    }

    ${(props) =>
        props.styletype === 'primary' &&
        css`
            color: #ffffff;
            background: #ff2d54;
        `}

    ${(props) =>
        props.styletype === 'secondary' &&
        css`
            color: #ffffff;
            background: #55a6fc;
        `}

    ${(props) =>
        props.styletype === 'danger' &&
        css`
            color: #ffffff;
            background: #d32f2f;
        `}

    ${(props) =>
        props.styletype === 'alert' &&
        css`
            color: #ffffff;
            background: #ffaa1a;
        `}

    ${(props) =>
        props.styletype === 'success' &&
        css`
            color: #ffffff;
            background: #388e3c;
        `}

    ${(props) =>
        props.styletype === 'transparent' &&
        css`
            color: #3f3f3f;
            background: transparent;
        `}

    ${(props) =>
        props.styletype === 'transparent-border' &&
        `
            border: 1px solid #848484;
            color: #3f3f3f;
            background: #f4f4f4;
    `}
`;

export const StyledAnchor = styled.a`
    ${BtnStyle}
`;

export const StyledBtn = styled.button`
    ${BtnStyle}
`;

export const StyledLink = styled(Link)`
    ${BtnStyle}
`;
