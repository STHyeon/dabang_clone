import React from 'react';

import * as S from './style';

export interface LabelProps {
    name?: string;
    required?: boolean;
    htmlfor?: string;
}

export function Label({ name, htmlfor, required = false }: LabelProps): React.ReactElement {
    return (
        <S.Label htmlFor={htmlfor} required={required}>
            {name}
        </S.Label>
    );
}

export default Label;
