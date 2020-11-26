import React, { useEffect, useRef } from 'react';

import * as S from './style';
declare const kakao: any; // for using kakao map sdk

export interface KakaoMapProps {
    latitude: number;
    longitude: number;
    height?: string;
}

export function KakaoMap({
    latitude,
    longitude,
    height = '100%'
}: KakaoMapProps): React.ReactElement {
    const kakaoMapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const kakaoMapElement = kakaoMapRef.current;
        const options = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567),
            level: 3
        };
        const kakaoMap = new kakao.maps.Map(kakaoMapElement, options);
        const ps = new kakao.maps.services.Places();

        function placesSearchCB(data: any, status: any, pagination: any) {
            if (status === kakao.maps.services.Status.OK) {
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                var bounds = new kakao.maps.LatLngBounds();

                for (var i = 0; i < data.length; i++) {
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                kakaoMap.setBounds(bounds);
            }
        }

        ps.keywordSearch('신정역', placesSearchCB);
    }, [latitude, longitude]);

    return <S.Container ref={kakaoMapRef} height={height} />;
}
