## 안녕하세요! 👏
지난 글에 이어서 Atoms(재료)를 만들어보겠습니다.
<br />

## 목차 📋
1. [기본 세팅](https://toby2009.tistory.com/43)
2. [Atoms 생성 - 1](https://toby2009.tistory.com/44)
3. [Atoms 생성 - 2](https://toby2009.tistory.com/45)
4. [Molecules 생성](https://toby2009.tistory.com/46)
5. [Organisms 생성](https://toby2009.tistory.com/47)

<br />

안녕하세요. 이제 거의 마지막 단계네요. Organisms는 Atoms, Molecules를 조합해서 만드는 형태입니다. <br />
먼저, 카드 그룹을 만들겠습니다.
<br />

### 카드 모음(CardGrid)
Organisms/CardGrid 폴더를 만들고 index.tsx, style.ts, index.stories.tsx 를 만듭니다. <br />

```javascript
// style.ts

import styled from 'styled-components';

interface Props {
    boxWidth?: string; // box 크기
}

export const GridItem = styled.ul<Props>`
    li {
        display: inline-block;
        width: ${(props) => props.boxWidth && props.boxWidth};

        & + li {
            margin: 0 0 0 10px;
        }
    }
`;
```
<br />

```javascript
// index.tsx

import React from 'react';
import * as S from './style';

import { Card } from 'components';
import { CardProps } from '../../molecules/Card';

export interface CardGridProps {
    data?: CardProps[]; // 카드 데이터
    boxWidth?: string; // 카드 크기
    cardImgHeight?: string; // 카드 이미지 크기
    cardGroup?: string; // 방/단지 구분
}

export function CardGrid({ data, boxWidth, cardGroup, cardImgHeight }: CardGridProps): React.ReactElement {
    return (
        <S.GridItem boxWidth={boxWidth}>
            {data && (
                <>
                    {data.map((CardData: CardProps, index: number) => {
                        return <Card {...CardData} />;
                    })}
                </>
            )}
            {cardGroup === 'room' && <Card CardType="type05" to="/" noneTitle="최근 본 지역의 다른 방을 찾아보세요" />}
            {cardGroup === 'complex' && <Card CardType="type05" to="/" noneTitle="최근 본 지역의 다른 단지를 찾아보세요" />}
        </S.GridItem>
    );
}

```
<br />
여기서 지금까지와 다른 점은 <u>Molecules/Card/CardProps를 가져왔다는 점</u>입니다. Card에 Props를 그대로 받아오기 때문에 이런 식으로 사용했습니다.<br />

```javascript
// index.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react';

import { CardGrid, CardGridProps } from './index';
import { Type02CardData } from 'utils/LocalData';

export default {
    title: 'Organisms/CardGrid'
} as Meta;

export const general = (args: CardGridProps) => <CardGrid {...args} />;
general.args = { data: Type02CardData, boxWidth: '27%' };

```
<br />
이렇게 코드를 작성하고 나면, 아래 이미지처럼 보인다면 성공입니다. <br />
<img src="https://user-images.githubusercontent.com/37692675/107167532-71643600-69fc-11eb-84dc-56aa38947626.png" alt="CardGrid" width="100%" />

### 유형(Boxes)
Boxes는 레이아웃 아이템이라고 생각해주시면 될 것 같습니다. <br/>
예를 들면, 다방 메인은 아래 이미지처럼 들어가는 항목마다 레이아웃이 다 다르기 때문에 이렇게 따로 빼서 작업했습니다.<br />
<img src="https://user-images.githubusercontent.com/37692675/107323438-9bdfed00-6ae9-11eb-8d93-db89bf15bad7.png" alt="다방 메인 이미지" width="100%" >
<br />

먼저, Organisms/Boxes에 style.ts, index.tsx, index.stories.tsx를 만들겠습니다.<br />

```javascript
// style.ts

import styled, { css } from 'styled-components';
import { FormInput } from 'components';

interface Props {
    type01?: boolean;
    type02?: boolean;
}

export const Container = styled.div``;

export const MainText = styled.div`
    margin: 0 0 20px;
    font-weight: 300;
    font-size: 46px;
    line-height: 58px;
    text-align: center;
`;

export const MainStrongText = styled.span`
    color: #1564f9;
`;

export const MainSearchInput = styled(FormInput)`
    height: 60px;
    padding: 0 125px 0 15px !important;
    border: 1px solid rgb(208, 210, 214);

    & + button {
        position: absolute;
        top: 50%;
        right: 6px;
        transform: translateY(-50%);
        width: 95px;
        max-height: 48px;
        line-height: 48px;
        color: #ffffff;
        background: rgb(19, 116, 248);
    }
`;

export const ListText = styled.div<Props>`
    ${(props) =>
        props.type01 &&
        css`
            margin: 0 0 2px;
            font-size: 28px;
        `}

    ${(props) =>
        props.type02 &&
        css`
            margin: 0 0 20px;
            color: #666666;
        `}
`;

export const SideMainText = styled.div`
    display: inline-block;
    position: relative;
    padding: 0 0 0 15px;
    color: #c5c5c5;

    &::after {
        display: block;
        position: absolute;
        left: 0;
        top: 5px;
        bottom: 5px;
        content: '';
        border-left: 1px solid #c5c5c5;
    }
`;

```
<br />
type01, type02는 아래 index.tsx에서 설명하겠습니다.

```javascript
// index.tsx

import React from 'react';

import * as S from './style';

import { CardProps } from '../../molecules/Card';

export interface BoxesProps extends CardProps {
    BoxesType?: string; // 박스 유형 선택
    ListText?: string;
    StrongListText?: string;
    ListDescription?: string;
}

export function Boxes({ BoxesType, ListText, StrongListText, ListDescription }: BoxesProps): React.ReactElement {
    return (
        <S.Container>
            {BoxesType === 'type01' && (
                <>
                    <S.MainText>
                        <S.MainStrongText>어떤 동네, 어떤 방</S.MainStrongText>에서
                        <br />
                        살고 싶으신가요?
                    </S.MainText>

                    <S.MainSearchInput inputTitle="검색어 입력" placeholder="검색어를 입력해주세요." buttonContent="방 찾기" />
                </>
            )}

            {BoxesType === 'type02' && (
                <>
                    <S.ListText type01>
                        {ListText} <S.SideMainText>{StrongListText}</S.SideMainText>
                    </S.ListText>
                    <S.ListText type02>{ListDescription}</S.ListText>
                </>
            )}
        </S.Container>
    );
}

```
<br />
여기에서 export로 나누어 사용하는 것이 아닌 props로 구별하는 이유는 두 내용 다 내용만 살짝 바뀌면 되고, 크게 복잡하지 않기에 이렇게 작업하였습니다.<br />
<span style="color: gray">export로 나누어도 상관없을 것 같습니다.</span><br />

```javascript
// index.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react';

import { Boxes, BoxesProps } from './index';

export default {
    title: 'Organisms/Boxes',
    component: Boxes
} as Meta;

export const MainBox = (args: BoxesProps) => <Boxes {...args} />;

MainBox.args = {
    BoxesType: 'type01',
    ListText: '최근 본 방',
    StrongListText: '찜한 방',
    ListDescription: '최근에 본 방과 찜한 방을 볼 수 있어요'
};

export const TextBox = (args: BoxesProps) => <Boxes {...args} />;
TextBox.args = {
    BoxesType: 'type02',
    ListText: '최근 본 단지',
    StrongListText: '찜한 단지',
    ListDescription: '최근에 본 단지와 찜한 단지를 볼 수 있어요'
};

```
<br />

### 모달(Modal)
Modal item을 가지고 모달창으로 뜨는 것을 만들어 봅시다.<br />

Organisms/Modal에 기본 파일(style, index, index.stories)를 만듭니다.

```javascript
// style.ts

import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
`;

export const ModalInner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 600px;
    width: 90%;
    padding: 50px 35px 40px;
    transform: translate(-50%, -50%);
    background: #fff;
`;


```
<br />
여기에서는 고정적인 넓이를 지정해줍니다.<br />

```javascript 
// index.tsx

import React from 'react';

import * as S from './style';

import { LoginItemModal, RegisterItemModal, TermItemModal } from 'components';

export interface ModalProps {}

export function LoginModal({}: ModalProps): React.ReactElement {
    return (
        <S.ModalOverlay>
            <S.ModalInner>
                <LoginItemModal />
            </S.ModalInner>
        </S.ModalOverlay>
    );
}

export function RegisterModal({}: ModalProps): React.ReactElement {
    return (
        <S.ModalOverlay>
            <S.ModalInner>
                <RegisterItemModal />
            </S.ModalInner>
        </S.ModalOverlay>
    );
}

export function TermModal({}: ModalProps): React.ReactElement {
    return (
        <S.ModalOverlay>
            <S.ModalInner>
                <TermItemModal />
            </S.ModalInner>
        </S.ModalOverlay>
    );
}


```
Props가 비어있는 이유는 정확히 어떤 데이터를 보낼지 정할 수가 없어서 나중에 서버작업할 때 다시 작업할 예정입니다. <br />

이제 스토리북으로 연결하여 화면으로 봅시다.

```javascript
// index.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { LoginModal, RegisterModal, TermModal, ModalProps } from './index';

export default {
    title: 'Organisms/Modal'
} as Meta;

export const Login = () => <LoginModal />;

export const Register = () => <RegisterModal />;

export const Term = () => <TermModal />;

```
<br />


