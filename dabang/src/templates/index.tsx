import React from 'react';

import * as S from './style';
import { Header, Footer } from 'components';

export interface BaseProps {
    children: React.ReactNode;
    full?: boolean;
}

export function BaseTemplate({ full, children }: BaseProps): React.ReactElement {
    return (
        <>
            <S.HeaderWrap>
                <Header />
            </S.HeaderWrap>
            {full ? (
                <S.BaseWrap>{children}</S.BaseWrap>
            ) : (
                <S.BaseWrap className="inner">{children}</S.BaseWrap>
            )}
            <Footer />
        </>
    );
}
