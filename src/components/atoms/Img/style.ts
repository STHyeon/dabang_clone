import styled from 'styled-components';

interface ImgProps {
    height?: string;
}

export const Img = styled.img<ImgProps>`
    width: 100%;
    height: ${(props) => (props.height ? props.height : '100%')};
    border-radius: inherit;
    vertical-align: middle;
`;
