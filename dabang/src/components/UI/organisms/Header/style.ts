import styled, { css } from 'styled-components';

interface Props {
    fl_l?: boolean;
    fl_r?: boolean;
}

export const Container = styled.div`
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #ebebeb;
    line-height: 70px;
`;

export const HeaderWrapper = styled.div<Props>`
    display: inline-block;

    ${(props) =>
        props.fl_l &&
        css`
            & + div {
                margin: 0 0 0 22px;
            }
        `}

    ${(props) =>
        props.fl_r &&
        css`
            & + div {
                margin: 0 0 0 50px;
            }
        `}
`;
