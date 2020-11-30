import React from 'react';
import * as S from './style';

export interface ImgProps {
    src?: any; // 이미지 주소
    alt?: string; // 이미지 설명
}

export function Img({ ...props }: ImgProps): React.ReactElement {
    return <S.Img {...props} />;
}
