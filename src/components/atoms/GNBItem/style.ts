import styled, { css } from 'styled-components';

interface ContainerProps {
    active?: boolean;
    GNBType?: string;
    itemWidth?: string;
    fontColor?: string;
    fontSize?: string;
    hoverColor?: string;
}

export const Container = styled.li<ContainerProps>`
    position: relative;
    transition: color ease 0.2s;
    width:${(props) => (props.itemWidth ? props.itemWidth : 'auto')};
    user-select: none;
    cursor: pointer;
    text-align: center;

    &:hover {
        color: ${(props) => (props.hoverColor ? props.hoverColor : '#1564f9')} 
    }

    ${(props) =>
        props.active &&
        css`
            color: #1564f9;
        `}

    ${(props) =>
        props.GNBType === 'type01' &&
        css`
            padding: 0 12px 0 16px;
            font-size: ${props.fontSize ? props.fontSize : '13px'};
            color: ${props.fontColor ? props.fontColor : '#888888'};

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
        props.GNBType === 'type02' &&
        css`
            padding: 0 17px;
            font-size: ${props.fontSize ? props.fontSize : '15px'};
            color: ${props.fontColor ? props.fontColor : '#222222'};
        `}

    ${(props) =>
        props.GNBType === 'type03' &&
        css`
            padding: 0 5px 0 8px;
            font-size: ${props.fontSize ? props.fontSize : '13px'};
            color: ${props.fontColor ? props.fontColor : '#888888'};

            & + div {
                &::after {
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    content: '·';
                    color: ${props.fontColor ? props.fontColor : '#888888'};
                }
            }
        `}

    ${(props) =>
        props.GNBType === 'type04' &&
        css`
            font-size: ${props.fontSize ? props.fontSize : '16px'};
            color: ${props.fontColor ? props.fontColor : '#000000'};

            &:hover {
                color: initial;
            }
        `}
    
`;
