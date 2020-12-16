import styled from 'styled-components';

export const Container = styled.ul`
    &::after {
        display: block;
        content: '';
        clear: both;
    }
`;
