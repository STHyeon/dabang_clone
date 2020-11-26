import React, { useState } from 'react';
import { Input, KakaoMap } from 'components';
declare const kakao: any;

interface Location {
    latitude: number;
    longitude: number;
}

interface CoordinateProps {
    [index: number]: { x: string; y: string };
}

export function SearchMap(): React.ReactElement {
    // const [visible, setVisible] = useState<boolean>(true); // dropdown
    const [keyword, setKeyword] = useState<string>('');
    const [location, setLocation] = useState<Location>({
        latitude: 37.4921311495846,
        longitude: 127.029771111346
    });

    function FindCoordinate(address: string) {
        var geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch(address, function (result: CoordinateProps, status: string) {
            if (status === kakao.maps.services.Status.OK) {
                setLocation({ latitude: Number(result[0].y), longitude: Number(result[0].x) });
            }
        });
    }

    const handleKeywordChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        setKeyword(e.target.value);
        // setVisible(true);
    };

    const handleKeyPress = (e: React.KeyboardEvent): void => {
        if (e.key === 'Enter') {
            FindCoordinate(keyword);
            // setVisible(false);
        }
    };

    return (
        <div>
            <Input
                value={keyword}
                onChange={handleKeywordChange}
                placeholder="주소를 입력해주세요."
                description="주소입력칸"
                onKeyPress={handleKeyPress}
            />
            <KakaoMap {...location} />
        </div>
    );
}
