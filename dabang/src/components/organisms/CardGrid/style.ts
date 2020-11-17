import styled from 'styled-components';

interface Props {
    boxWidth?: string; // box 크기
}

export const GridItem = styled.div<Props>`
    display: inline-block;

    & + & {
        margin: 0 0 0 20px;
    }

    width: ${(props) => props.boxWidth && props.boxWidth};
`;
