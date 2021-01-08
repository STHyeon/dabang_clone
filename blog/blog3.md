## 안녕하세요! 👏
지난 글에 이어서 Atoms(재료)를 만들어보겠습니다.
<br />

## 목차 📋
1. [기본 세팅](https://toby2009.tistory.com/43)
2. [Atoms 생성 - 1](https://toby2009.tistory.com/44)
3. [Atoms 생성 - 2](https://toby2009.tistory.com/44)

<br />

### 아이콘(Icon)
아이콘은 FontAwesome을 사용할겁니다.

설치 - [공식문서](https://fontawesome.com/how-to-use/on-the-web/using-with/react)

```console
npm i --save @fortawesome/fontawesome-svg-core

npm install --save @fortawesome/free-solid-svg-icons

npm install --save @fortawesome/react-fontawesome

```
<br />

사용법
```javascript
<FontAwesomeIcon icon={["fas", "coffee"]} />
```
<br />

이런 형식을 이용합니다.
<br />

파일구조
```
ㄴatoms
│
└───Icon
    │   
    │   index.tsx
    │   index.stories.tsx
    └── styles.ts
```
<br />

스타일을 먼저 정의해줍니다.

```javascript
// style.ts

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconProps {
    iconSize?: string;
}

export const Icon = styled(FontAwesomeIcon)<IconProps>`
    font-size: ${(props) => (props.iconSize ? props.iconSize : '16px')};
`;

```
<br />

```javascript
// index.tsx

import React from 'react';
import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import * as S from './style';

export interface IconProps {
    iconType: IconPrefix; // FontAwesome 타입
    iconTitle: IconName; // FontAwesome 이름
    iconSize?: string;
}

export function Icon({ iconType, iconTitle, ...props }: IconProps): React.ReactElement {
    library.add(fas);

    return <S.Icon icon={[iconType, iconTitle]} {...props} />;
}
```
여기서 <b>library.add()</b>를 이용하여 fas, fab ... 등을 추가할 수 있습니다.
<br />

```javascript
// index.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react';

import { Icon, IconProps } from './index';

export default {
    title: 'Atoms/Icon'
} as Meta;

export const general = (args: IconProps) => <Icon {...args} />;
general.args = {
    iconType: 'fas',
    iconTitle: 'chevron-right',
    iconSize: '24px'
};

```
<br />

예제로 오른쪽 화살표를 넣어봤습니다. <br />

<img src="https://user-images.githubusercontent.com/37692675/103840799-9c91f780-50d5-11eb-91a4-7208adf93acc.png" width="100%" />
iconType을 알아보려면 사이트에서 원하는 아이콘을 클릭하고 i태그 내에 <u>class를 확인</u>해봅니다.
<b>fas fa-chevron-right</b> <br />
fas - iconType <br />
<u>fa-</u> 제외한 나머지 - iconTitle
<br />

### 이미지(Img)

```javascript
// style.ts

import styled from 'styled-components';

interface ImgProps {
    height?: string;
}

export const Img = styled.img<ImgProps>`
    width: 100%;
    height: ${(props) => (props.height ? props.height : '100%')};
    border-radius: inherit;
    vertical-align: middle;
`;
```
이미지는 페이지마다 높이가 다르기 때문에 기본 100%로 설정합니다.
<br />

```javascript
// index.tsx

import React from 'react';
import * as S from './style';

export interface ImgProps {
    src: any; // 이미지 주소
    alt: string; // 이미지 설명
    height?: string;
}

export function Img({ height, ...props }: ImgProps): React.ReactElement {
    return <S.Img height={height} {...props} />;
}
```
이미지 src는 타입을 알 수가 없어서 any로 처리했습니다...
아시는 분은 댓글로 알려주세요!
<br />

```javascript
// index.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react';

import { Img, ImgProps } from './index';
import LogoSvg from 'assets/images/logo.svg';

export default {
    title: 'Atoms/Img'
} as Meta;

export const general = (args: ImgProps) => <Img {...args} />;
general.args = {
    src: LogoSvg,
    alt: '로고'
};
```
이미지는 위처럼 <b>import</b>해서 가져옵니다.
※ 웹접근성을 위해 <span style="color: red;">대체 텍스트(alt)를 꼭 써줍시다. 빈칸도 가능!</span>
> 참고 글: [웹접근성 적용하기](https://toby2009.tistory.com/42)

<br />

### 입력(Input)

```javascript
// style.ts

import styled, { css } from 'styled-components';

interface InputProps {
    invalid?: boolean;
    height?: string;
}

export const Input = styled.input<InputProps>`
    height: ${(props) => (props.height ? props.height : '33px')};
    border-radius: 2px;
    background: #ffffff;

    &:focus {
        outline: none;
    }

    &:disabled {
        background: #eeeeee;
    }

    ${(props) =>
        props.invalid &&
        css`
            border: 1px solid red;
        `}
`;
```
<br />

```javascript
// index.tsx

import React from 'react';
import * as S from './style';

export interface InputProps {
    id?: string; // 접근성
    inputType?: string; // input type 설정
    description?: string; // input 설명 (접근성)
    invalid?: boolean; // is invalid
    disabled?: boolean;
    defaultValue?: string; // 기본값
    placeholder?: string; // 힌트
    value?: string | number;
    height?: string;

    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent) => void;
}

export function Input({ id, description, inputType, ...props }: InputProps): React.ReactElement {
    return (
        <>{inputType ? <S.Input type={inputType} id={id} title={description} autoComplete="off" {...props} /> : <S.Input type="text" id={id} title={description} autoComplete="off" {...props} />}</>
    );
}
```
<br />

id는 label과 함께 써주시면 되고, description은 label이 없을 경우 작성해주시면 됩니다.
<b>자세한 내용은 Molecules에서 합칠 때 설명드리겠습니다.</b>
<br />

```javascript
// index.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react';

import { Input, InputProps } from './index';

export default {
    title: 'Atoms/Input'
} as Meta;

export const general = (args: InputProps) => <Input {...args} />;
general.args = {
    description: '예제',
    invalid: false,
    disabled: false,
    placeholder: '입력해주세요.'
};
```

### 라벨(Label)
라벨은 'for'속성을 이용하여 input의 'id'와 연결하여 사용합니다. 하지만 디자인상 input을 넣지 못할 때도 있습니다.
그럴 때 input의 'title'속성에 label내용을 입력해주면 됩니다.
<br />

```javascript
// style.ts

import styled, { css } from 'styled-components';

interface LabelProps {
    required?: boolean;
}

export const Label = styled.label<LabelProps>`
    font-size: 14px;
    color: #414141;

    ${(props) =>
        props.required &&
        css`
            &::after {
                content: '*';
                color: red;
            }
        `}
`;

```
<br />

```javascript
// index.tsx

import React from 'react';

import * as S from './style';

export interface LabelProps {
    children: string | React.ReactElement;
    htmlFor: string;
    required?: boolean;
}

export function Label({ children, htmlFor, required = false, ...props }: LabelProps): React.ReactElement {
    return (
        <S.Label htmlFor={htmlFor} required={required} {...props}>
            {children}
        </S.Label>
    );
}
```
<span style="color: red;">React에서 label 속성 중 하나인 for을 사용하려면 htmlFor로 변경하여 사용해야합니다.</span>
<br />

```javascript
// index.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react';

import { Label, LabelProps } from './index';

export default {
    title: 'Atoms/Label'
} as Meta;

export const general = (args: LabelProps) => <Label {...args} />;
general.args = {
    children: '라벨',
    required: false,
    htmlFor: 'ex'
};
```
<br />

### 카카오맵(KakaoMap)

다방 - 방찾기 페이지를 접속해보시면 지도가 뜹니다. 저는 여러 지도 API 중 카카오 맵을 이용합니다.
<br />

카카오맵을 이용하려면 스크립트문을 적용해야합니다. 하지만 storybook에는 head 부분이 따로 없기에 만들어 줘야합니다.
[카카오맵 공식문서](https://apis.map.kakao.com/)
<br />

우선, .storybook/preview-head.html 파일을 생성해줍니다.
헷갈릴수도 있으니 아래 폴더 구조를 참고해주시면 될 것 같습니다.
```
project
└───.storybook
│   │   ...
│   │   preview-head.html // 추가
│
└───node_modules
└───public
└───src
│
│   ...

```
<br />

먼저, 검색에 "React kakao map" 이런 식으로만 검색하셔서 나오는 강의 글 중 아무거나 들어가셔서 api키 받는 것까지만 따라해주시면 됩니다.
그런 후, api키는 소중한 정보이니 <b>.env</b>파일에 작성해 줍니다.
```
NODE_PATH=src/

REACT_APP_KAKAO_MAP_KEY=123456456825488
```
<br />


```html
<!-- preview-head.html -->

<script
    type="text/javascript"
    src="//dapi.kakao.com/v2/maps/sdk.js?appkey=%REACT_APP_KAKAO_MAP_KEY%&libraries=services,clusterer"
></script>

```
원래대로면 %React_APP_KAKAO_MAP_KEY%에서 끝나야 하지만

<img src="https://user-images.githubusercontent.com/37692675/103867695-227c6580-510b-11eb-8c9a-93019de8684a.png" width="100%" />

저희는 zoom 범위에 따라 보이는 마커가 다른 기능이 필요하기 때문에 'clusterer' 라이브러리를 불러온 겁니다.
<br />

```javascript
// style.ts

import styled from 'styled-components';

interface ContainerProps {
    height: string;
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: ${(props) => (props.height ? props.height : '28rem')};
    border-radius: 0.3rem;
`;

```

<br />

```javascript
// index.ts

import React, { useEffect, useRef } from 'react';
import * as S from './style';

declare const kakao: any; // for using kakao map sdk

// 위치 데이터 type 정의
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

export function KakaoMap({ address, positions, height = '100%' }: KakaoMapProps): React.ReactElement {
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

```
<br />
index.tsx 안에 내용은 거의 공식문서를 참고하였습니다.

[클러스터 - 카카오맵 공식문서](https://apis.map.kakao.com/web/sample/basicClusterer/) - zoom 범위에 따라 여러 마커를 하나로 보이게 해주는 라이브러리
[지도 범위 재설정 - 카카오맵 공식문서](https://apis.map.kakao.com/web/sample/setBounds/) - 위치 재설정시 지도 범위 재설정

저는 위 2개를 합쳤습니다.
서울역을 검색(지도 범위 재설정)하면 서울역 주변 방 위치(클러스터)를 볼 수 있게 만들었습니다.
<br />

그 외 설명들은 주석에 달아놓았습니다.
<br />

```javascript
// index.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react';
import { KakaoMap, KakaoMapProps } from './index';

export default {
    title: 'Atoms/KakaoMap',
    component: KakaoMap
} as Meta;

export const general = (args: KakaoMapProps) => <KakaoMap {...args} />;
general.args = {
    address: '카카오 본사',
    positions: [
        {
            title: '카카오',
            latitude: 33.450705,
            longitude: 126.570677
        },
        {
            title: '생태연못',
            latitude: 33.450936,
            longitude: 126.569477
        },
        {
            title: '텃밭',
            latitude: 33.450879,
            longitude: 126.56994
        },
        {
            title: '근린공원',
            latitude: 33.451393,
            longitude: 126.570738
        }
    ]
};
```
<br />

이렇게 작성하시면 아래 이미지같이 뜨시면 성공입니다.
zoom 거리에 따라 클러스터와 지도 범위가 작동되는지도 확인해주시면 됩니다.
<img src="https://user-images.githubusercontent.com/37692675/103964728-7cc70600-519f-11eb-99ce-906e5b960993.png" width="100%" />
<br />

<span style="color: red;">혹시라도 <b>kakao is not defined</b>라는 오류가 뜬다면 보통은 <u>api key</u>가 틀리고나 ip허용을 안했을 확률이 높습니다.</span>

번외로 데이터 관리를 쉽게 하기위해 위치데이터를 따로 분리하겠습니다.
`utils/MapData.json`
json으로 만드는 이유는 나중에 서버랑 작업할 때, 보통 json 형식으로 정보가 전달되기 때문에 json형태로 제작합니다.
<br />

```json
// MapData.json

{
    "positions": [
        {
            "title": "카카오",
            "latitude": 33.450705,
            "longitude": 126.570677
        },
        {
            "title": "생태연못",
            "latitude": 33.450936,
            "longitude": 126.569477
        },
        {
            "title": "텃밭",
            "latitude": 33.450879,
            "longitude": 126.56994
        },
        {
            "title": "근린공원",
            "latitude": 33.451393,
            "longitude": 126.570738
        }
    ]
}
```

```javascript
// index.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react';
import { KakaoMap, KakaoMapProps } from './index';
import MapData from 'utils/MapData.json'; // 추가

export default {
    title: 'Atoms/KakaoMap',
    component: KakaoMap
} as Meta;

export const general = (args: KakaoMapProps) => <KakaoMap {...args} />;
general.args = {
    address: '카카오 본사',
    positions: MapData.positions // 변경
};
```
<br />

이렇게 작성완료하시면 Atoms 항목은 끝났습니다! 👍
<br />
다음 글에서는 Molecules - Card, Modal 등을 만들어 보겠습니다
<br />
<br />