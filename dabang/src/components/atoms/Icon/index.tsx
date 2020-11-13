import React from 'react';
import * as S from './style';

export interface IconProps {
    src?: string; // 이미지 주소
    alt?: string; // 이미지 설명
    height?: string;
}

export function Icon({ height = '2rem', ...props }: IconProps): React.ReactElement {
    return <S.ImgStyle height={height} {...props} />;
}
