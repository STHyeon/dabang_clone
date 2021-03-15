import React, { useState, useEffect } from 'react';
import { BaseTemplate } from '../../templates';
import { CardGrid } from 'components';
import { LOVEMENU } from 'utils/contents/string';
import { Type05CardData } from 'utils/contents/data';
import { CardProps } from '../../components/molecules/Card';
import * as S from './style';

interface LoveProps {
    data: CardProps[];
    range: number;
    preRange: number;
}

export function Love() {
    const [loveData, setLoveData] = useState<LoveProps>({
        data: [],
        range: 4,
        preRange: 0
    });

    const getData = () => {
        const result = Type05CardData.slice(loveData.preRange, loveData.range);
        setLoveData({ ...loveData, data: [...loveData.data, ...result] });
    };

    const infiniteScroll = async () => {
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        let clientHeight = document.documentElement.clientHeight;

        if (scrollTop + clientHeight === scrollHeight) {
            setLoveData({ ...loveData, preRange: loveData.range, range: loveData.range + 4 });
        }
    };

    useEffect(() => {
        getData();
    }, [loveData.range]);

    useEffect(() => {
        window.addEventListener('scroll', infiniteScroll);
        return () => {
            window.removeEventListener('scroll', infiniteScroll);
        };
    });

    return (
        <BaseTemplate>
            <S.LoveTitle>관심목록</S.LoveTitle>
            {/* <S.List>
                <GNB items={LOVEMENU} GNBType="type02" itemWidth="20%" hoverColor="#000000" fontColor="#888888" />
            </S.List> */}
            <S.AlertBox className="clearfix">
                <S.RecData className="fl_l">
                    총 <S.RecDataNum>1개</S.RecDataNum>의 최근 본 방이 있습니다
                </S.RecData>
                <S.MaxData className="fl_r">최근 본 방은 최대 50개까지 저장됩니다.</S.MaxData>
            </S.AlertBox>
            <S.CardGridBox>
                <CardGrid data={loveData.data} boxWidth="23.5%" cardImgHeight="186px" />
            </S.CardGridBox>
        </BaseTemplate>
    );
}
