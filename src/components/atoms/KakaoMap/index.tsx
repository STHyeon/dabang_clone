import React, { useEffect, useRef } from 'react';

import * as S from './style';
declare const kakao: any; // for using kakao map sdk

interface PositionProps {
    title: string;
    latitude: number;
    longitude: number;
}

export interface KakaoMapProps {
    address?: string;
    positions?: Array<PositionProps>;
    height?: string;
}

export function KakaoMap({
    address,
    positions,
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

        ps.keywordSearch(address, placesSearchCB);

        if (positions) {
            // 마커 클러스터러를 생성합니다
            var clusterer = new kakao.maps.MarkerClusterer({
                map: kakaoMap, // 마커들을 클러스터로 관리하고 표시할 지도 객체
                averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
                minLevel: 8 // 클러스터 할 최소 지도 레벨
            });

            // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
            var markers = positions.map(function (position: any, i: any) {
                return new kakao.maps.Marker({
                    position: new kakao.maps.LatLng(position.latitude, position.longitude)
                });
            });

            // 클러스터러에 마커들을 추가합니다
            clusterer.addMarkers(markers);
        }
    }, [address, positions]);

    return <S.Container ref={kakaoMapRef} height={height} />;
}
