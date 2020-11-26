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
    inputType?: string;

    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent) => void;
}

export function Input({ id, description, inputType, ...props }: InputProps): React.ReactElement {
    return (
        <>
            {inputType ? (
                <S.Input
                    type={inputType}
                    id={id}
                    title={description}
                    autoComplete="off"
                    {...props}
                />
            ) : (
                <S.Input type="text" id={id} title={description} autoComplete="off" {...props} />
            )}
        </>
    );
}
