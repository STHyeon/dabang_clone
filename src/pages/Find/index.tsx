import React, { useState } from 'react';
import { BaseTemplate } from '../../templates';
import { Input, KakaoMap, CardGrid, Icon } from 'components';
import { Type02CardData } from 'utils/contents/data';
import * as S from './style';

export function Find() {
    const [keyword, setKeyword] = useState<string>('');
    const [findRoom, setFindRoom] = useState<boolean>(false);

    const handleKeywordChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        setKeyword(e.target.value);
    };

    const handleFindRoom = async () => {
        setFindRoom(!findRoom);
    };

    return (
        <BaseTemplate full>
            <S.AddressBox>
                <Input onChange={handleKeywordChange} placeholder="주소를 입력해주세요." description="주소입력칸" />
            </S.AddressBox>
            <S.Container className="clearfix">
                <S.FindRoomBox className="fl_l" setFindRoom={findRoom}>
                    <S.TotalRoom>
                        전체 방 <span>111</span>개
                    </S.TotalRoom>
                    <S.RoomBox>
                        <CardGrid data={Type02CardData} boxWidth="calc(50% - 16px);" cardImgHeight="100px" />
                    </S.RoomBox>
                    {findRoom ? null : (
                        <S.IconBox onClick={handleFindRoom}>
                            <Icon iconType="fas" iconTitle="angle-right" iconSize="24px" />
                        </S.IconBox>
                    )}
                </S.FindRoomBox>
                <S.MapBox className="fl_r">
                    <KakaoMap address={keyword} />
                </S.MapBox>
            </S.Container>
        </BaseTemplate>
    );
}
