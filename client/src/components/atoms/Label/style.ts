import styled, { css } from 'styled-components';

interface Props {
    required?: boolean;
}

export const Label = styled.label<Props>`
    margin: 0 0 5px;
    font-size: 14px;
    color: #414141;

    ${(props) =>
        props.required &&
        css`
            &::after {
                content: '*';
                color: red;
            }
        `}
`;
