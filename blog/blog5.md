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

### 헤더(Header)
다방에 모바일 버전에 헤더는 없습니다. 하지만 저는 있으면 좋겠다고 생각해 <u>햄버거 메뉴를 추가했습니다.</u> 빼셔도 상관은 없습니다.<br />

파일들 위치: Organisms/Header

```javascript
// style.ts

import styled, { css } from 'styled-components';
import { Btn } from 'components';

interface Props {
    fl_l?: boolean;
    fl_r?: boolean;
    isSideNav?: boolean;
}

export const Container = styled.div`
    width: 100%;
    height: 70px;
    padding: 0 16px;
    border-bottom: 1px solid #ebebeb;
    line-height: 70px;
`;

export const HeaderWrapper = styled.div<Props>`
    display: inline-block;

    li {
        display: inline-block;

        & + li {
            margin: 0 0 0 20px;
        }
    }

    ${(props) =>
        props.fl_l &&
        css`
            & + div {
                margin: 0 0 0 22px;
            }
        `}

    ${(props) =>
        props.fl_r &&
        css`
            & + div {
                margin: 0 0 0 9.1%;
            }
        `}
`;

export const NavBox = styled.nav`
    float: right;
    width: calc(100% - 400px);
    text-align: right;
`;

export const SideNavBox = styled.div<Props>`
    position: fixed;
    top: 0;
    right: -100%; /* default -100% */
    z-index: 30;
    width: 100%;
    height: 100%;
    background: #fff;
    transition: right 0.25s ease-in;

    ${(props) =>
        props.isSideNav &&
        css`
            right: 0;
        `}
`;

export const UserTop = styled.div`
    padding: 60px 18px 20px;
    background: #1c0883;
`;

export const AuthBtn = styled(Btn)`
    width: 100%;
    height: 44px;
    border: 1px solid #3983fe;
`;

export const MNavBox = styled.nav`
    padding: 0 16px;

    li {
        display: block;
        width: 100%;
        padding: 7px 0;

        & + li {
            border-top: 1px solid #e3e3e3;
        }
    }
`;

export const SideNavClose = styled.div`
    position: absolute;
    top: 10px;
    right: 17px;
    width: 24px;
    height: 25px;
    line-height: 0;
`;

```
<br />

```javascript
//  index.tsx

import React, { useState } from 'react';
import logo from 'assets/images/logo.png';
import mene_all from 'assets/images/btn_mene_all.png';
import mene_all_close from 'assets/images/btn_mene_all_close.png';
import * as S from './style';
import { Btn, Img } from 'components';

export function Header(): React.ReactElement {
    const [isSideNav, setIsSideNav] = useState<boolean>(false);

    const handleSide = (): void => {
        setIsSideNav(!isSideNav);
    };

    return (
        <S.Container>
            <div className="pc clearfix">
                <div className="fl_l">
                    <S.HeaderWrapper fl_l>
                        <Btn btnType="border_none">
                            <Img src={logo} alt="로고" />
                        </Btn>
                    </S.HeaderWrapper>
                    <S.HeaderWrapper fl_l>
                        <ul>
                            <li>프로중개사 사이트</li>
                            <li>다방허브 사이트</li>
                        </ul>
                    </S.HeaderWrapper>
                </div>
                <S.NavBox>
                    <S.HeaderWrapper fl_r>
                        <ul>
                            <li>방찾기</li>
                            <li>분양</li>
                            <li>관심목록</li>
                            <li>방내놓기</li>
                            <li>알림</li>
                        </ul>
                    </S.HeaderWrapper>
                    <S.HeaderWrapper fl_r>
                        <ul>
                            <li>회원가입 · 로그인</li>
                        </ul>
                    </S.HeaderWrapper>
                </S.NavBox>
            </div>

            {/* 여기서부터 햄버거 메뉴입니다. */}
            <div className="mobile clearfix">
                <div className="fl_l">
                    <Btn btnType="border_none">
                        <Img src={logo} alt="로고" />
                    </Btn>
                </div>
                <div className="fl_r">
                    <Btn btnType="border_none" btnOnClick={handleSide}>
                        <Img src={mene_all} alt="햄버거 메뉴" />
                    </Btn>
                </div>
            </div>

            <S.SideNavBox isSideNav={isSideNav}>
                <S.UserTop>
                    <S.AuthBtn btnType="default">회원가입 · 로그인</S.AuthBtn>
                </S.UserTop>
                <S.MNavBox>
                    <ul>
                        <li>방찾기</li>
                        <li>분양</li>
                        <li>관심목록</li>
                        <li>방내놓기</li>
                        <li>알림</li>
                    </ul>
                </S.MNavBox>
                <S.SideNavClose>
                    <Btn btnType="border_none" btnOnClick={handleSide}>
                        <Img src={mene_all_close} alt="닫기" />
                    </Btn>
                </S.SideNavClose>
            </S.SideNavBox>
        </S.Container>
    );
}
```
<br />
햄버거 메뉴는 제외하고 만드셔도 됩니다.<br />
그 외 class는 [github - css](https://github.com/STHyeon/dabang_clone/blob/develop/src/assets/scss/project.scss)를 참고해주시면 될 것 같습니다.
<br />

```javascript
// index.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react';

import { Header } from './index';

export default {
    title: 'Organisms/Header',
    component: Header
} as Meta;

export const general = () => <Header />;

```
<br />

### 푸터(Footer)
Footer 같은 경우는 따로 설명할 부분이 없어 코드만 써두고 넘어가겠습니다. <br />

파일들 위치: Organisms/Footer
```javascript
// style.ts

import styled from 'styled-components';
import { Btn } from 'components';

export const Container = styled.div`
    padding: 30px 16px 40px;
    background: #373737;

    span + span {
        padding: 0 0 0 15px;
    }

    .mb10 {
        margin: 0 0 18px;
    }
`;

export const Detail = styled.div`
    line-height: 18px;
    color: #a0a0a0;

    > div,
    span {
        font-size: 12px;
    }
`;

export const Btns = styled(Btn)`
    width: auto;
    height: 30px;
    margin: 9px 0 0;
    padding: 0 9px;
    border-radius: 2px;
    font-size: 12px;
    line-height: 30px;
    background: rgb(81, 81, 81);
    color: rgb(204, 204, 204);

    & + & {
        margin: 9px 0 0 8px;
    }
`;

export const Right = styled.div`
    margin: 20px 0 0;
    font-size: 12px;
    color: #858585;
`;

export const ProudTxt = styled.div`
    display: inline-block;
    margin: 0 0 0 10px;
    padding: 6px 0 0;
    color: #a0a0a0;
`;

export const AuthIcon = styled.div`
    display: inline-block;
    width: 51px;
    height: 39px;
    vertical-align: top;
`;

export const DetailBox = styled.div`
    float: left;
`;

export const Certify = styled.div`
    float: right;
    margin: 10px 0 0;
    font-size: 12px;
`;

```
<br />

```javascript
// index.tsx


import React from 'react';

import * as S from './style';
import { Img } from 'components/atoms/Img';
import KS from 'assets/images/k55qi.png';

export function Footer(): React.ReactElement {
    return (
        <S.Container className="inner clearfix">
            <S.DetailBox>
                <S.Detail>
                    <div>(주)스테이션</div>
                    <div>대표: 한유순, 유형석</div>
                    <div>
                        <span>사업자 번호: 220-88-59156</span>
                        <span>통신판매업신고번호: 88제2013-서울 강남-02884호</span>
                    </div>
                    <div className="mb10">주소 : 서울시 서초구 서초대로 301 동익 성봉빌딩 10층 (주)스테이션3</div>
                    <div>
                        <span>고객센터: 02-1899-6840</span>
                        <span>(평일 10:00 ~ 18:30 토•일요일, 공휴일 휴무)</span>
                    </div>
                    <div>
                        <span>팩스 : 02-554-9774</span>
                        <span>프로모션/사업 제휴문의 : biz@station3.co.kr</span>
                        <span>허위매물 신고 : clean@dabangapp.com</span>
                    </div>
                </S.Detail>

                <S.Btns btnType="border_none">자주 묻는 질문</S.Btns>
                <S.Btns btnType="border_none">1:1 문의</S.Btns>
                <S.Right>Station3, Inc. All rights reserved.</S.Right>
            </S.DetailBox>
            <S.Certify>
                <S.AuthIcon>
                    <Img src={KS} alt="아이콘" />
                </S.AuthIcon>
                <S.ProudTxt>
                    다방, 2019년 한국서비스품질지수
                    <br />
                    부동산 중개 앱 1위 선정
                </S.ProudTxt>
            </S.Certify>
        </S.Container>
    );
}

```
<br />

```javascript
// index.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react';

import { Footer } from './index';

export default {
    title: 'Organisms/Footer'
} as Meta;

export const general = () => <Footer />;

```
<br />

### 슬라이드(Slider)
Organisms의 마지막인 슬라이드입니다.<br />

파일 위치: Organisms/Slider
```javascript
// style.ts

import styled from 'styled-components';

interface Props {
    boxWidth?: string; // box 크기
}

export const GridItem = styled.div<Props>`
    .slick-slider {
        .slick-dots {
            margin: 15px 0 0;
            text-align: center;

            li {
                display: inline-block;

                &.slick-active button {
                    border-color: #185cbe;
                    background: #185cbe;
                }

                & + li {
                    margin: 0 0 0 10px;
                }

                button {
                    width: 30px;
                    padding: 5px 0 0;
                    border-radius: 20px;
                    font-size: 0;
                }
            }
        }

        .slick-slide {
            width: ${(props) => props.boxWidth && props.boxWidth};
            margin: 0 15px;
        }
    }
`;
```
<br />

index.tsx를 작성하기 전에, <span style="background: light-green;">react-slick</span>를 설치해줍니다. <br />
slick은 [slick 공식문서](https://kenwheeler.github.io/slick/)를 참고해 주시면 됩니다.

```javascript
// index.tsx

import React from 'react';
import Slider from 'react-slick';
import * as S from './style';
import { setSlick } from 'utils/settings/setSlick';
import { Card } from 'components';
import { CardProps } from '../../molecules/Card';

import { RECENTLYROOMTEXT, RECENTLYCOMPLEXTEXT } from 'utils/contents/string';

export interface SlickProps {
    data?: CardProps[]; // 카드 데이터
    boxWidth?: string; // 카드 크기
    cardImgHeight?: string; // 카드 이미지 크기
    cardGroup?: string; // 방/단지 구분
    slidesToScroll?: number; // 슬라이드 보여줄 수
    slidesToShow?: number; // 슬라이드 넘길 수
}

export function Slick({ data, boxWidth, cardGroup, cardImgHeight, slidesToScroll = 4, slidesToShow = 4 }: SlickProps): React.ReactElement {
    if (slidesToScroll || slidesToShow) {
        setSlick.slidesToScroll = slidesToScroll;
        setSlick.slidesToShow = slidesToShow;
    }

    return (
        <S.GridItem boxWidth={boxWidth}>
            {data && (
                <Slider {...setSlick}>
                    {data.map((CardData: CardProps, index: number) => {
                        return <Card {...CardData} />;
                    })}
                    {cardGroup === 'room' && <Card CardType="type05" to="/" noneTitle={RECENTLYROOMTEXT} />}
                    {cardGroup === 'complex' && <Card CardType="type05" to="/" noneTitle={RECENTLYCOMPLEXTEXT} />}
                </Slider>
            )}
        </S.GridItem>
    );
}
```
<br />

```javascript
// utils/settings/setSlick

export const setSlick = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    centerMode: false,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1920,
            settings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1040,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 830,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

```

<br />

```javascript
// index.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react';

import { Slick, SlickProps } from './index';
import { Type02CardData } from 'utils/contents/data';

export default {
    title: 'Organisms/Slick'
} as Meta;

export const general = (args: SlickProps) => <Slick {...args} />;
general.args = { data: Type02CardData, boxWidth: '185px', slidesToShow: 7, slidesToScroll: 7 };

```
<br />

이것으로 Organisms를 마치겠습니다.<br />
다음 글이 마지막으로 지금까지 만든 것을 합치는 내용입니다.
<br />
<br />
