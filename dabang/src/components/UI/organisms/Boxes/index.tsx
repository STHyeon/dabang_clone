import React from 'react';

import * as S from './style';
import { FormInput } from 'components/UI';

export interface BoxesProps {
    ListText?: string;
    StrongListText?: string;
    ListDescription?: string;
}

export function Boxes1(): React.ReactElement {
    return (
        <S.Container>
            <S.MainText>
                <S.MainStrongText>어떤 동네, 어떤 방</S.MainStrongText>에서
                <br />
                살고 싶으신가요?
            </S.MainText>

            <FormInput
                selectType="type02"
                btnText="방 찾기"
                styletype="secondary"
                description="검색어를 입력해주세요."
                inputHeight="58px"
                bgIcon
            />
        </S.Container>
    );
}

export function Boxes2({
    ListText,
    StrongListText,
    ListDescription
}: BoxesProps): React.ReactElement {
    return (
        <S.Container>
            <S.ListText type01>
                {ListText} <S.SideMainText>{StrongListText}</S.SideMainText>
            </S.ListText>
            <S.ListText type02>{ListDescription}</S.ListText>
        </S.Container>
    );
}
