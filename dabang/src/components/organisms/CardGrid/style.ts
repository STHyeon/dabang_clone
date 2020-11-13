import styled, { css } from 'styled-components';

export const GridItem = styled.div`
    display: inline-block;

    & + & {
        margin: 0 0 0 20px;
    }
`;
