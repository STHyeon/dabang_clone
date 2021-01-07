## 안녕하세요! 👏
지난 글에 이어서 Atoms를 만들어보겠습니다.
<br />

## 목차 📋
1. [기본 세팅](https://toby2009.tistory.com/43)
2. [Atoms 생성 - 1](https://toby2009.tistory.com/44)
3. [Atoms 생성 - 2](https://toby2009.tistory.com/44)

<br />

### 아이콘(Icon)
아이콘은 FontAwesome을 사용할겁니다.

설치 [공식문서](https://fontawesome.com/how-to-use/on-the-web/using-with/react)

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

![화면 캡처 2021-01-07 104531](https://user-images.githubusercontent.com/37692675/103840799-9c91f780-50d5-11eb-91a4-7208adf93acc.png)
iconType을 알아보려면 사이트에서 원하는 아이콘을 클릭하고 i태그 내에 <u>class를 확인</u>해봅니다.
<b>fas fa-chevron-right</b>에서 fas가 iconType, <u>fa-</u> 를 제거한 나머지가 iconTitle입니다.
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
    children?: string | React.ReactElement;
    required?: boolean;
    htmlFor?: string;
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
<br />

우선, .storybook/preview-head.html 파일을 생성해줍니다.
헷갈릴수도 있으니 아래 폴더 구조를 참고해주시면 될 것 같습니다.
```
project
└───.storybook
│   │   ...
│   │   preview-head.html
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
원래대로면 %React_APP_KAKAO_MAP_KEY%에서 끝나야 하지만 저희는 zoom 숫자에 따라 보이는 마커가 다른 기능이 필요하기 때문에 라이브러리를 불러온 겁니다.