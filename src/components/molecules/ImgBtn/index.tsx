import React from 'react';

import * as S from './style';
import { Img } from 'components';

export interface ImgBtnProps {
    src?: string; // 이미지 주소
    alt?: string; // 이미지 설명
    to?: string; // 외부 링크
    href?: string; // 외부 링크
    styletype?: string; // 버튼 타입
    onClick?: () => void;
}

export function ImgBtn({
    src,
    alt,
    to,
    href,
    styletype = 'transparent',
    onClick
}: ImgBtnProps): React.ReactElement {
    return (
        <S.ImgBtnWrapper to={to} href={href} styletype={styletype} onClick={onClick}>
            <Img src={src} alt={alt} />
        </S.ImgBtnWrapper>
    );
}

export default ImgBtn;
