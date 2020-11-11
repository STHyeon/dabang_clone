import React from 'react';

import * as S from './style';
import { Label } from 'components/UI';

export interface FormInputProps {
    inputName: string; // label 내용
    htmlfor: string; // 접근성
    invalid?: boolean; // 오류 체크
    disabled?: boolean; // disabled on/off
    required?: boolean; // 필수 값
    defaultValue?: string; // 기본 값
    placeholder?: string; // 유도글
    value?: string; // 값
    captionContent?: string; // 오류 메세지
}

export function FormInput({
    captionContent,
    inputName,
    htmlfor,
    ...props
}: FormInputProps): React.ReactElement {
    return (
        <S.FormInputContainer>
            <Label htmlfor={htmlfor} name={inputName} {...props} />
            <S.FormInput {...props} />
            <S.FormCaption {...props}>{captionContent}</S.FormCaption>
        </S.FormInputContainer>
    );
}

export default FormInput;
