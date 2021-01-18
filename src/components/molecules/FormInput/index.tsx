import React from 'react';

import * as S from './style';
import { Label, Img } from 'components';
import BgIcon from 'assets/images/search.svg';

export interface FormInputProps {
    FormInputType?: string; // 타입선택
    labelName?: string; // label 내용
    htmlfor?: string; // 접근성
    invalid?: boolean; // 오류 체크
    disabled?: boolean; // disabled on/off
    required?: boolean; // 필수 값
    defaultValue?: string; // 기본 값
    placeholder?: string; // 유도글
    value?: string; // 값
    src?: string; // 이미지 경로
    alt?: string; // 이미지 설명
    captionContent?: string; // 오류 메세지
    styletype?: string; // 버튼 스타일
    btnText?: string; // 버튼 텍스트
    bgIcon?: boolean; // 백이미지 on/off
    description?: string; // input title 내용
    inputHeight?: string; // input height 설정
}

export function FormInput({ FormInputType, captionContent, labelName, htmlfor, inputHeight, src, alt, styletype, btnText, bgIcon, description, ...props }: FormInputProps): React.ReactElement {
    return (
        <S.FormInputContainer>
            {FormInputType === 'type01' && (
                <>
                    <Label htmlfor={htmlfor} {...props}>
                        {labelName}
                    </Label>
                    <S.FormInput inputHeight={inputHeight} {...props} />
                    {captionContent && <S.FormCaption {...props}>{captionContent}</S.FormCaption>}
                </>
            )}

            {FormInputType === 'type02' && (
                <>
                    {labelName && (
                        <Label htmlfor={htmlfor} {...props}>
                            {labelName}
                        </Label>
                    )}
                    <S.IncludeBtn type02>
                        {bgIcon ? (
                            <>
                                <S.IconWrapper src={BgIcon} alt="돋보기 배경 아이콘" />
                                <S.FormInput type02 inputHeight={inputHeight} {...props} />
                            </>
                        ) : (
                            <S.FormInput description={description} inputHeight={inputHeight} {...props} />
                        )}
                        <S.FormBtn type02 styletype={styletype}>
                            {src ? <Img src={src} alt={alt} /> : `${btnText}`}
                        </S.FormBtn>
                    </S.IncludeBtn>
                    {captionContent && <S.FormCaption {...props}>{captionContent}</S.FormCaption>}
                </>
            )}
        </S.FormInputContainer>
    );
}
