import styled, { css } from 'styled-components';

interface Props {
    invalid?: boolean;
}

export const Input = styled.input<Props>`
    border-radius: 2px;

    &:focus {
        outline: none;
    }

    &:disabled {
        background: #eeeeee;
    }

    ${(props) =>
        props.invalid &&
        css`
            border: 1px solid red;
        `}
`;
