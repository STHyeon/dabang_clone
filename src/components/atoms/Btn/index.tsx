import React from 'react';
import * as S from './style';

export interface BtnProps {
    children?: React.ReactElement | string; // 버튼 내용 또는 엘리먼트
    disabled?: boolean; //disabled 여부
    btnType?: string; // button styling type (ex. priamry, disable)
    btnOnClick?: () => void; // 클릭 이벤트
}

export interface LinkBtnProps extends BtnProps {
    btnLink: string; // Link 경로
}

export function Btn({ children, btnOnClick, ...props }: BtnProps): React.ReactElement {
    return (
        <S.Btn onClick={btnOnClick} {...props}>
            {children}
        </S.Btn>
    );
}

export function LinkBtn({ children, btnLink, btnOnClick, ...props }: LinkBtnProps): React.ReactElement {
    return (
        <S.LinkBtn onClick={btnOnClick} to={btnLink} {...props}>
            {children}
        </S.LinkBtn>
    );
}
