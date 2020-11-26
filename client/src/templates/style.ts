import styled, { css } from 'styled-components';

interface Props {
    full?: boolean;
}

export const HeaderWrap = styled.div``;

export const BaseWrap = styled.div<Props>`
    ${(props) =>
        props.full &&
        css`
            width: 100%;
            height: 100%;
        `}
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;
