import React from 'react';
import * as S from './style';

import { BaseTemplate } from 'templates';
import { Boxes, CardGrid, Slick } from 'components';
import {
    SEEROOM,
    LOVEROOM,
    ROOMDESCRIPTION,
    SEECOMPLEX,
    LOVECOMPLEX,
    COMPLEXDESCRIPTION,
    EASYFINDTXT,
    EASYFINDDESCRIPTION
} from 'utils/contents/string';
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
                <S.CardBox type02>
                    <Slick
                        data={Type04CardData}
                        boxWidth={185}
                        cardImgHeight={100}
                        slidesToScroll={5}
                        slidesToShow={5}
                    />
                </S.CardBox>
            </S.Part>

            <S.Part type03>
                <S.BoxWrap>
                    <Boxes
                        BoxesType="type02"
                        ListText={SEEROOM}
                        StrongListText={LOVEROOM}
                        ListDescription={ROOMDESCRIPTION}
                    />
                    <S.CardBox type03>
                        <CardGrid
                            data={Type02CardData}
                            boxWidth="23.5%"
                            cardImgHeight="186px"
                            cardGroup="room"
                        />
                    </S.CardBox>
                </S.BoxWrap>

                <S.BoxWrap>
                    <Boxes
                        BoxesType="type02"
                        ListText={SEECOMPLEX}
                        StrongListText={LOVECOMPLEX}
                        ListDescription={COMPLEXDESCRIPTION}
                    />
                    <S.CardBox type03>
                        <CardGrid
                            data={Type03CardData}
                            boxWidth="23.5%"
                            cardImgHeight="186px"
                            cardGroup="complex"
                        />
                    </S.CardBox>
                </S.BoxWrap>
            </S.Part>
        </BaseTemplate>
    );
}
