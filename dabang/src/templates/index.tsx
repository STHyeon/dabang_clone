import React from 'react';

import * as S from './style';
import { Header, Boxes, CardGrid } from 'components';

export interface BaseProps {
    children: React.ReactNode;
}

export function BaseTemplate({ children }: BaseProps): React.ReactElement {
    return (
        <>
            <S.HeaderWrap>
                <Header />
            </S.HeaderWrap>
            <S.BaseWrap>{children}</S.BaseWrap>
        </>
    );
}
