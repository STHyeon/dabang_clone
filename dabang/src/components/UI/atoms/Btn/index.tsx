import React from 'react';
import * as S from './style';

export interface BtnProps {
    children: React.ReactElement | string; // 버튼 내용 또는 엘리먼트
    to?: string; // Link 경로
    href?: string; // a tag 경로
    styletype?: string; // button styling type (ex. priamry, disable)
    // styletype?: 'primary' | 'alert'; // button styling type (ex. priamry, disable)
    disabled?: boolean; //disabled 여부
    onClick?: () => void;
}

export function Btn({
    children,
    to,
    href,
    styletype = 'primary',
    ...props
}: BtnProps): React.ReactElement {
    if (to) {
        return (
            <S.StyledLink styletype={styletype} to={to} {...props}>
                {children}
            </S.StyledLink>
        );
    } else if (href) {
        return (
            <S.StyledAnchor styletype={styletype} href={href} {...props}>
                {children}
            </S.StyledAnchor>
        );
    }
    return (
        <S.StyledBtn styletype={styletype} {...props}>
            {children}
        </S.StyledBtn>
    );
}
