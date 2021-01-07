import React from 'react';

import * as S from './style';

export interface LabelProps {
    children: string | React.ReactElement;
    htmlFor: string;
    required?: boolean;
}

export function Label({ children, htmlFor, required = false, ...props }: LabelProps): React.ReactElement {
    return (
        <S.Label htmlFor={htmlFor} required={required} {...props}>
            {children}
        </S.Label>
    );
}
