import styled, { css } from 'styled-components';

interface ContainerProps {
    active?: boolean;
    type01?: boolean;
    type02?: boolean;
    type03?: boolean;
}

export const Container = styled.div<ContainerProps>`
    position: relative;
    transition: color ease 0.2s;
    user-select: none;
    cursor: pointer;
    text-align: center;

    &:hover {
        color: #1564f9;
    }

    ${(props) =>
        props.type01 &&
        css`
            padding: 0 12px 0 16px;
            font-size: 13px;
            color: #888888;

            & + div {
                &::after {
                    display: block;
                    position: absolute;
                    top: 1px;
                    left: 0;
                    bottom: 1px;
                    content: '|';
                    color: #dddddd;
                }
            }
        `}

    ${(props) =>
        props.type02 &&
        css`
            padding: 0 17px;
            font-size: 15px;
            color: #222222;
        `}

    ${(props) =>
        props.type03 &&
        css`
            padding: 0 5px 0 8px;
            font-size: 13px;
            color: #888888;

            & + div {
                &::after {
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    content: '·';
                    color: #888888;
                }
            }
        `}
        
        ${(props) =>
            props.active &&
            css`
                color: #1564f9;
            `}
`;
