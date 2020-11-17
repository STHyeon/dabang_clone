import React from 'react';

import * as S from './style';
import { Header, Footer } from 'components';

export interface BaseProps {
    children: React.ReactNode;
}

export function BaseTemplate({ children }: BaseProps): React.ReactElement {
    return (
        <>
            <S.HeaderWrap>
                <Header />
            </S.HeaderWrap>
            <S.BaseWrap className="inner">{children}</S.BaseWrap>
            <Footer />
        </>
    );
}
