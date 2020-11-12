import React from 'react';
import * as S from './style';

export interface InputProps {
    id?: string; // 접근성
    description?: string; // input 설명 (접근성)
    invalid?: boolean; // is invalid
    disabled?: boolean;
    defaultValue?: string;
    placeholder?: string;
    value?: string | number;
    inputHeight?: string;
}

export function Input({ id, description, ...props }: InputProps): React.ReactElement {
    return <S.Input id={id} title={description} autoComplete="off" {...props} />;
}
