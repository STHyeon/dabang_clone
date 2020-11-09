import React from 'react';
import * as S from './style';

export interface InputProps {
    description: string; // input 설명 (접근성)
    invalid?: boolean; // is invalid
    disabled?: boolean;
    defaultValue?: string;
    placeholder?: string;
    value?: string | number;
}

export function Input({ description, ...props }: InputProps): React.ReactElement {
    return <S.Input title={description} autoComplete="off" {...props} />;
}
