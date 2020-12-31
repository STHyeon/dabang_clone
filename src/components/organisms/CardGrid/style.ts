import styled from 'styled-components';
import { device } from 'utils/style/media';

interface Props {
    boxWidth?: string; // box 크기
}

export const GridItem = styled.ul<Props>`
    li {
        display: inline-block;
        width: ${(props) => props.boxWidth && props.boxWidth};
    }
`;
