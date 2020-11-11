import styled from 'styled-components';

import { Input } from 'components/UI';

interface Props {
    invalid?: boolean;
}

export const FormInputContainer = styled.div`
    height: 9rem;
    display: flex;
    flex-direction: column;
`;

export const FormInput = styled(Input)``;

export const FormCaption = styled.div<Props>`
    margin: 0.3rem 0;
    font-size: 12px;
    color: red;
`;
