import React from 'react';

import * as S from './style';

export interface LabelProps {
    children?: string | React.ReactElement;
    required?: boolean;
    htmlfor?: string;
}

export function Label({ children, htmlfor, required = false, ...props }: LabelProps): React.ReactElement {
    return (
        <S.Label htmlFor={htmlfor} required={required} {...props}>
            {children}
        </S.Label>
    );
}
