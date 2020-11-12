import styled, { css } from 'styled-components';

interface Props {
    invalid?: boolean;
    inputHeight?: string;
}

export const Input = styled.input<Props>`
    height: ${(props) => props.inputHeight && props.inputHeight};
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
