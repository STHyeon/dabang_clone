import React from 'react';
import * as S from './style';

import { BaseTemplate } from '../../templates';
import { Boxes, CardGrid, Card } from '../../components';
import {
    SEEROOM,
    LOVEROOM,
    ROOMDESCRIPTION,
    RECENTLYROOMTEXT,
    SEECOMPLEX,
    LOVECOMPLEX,
    COMPLEXDESCRIPTION,
    RECENTLYCOMPLEXTEXT,
    EASYFINDTXT,
    EASYFINDDESCRIPTION
} from 'utils/contents/String';
import { Type02CardData, Type03CardData, Type04CardData } from 'utils/contents/data';

export function Main() {
    return (
        <BaseTemplate>
            <S.Part type01>
                <Boxes BoxesType="type01" />
            </S.Part>

            <S.Part type02>
                <Boxes
                    BoxesType="type02"
                    ListText={EASYFINDTXT}
                    ListDescription={EASYFINDDESCRIPTION}
                />
                <CardGrid data={Type04CardData} boxWidth="15.7%" cardImgHeight="100px" />
                <S.LastBox>
                    <Card CardType="type04" to="/" noneTitle={RECENTLYROOMTEXT} />
                </S.LastBox>
            </S.Part>

            <S.Part type03>
                <S.BoxWrap>
                    <Boxes
                        BoxesType="type02"
                        ListText={SEEROOM}
                        StrongListText={LOVEROOM}
                        ListDescription={ROOMDESCRIPTION}
                    />
                    <CardGrid data={Type02CardData} boxWidth="23.5%" cardImgHeight="186px" />
                    <S.LastBox>
                        <Card CardType="type05" to="/" noneTitle={RECENTLYROOMTEXT} />
                    </S.LastBox>
                </S.BoxWrap>

                <S.BoxWrap>
                    <Boxes
                        BoxesType="type02"
                        ListText={SEECOMPLEX}
                        StrongListText={LOVECOMPLEX}
                        ListDescription={COMPLEXDESCRIPTION}
                    />
                    <CardGrid data={Type03CardData} boxWidth="23.5%" cardImgHeight="186px" />
                    <S.LastBox>
                        <Card CardType="type05" to="/" noneTitle={RECENTLYCOMPLEXTEXT} />
                    </S.LastBox>
                </S.BoxWrap>
            </S.Part>
        </BaseTemplate>
    );
}
