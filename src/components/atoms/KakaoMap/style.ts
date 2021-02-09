import styled from 'styled-components';

interface ContainerProps {
    height: string;
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: ${(props) => (props.height ? props.height : '28rem')};
    border-radius: 0.3rem;
`;
