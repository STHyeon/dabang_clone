## 안녕하세요! 👏
지난 글에서는 기본 세팅을 완료했습니다.
이번에는 원자요소?들을 만들어 보겠습니다.

<span style="color: gray">최소한의 기본 지식이 있어야 이해하기 편하실 것 같습니다!</span>
<br />

## 목차 📋
1. [기본 세팅](https://toby2009.tistory.com/43)
2. [Atoms 생성]()

<br />

**src 폴더** 내부를 아래와 같이 세팅해주세요
```
ㄴsrc
│
└───assets
│
└───components
│   │   
│   └───atoms
│   │   
│   └───molecules
│   │   
│   └───organisms
│   │   
│   └───index.ts
│   
└───pages
│      
└───templates
│      
└───untils
│   
│   App.tsx
│   index.tsx
│   react-app-env.d.ts
│   reportWebVitals.ts
└── setupTests.ts
```  
<br />

잠시 폴더 설명을 하고 가자면
> assets 폴더: fonts, images, scss(css) 같은 파일 위치
> components 폴더: 요소 파일 위치
> pages 폴더: 화면에 보여질 파일 위치
> templates 폴더: 레이아웃 파일 위치
> utils 폴더: hooks, dummy-data, 기타 파일 위치

<br />

### 버튼(Btn)

먼저 버튼부터 시작하겠습니다.
atoms 폴더 아래에 같이 만들어 줍니다.
```
ㄴatoms
│
└───Btn
    │   
    │   index.tsx
    │   index.stories.tsx
    └── styles.ts
```  
<br />

```javascript
// index.tsx

import React from 'react';
import * as S from './style';

export interface BtnProps {
    children?: React.ReactElement | string; // 버튼 내용 또는 엘리먼트
    disabled?: boolean; //disabled 여부
    btnType?: string; // button styling type (ex. priamry, disable)
    btnOnClick?: () => void; // 클릭 이벤트
}

export interface LinkBtnProps extends BtnProps {
    btnLink: string; // Link 경로
}

export function Btn({ children, btnOnClick, ...props }: BtnProps): React.ReactElement {
    return (
        <S.Btn onClick={btnOnClick} {...props}>
            {children}
        </S.Btn>
    );
}

export function LinkBtn({ children, btnLink, btnOnClick, ...props }: LinkBtnProps): React.ReactElement {
    return (
        <S.LinkBtn onClick={btnOnClick} to={btnLink} {...props}>
            {children}
        </S.LinkBtn>
    );
}


```
<br />

먼저 위 코드에서 봐야할 점은 버튼을 2개로 나눠서 작성한 것입니다.
<b>Link</b>는 <span style="color: red;">to</span>가 필수 요소기 때문에 interface를 따로 분리하였습니다.
<u>조건문을 이용하여</u> 작업도 해보았는데 interface와 레이아웃에 크게 영향을 안준다고 생각되면 굳이 나눌 필요는 없을 것 같습니다.
<br />

또한, Atom 요소들은 <b style="color: red">...props</b>가 꼭 들어가야합니다.
원래는 disable 같은 속성을 사용하기 위해 넣었는데, 상위 Molecules, Organisms에서 컴포넌트를 불러 상속시켜 <u>스타일을 적용시킬 때</u> 이게 없으면 스타일이 안먹기 때문에 필수라고 생각됩니다.
<br />

스타일 도구를 설치해줍니다.

```console
npm i styled-components

npm i --save-dev @types/styled-components
```
<br />

스타일을 넣기 전에, 먼저 작동되는지 확인하고 하겠습니다.
<span style="color: red">S.LinkBtn은 주석처리 해주시고, S.Btn은 button으로 변경 후, 실행해주시기 바랍니다.</span>

```javascript
// index.tsx

export function Btn({ children, btnOnClick, ...props }: BtnProps): React.ReactElement {
    return (
        // <S.Btn onClick={btnOnClick} {...props}>
        //     {children}
        // </S.Btn>

        <button>{children}</button>
    );
}

// export function LinkBtn({ children, btnLink, btnOnClick, ...props }: LinkBtnProps): React.ReactElement {
//     return (
//         <S.LinkBtn onClick={btnOnClick} to={btnLink} {...props}>
//             {children}
//         </S.LinkBtn>
//     );
// }

```
<br />

```javascript
// index.stories.tsx

import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Btn, BtnProps, LinkBtnProps } from './index';

export default {
    title: 'Atoms/Btn'
} as Meta;

export const defaultBtn = (args: BtnProps) => <Btn {...args} btnOnClick={() => {}} />;
defaultBtn.args = {
    children: '테스트',
    disabled: false
};

```
<br />

> index.stories.tsx 설명
> 
> title: SideBar 제목/소제목
> const Template: 함수 호출
> export const 소소제목: 사이드바 버튼 아래 보여질 이름이다.
> 소소제목.args: props로 받는 것을을 여기에서 넣어서 테스트할 수 있다.

<br />


사진같이 나오시면 성공입니다!
앞으로 이런식으로 컴포넌트를 만들고 Storybook으로 확인하며 작업하시면 됩니다.
<br />

이 프로젝트 스타일은 기본으로 <b>reset.css</b>스타일이 적용되어 있습니다.
<i style="color: gray; font-size: 13px;">reset 소스를 구하셔서 적용하시는 것을 추천드립니다. ex) Normalize css</i><br />

또한, 해당 글은 크로스브라우징을 고려하여 flex를 사용하지 않습니다.
<br />

styled-components는 SCSS를 이용합니다.
참고글: [SCSS 강의](https://toby2009.tistory.com/35)

```javascript 
// style.ts

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface BtnProps {
    btnType?: string;
}

const BtnCSS = css<BtnProps>`
    display: inline-block;
    width: 100%;
    margin: 0;
    padding: 0;
    border: 1px solid #cccccc;
    font-size: 16px;
    color: #000000;
    text-align: center;
    text-decoration: none;
    background: #ffffff;
    cursor: pointer;

    &:disabled {
        color: #ffffff;
        background: #b9b9b9;
        cursor: default;
    }

    ${(props) =>
        props.btnType === 'blue' &&
        css`
            border: 0;
            color: #ffffff;
            background: #1a5ae8;
        `}

    ${(props) =>
        props.btnType === 'blue_outline' &&
        css`
            border-color: #1a5ae8;
        `}
`;

export const Btn = styled.button<BtnProps>`
    ${BtnCSS}
`;

export const LinkBtn = styled(Link)<BtnProps>`
    ${BtnCSS}
`;
```
<br />

스타일까지 작성되었으면 아까 주석처리를 풀고, 나머지 속성들도 넣어 보겠습니다.

```javascript
// index.tsx

import React from 'react';
import * as S from './style';

export interface BtnProps {
    children?: React.ReactElement | string; // 버튼 내용 또는 엘리먼트
    disabled?: boolean; //disabled 여부
    btnType?: string; // button styling type (ex. priamry, disable)
    btnOnClick?: () => void; // 클릭 이벤트
}

export interface LinkBtnProps extends BtnProps {
    btnLink: string; // Link 경로
}

export function Btn({ children, btnOnClick, ...props }: BtnProps): React.ReactElement {
    return (
        <S.Btn onClick={btnOnClick} {...props}>
            {children}
        </S.Btn>
    );
}

export function LinkBtn({ children, btnLink, btnOnClick, ...props }: LinkBtnProps): React.ReactElement {
    return (
        <S.LinkBtn onClick={btnOnClick} to={btnLink} {...props}>
            {children}
        </S.LinkBtn>
    );
}


```
<br />

```javascript
// index.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Btn, LinkBtn, BtnProps, LinkBtnProps } from './index';

export default {
    title: 'Atoms/Btn',
    argTypes: {
        btnType: {
            control: {
                type: 'select',
                options: ['blue', 'blue_outline']
            }
        }
    }
} as Meta;

export const defaultBtn = (args: BtnProps) => <Btn {...args} btnOnClick={action('Button is clicked!')} />;
defaultBtn.args = {
    children: '테스트',
    disabled: false
};

export const linktBtn = (args: LinkBtnProps) => <LinkBtn {...args} btnOnClick={action('Button is clicked!')} />;
linktBtn.args = {
    children: '테스트',
    disabled: false,
    btnLink: ''
};

```
※ argTypes의 control을 이용하면 select를 사용하실 수 있습니다.

<br />

문제가 발생하지 않는다면, 이제부터 위와 같은 형식으로 다른 Atom들도 만들어 보겠습니다.
<br />

### Date(EventDate)
함수명을 Date로 하고 싶었지만 문제될 수도 있어 Event를 붙였습니다.
<br />

다방에서 사용하는 날짜는 '21.1.6', '2021.1' 형태를 사용합니다. 그래서 따로 함수를 만들어줘야 합니다.
<br />

```
ㄴutils
│
│ DateFormat.ts
```
<br />

```javascript
// DateFormat.ts

interface DateFormatProps {
    dateAt: Date;
}

export function DateFormat1({ dateAt }: DateFormatProps): string {
    if (dateAt) {
        const Year = '' + dateAt.getFullYear().toString().substring(2);
        const Month = '' + (dateAt.getMonth() + 1);
        const Day = '' + dateAt.getDate();
        const result = `${Year}.${Month}.${Day}`;
        return result;
    } else {
        return '날짜가 없습니다.';
    }
}

export function DateFormat2({ dateAt }: DateFormatProps): string {
    if (dateAt) {
        const Year = '' + dateAt.getFullYear().toString();
        const Month = '' + (dateAt.getMonth() + 1);
        const result = `${Year}.${Month}`;
        return result;
    } else {
        return '날짜가 없습니다.';
    }
}

```
<br />

함수에 어려운 것은 없으니 따로 설명은 안하겠습니다.
<br />

```
ㄴatoms
│
└───EventDate
    │   
    │   index.tsx
    │   index.stories.tsx
```
<br />

index.tsx에서는 2개의 형태가 있지만 굳이 나눌 필요없을 것 같아서 조건문을 이용하였습니다.
```javascript
// index.tsx

import React from 'react';
import * as S from './style';
import { DateFormat1, DateFormat2 } from 'utils/DateFormat';

export interface EventDateProps {
    eventDateType?: string;
    dateAt?: Date;
}

export function EventDate({ eventDateType, dateAt }: EventDateProps): React.ReactElement {
    return (
        <S.Date>
            {eventDateType === 'Date' && <>{dateAt && DateFormat1({ dateAt: dateAt })}</>}
            {eventDateType === 'Month' && <>{dateAt && DateFormat2({ dateAt: dateAt })}</>}
        </S.Date>
    );
}

```
<br />

```javascript
// index.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react';

import { EventDate, EventDateProps } from './index';

export default {
    title: 'Atoms/EventDate',
    argTypes: {
        dateAt: {
            description: '날짜 데이터'
        },
        eventDateType: {
            control: {
                type: 'select',
                options: ['Date', 'Month']
            }
        }
    }
} as Meta;

const Now = new Date();

export const S_EventDate = (args: EventDateProps) => <EventDate {...args} />;
S_EventDate.args = {
    eventDateType: 'Date',
    dateAt: Now
};

```
<br />

```javascript
import styled from 'styled-components';

export const Date = styled.span``;
```
<br />

EventDate에서는 이렇게 작성해주시면 됩니다.