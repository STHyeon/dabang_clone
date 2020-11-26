import React, { useState } from 'react';
import { BaseTemplate } from '../../templates';
import { Input, SearchMap, CardGrid } from 'components';
import { LOVEMENU } from 'utils/contents/string';
import { Type02CardData } from 'utils/contents/data';
import * as S from './style';

export function Find() {
    const [keyword, setKeyword] = useState<string>('');

    const handleKeywordChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        setKeyword(e.target.value);
    };

    return (
        <BaseTemplate full>
            <S.AddressBox>
                <Input
                    onChange={handleKeywordChange}
                    placeholder="주소를 입력해주세요."
                    description="주소입력칸"
                    inputHeight="64px"
                />
            </S.AddressBox>
            <div className="clearfix">
                <S.FindRoomBox className="fl_l">
                    <S.TotalRoom>
                        전체 방 <span>111</span>개
                    </S.TotalRoom>
                    <CardGrid
                        data={Type02CardData}
                        boxWidth="calc(50% - 16px);"
                        cardImgHeight="100px"
                    />
                </S.FindRoomBox>
                <S.MapBox className="fl_r">
                    <SearchMap address={keyword} />
                </S.MapBox>
            </div>
        </BaseTemplate>
    );
}
