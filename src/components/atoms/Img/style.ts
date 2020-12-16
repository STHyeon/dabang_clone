import styled from 'styled-components';

interface Props {
    height?: string;
}

export const Img = styled.img<Props>`
    width: 100%;
    height: ${(props) => (props.height ? props.height : '100%')};
    border-radius: inherit;
    vertical-align: middle;
`;
