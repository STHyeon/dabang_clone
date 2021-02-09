import React from 'react';
import * as S from './style';
import BgIcon from 'assets/images/search.svg';

export interface FormInputProps {
    htmlFor?: string; // Input 연결
    children?: string | React.ReactElement; // label 내용
    disabled?: boolean; // disabled on/off
    required?: boolean; // 필수 여부
    placeholder?: string; // 유도글
    invalid?: boolean; // 오류 체크
    captionContent?: string; // 오류 메세지
    inputTitle?: string; // 접근성
    buttonContent?: string; // 버튼 내용
}

export function FormInput({ children, invalid, captionContent, htmlFor, inputTitle, buttonContent, ...props }: FormInputProps): React.ReactElement {
    return (
        <>
            {children && htmlFor ? (
                <S.FormInputContainer>
                    <S.FormLabel htmlFor={htmlFor} {...props}>
                        {children}
                    </S.FormLabel>
                    <S.FormInput id={htmlFor} {...props} />
                    {invalid && <S.FormCaption {...props}>{captionContent}</S.FormCaption>}
                </S.FormInputContainer>
            ) : (
                <S.FormInputContainer>
                    <S.FormInput description={inputTitle} {...props} />
                    <S.FormBtn btnType="border_none">{buttonContent ? buttonContent : <S.SearchIcon src={BgIcon} alt="검색 아이콘" />}</S.FormBtn>
                </S.FormInputContainer>
            )}
        </>
    );
}
