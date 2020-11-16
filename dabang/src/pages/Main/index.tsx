import React from 'react';
import * as S from './style';

import { BaseTemplate } from '../../templates';
import { Boxes, CardGrid, Card } from '../../components';
import {
    SEEROOM,
    SEECOMPLEX,
    ROOMDESCRIPTION,
    LOVEROOM,
    LOVECOMPLEX,
    COMPLEXDESCRIPTION,
    RECENTLYROOMTEXT
} from 'utils/contents/String';
import { Type01CardData } from 'utils/contents/data';

export function Main() {
    return (
        <BaseTemplate>
            <S.Part type01>
                <Boxes BoxesType="type01" />
            </S.Part>
            <S.Part type02>
                <S.BoxWrap>
                    <Boxes
                        BoxesType="type02"
                        ListText={SEEROOM}
                        StrongListText={LOVEROOM}
                        ListDescription={ROOMDESCRIPTION}
                    />
                    <CardGrid data={Type01CardData} />
                    <S.LastBox>
                        <Card
                            CardType="type05"
                            to="/"
                            noneTitle={RECENTLYROOMTEXT}
                            boxWidth="27%"
                        />
                    </S.LastBox>
                </S.BoxWrap>

                <S.BoxWrap>
                    <Boxes
                        BoxesType="type02"
                        ListText={SEEROOM}
                        StrongListText={LOVEROOM}
                        ListDescription={ROOMDESCRIPTION}
                    />
                    <CardGrid data={Type01CardData} />
                    <S.LastBox>
                        <Card CardType="type05" to="/" noneTitle={RECENTLYROOMTEXT} />
                    </S.LastBox>
                </S.BoxWrap>
            </S.Part>
        </BaseTemplate>
    );
}
