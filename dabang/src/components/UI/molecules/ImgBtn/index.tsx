import React from 'react';

import * as S from './style';
import { Btn, Img } from 'components/UI';

export interface ImgBtnProps {
    src: string; // 이미지 주소
    alt: string; // 이미지 설명
    to?: string; // 외부 링크
    href?: string; // 외부 링크
    styletype?: string; // 버튼 타입
}

export function ImgBtn({
    src,
    alt,
    to,
    href,
    styletype = 'transparent'
}: ImgBtnProps): React.ReactElement {
    return (
        <S.ImgBtnWrapper>
            <Btn to={to} href={href} styletype={styletype}>
                <Img src={src} alt={alt} />
            </Btn>
        </S.ImgBtnWrapper>
    );
}

export default ImgBtn;
