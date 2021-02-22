import React from 'react';
import * as S from './style';

export interface ImgProps {
    src: any; // 이미지 주소
    alt: string; // 이미지 설명
    height?: string;
}

export function Img({ height, ...props }: ImgProps): React.ReactElement {
    return <S.Img height={height} {...props} />;
}
