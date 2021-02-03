## 안녕하세요! 👏
지난 글에 이어서 Atoms(재료)를 만들어보겠습니다.
<br />

## 목차 📋
1. [기본 세팅](https://toby2009.tistory.com/43)
2. [Atoms 생성 - 1](https://toby2009.tistory.com/44)
3. [Atoms 생성 - 2](https://toby2009.tistory.com/45)
3. [Molecules 생성](https://toby2009.tistory.com/46)

<br />

Molecules는 Atoms를 조합해서 만드는 형태입니다. 먼저 Atoms를 사용할 수 있게 components 폴더 아래 <b>index.ts</b>를 만들어주세요.
```sh
src
└───components
│   └─ atoms
│   └─ molecules
│   └─ organisms
│   └─ index.ts
...
```
<br />

```javascript
// index.ts

export { Btn, LinkBtn } from './atoms/Btn';
export { EventDate } from './atoms/EventDate';
export { Icon } from './atoms/Icon';
export { Img } from './atoms/Img';
export { Input } from './atoms/Input';
export { KakaoMap } from './atoms/KakaoMap';
export { Label } from './atoms/Label';
```
위에 처럼 작성해주시면 어느 위치에서든 쉽게 불러서 사용할 수 있습니다.<br />

### 입력폼(FormInput)
우선, Input + Label을 합쳐보겠습니다. molecules 폴더 아래에 <b>FormInput</b>폴더와 index.stories.tsx, index.tsx, style.ts 파일을 만들어 주세요.<br />

```javascript
// style.ts

import styled from 'styled-components';
import { Input, Btn, Img, Label } from 'components';

interface Props {
    invalid?: boolean;
}

export const FormInputContainer = styled.div`
    position: relative;
`;

export const FormLabel = styled(Label)``;

export const FormInput = styled(Input)<Props>`
    width: 100%;
    border: 0;
`;

export const FormBtn = styled(Btn)<Props>`
    position: absolute;
    right: 0;
    width: 35px;
    max-height: 35px;
    height: 100%;
`;

export const FormCaption = styled.div<Props>`
    margin: 0.3rem 0;
    font-size: 12px;
    color: red;
`;

export const SearchIcon = styled(Img)`
    width: 100%;
    height: 100%;
`;

```
<br />
전 글에서 만들었던 Atoms를 index.tsx 파일에서 불러오는 것이 아닌 style.ts에서 불러오는 이유는 스타일 수정이 쉬워지기 때문입니다!
<br />

```javascript
// index.tsx

import React from 'react';
import * as S from './style';
import BgIcon from 'assets/images/search.svg';

export interface FormInputProps {
    htmlFor?: string; // Input 연결
    children?: string | React.ReactElement; // label 내용
    disabled?: boolean; // disabled on/off
    required?: boolean; // 필수 여부
    placeholder?: string; // 유도글
    invalid?: boolean; // 오류 체크
    captionContent?: string; // 오류 메세지
    inputTitle?: string; // 접근성
    buttonContent?: string; // 버튼 내용
}

export function FormInput({ children, invalid, captionContent, htmlFor, inputTitle, buttonContent, ...props }: FormInputProps): React.ReactElement {
    return (
        <>
            {children && htmlFor ? (
                <S.FormInputContainer>
                    <S.FormLabel htmlFor={htmlFor} {...props}>
                        {children}
                    </S.FormLabel>
                    <S.FormInput id={htmlFor} {...props} />
                    {invalid && <S.FormCaption {...props}>{captionContent}</S.FormCaption>}
                </S.FormInputContainer>
            ) : (
                <S.FormInputContainer>
                    <S.FormBtn btnType="border_none">{buttonContent ? buttonContent : <S.SearchIcon src={BgIcon} alt="검색 아이콘" />}</S.FormBtn>
                    <S.FormInput description={inputTitle} {...props} />
                </S.FormInputContainer>
            )}
        </>
    );
}

```
<br />
Props의 내용은 주석으로 달아두었습니다. 아래 return쪽을 조건문을 보면 <b>children && htmlFor</b>인데요, Label에 내용이 있거나 id 값이 주어지면 보여주는 형태입니다. 그 밑에 <i>버튼 조건문</i>은 버튼에 내용이 있으면 해당 내용을 보여주고 아니면 검색 아이콘을 보여주는 형태입니다.<br />

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
                options: ['default', 'blue', 'blue_outline', 'border_none']
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
<br />
storybook을 만들어서 보면 가로에 스크롤이 생길 수 있는데 이건 Organisms에서 처리 예정입니다.<br />

### 모달 내용(Modal item)
다방 로그인/회원가입을 눌러보시면 모달창으로 뜨는 것을 만들어 봅시다.<br />

<span style="background: lightgreen;">molecules/ModalItem</span> 폴더를 만들어 주신 후, 먼저 <b>style.ts</b> 파일부터 작성합니다.<br />

```javascript
// style.ts

import styled from 'styled-components';
import { Input, Label, Btn } from 'components';
import CheckIcon from 'assets/images/checkmark.svg';
import CheckOff from 'assets/images/checkoff.svg';
import CheckOn from 'assets/images/checkon.svg';

export const ModalCommonTitle = styled.h2`
    height: 80px;
    padding: 0 30px;
    border-bottom: 1px solid #ebebeb;
    font-size: 22px;
    line-height: 80px;
`;

export const ModalLoginTitle = styled.h2`
    margin: 0 0 20px;
    font-size: 25px;
    text-align: center;
`;

export const ModalInput = styled(Input)`
    & + & {
        margin: 10px 0 0;
    }
`;

export const ModalLabel = styled(Label)`
    margin: 0 0 0 10px;
    color: #888888;
`;

export const ModalLoginCheckWrap = styled.div`
    position: relative;
    margin: 18px 0;
    font-size: 14px;
    line-height: 22px;

    input[type='checkbox'] {
        width: 1px;
        height: 1px;
        opacity: 0;
        visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;

        &:checked + label::before {
            background: url(${CheckIcon}) #1374f8 no-repeat center center/13px;
        }
    }

    label {
        display: inline-block;

        &::before {
            display: inline-block;
            vertical-align: bottom;
            content: '';
            width: 22px;
            height: 22px;
            margin: 0 10px 0 0;
            border: 1px solid rgb(211, 211, 211);
            border-radius: 3px;
        }
    }

    span {
        position: absolute;
        right: 0;
        margin: 0;
    }
`;

export const ModalCommonWrap = styled.div`
    input[type='checkbox'] {
        width: 1px;
        height: 1px;
        opacity: 0;
        visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;

        &:checked + label::before {
            background: url(${CheckIcon}) #1374f8 no-repeat center center/13px;
        }
    }
`;

export const ModalAgreeWrap = styled(ModalCommonWrap)`
    width: 150px;
    margin: 0 auto;
`;

export const ModalInputWrap = styled.div`
    &::after {
        display: block;
        content: '';
        clear: both;
    }

    & + & {
        margin: 20px 0 0;
    }
`;

export const ModalRegisterLabel = styled(Label)`
    float: left;
    width: 100px;
    margin: 0;
    font-size: 15px;
    line-height: 46px;
    cursor: default;
`;

export const ModalRegisterInput = styled(Input)`
    float: left;
    width: calc(100% - 100px);
`;

export const ModalRegisterEmail = styled(Input)`
    width: 128px;
`;

export const ModalEmailAt = styled.span`
    display: inline-block;
    width: 25px;
    text-align: center;
`;

export const ModalEmailTail = styled.select`
    width: calc(100% - 25px - 100px - 128px);
    height: 46px;
    border: 1px solid #dddfe1;
`;

export const ModalTelInput = styled(Input)`
    width: 92px;
`;

export const ModalTelInputCheck = styled(Input)`
    width: 320px;
    margin: 0 0 0 100px;
`;

export const ModalTelAt = styled.span`
    display: inline-block;
    width: 22px;
    text-align: center;
`;

export const ModalTelConfirm = styled(Btn)`
    /* width: calc(100% - 100px - 44px - 276px - 10px); */
    width: calc(100% - 100px - 320px - 10px);
    height: 46px;
    margin: 0 0 0 10px;
`;

export const TermsTxt = styled(Label)`
    display: block;
    position: relative;
    width: 100%;
    height: 30px;
    margin: 30px 0 6px;
    line-height: 30px;
    color: #000000;
    cursor: default;

    &::after {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 30px;
        height: 30px;
        background: url(${CheckOff}) no-repeat;
    }

    input[type='checkbox']:checked + &::after {
        background: url(${CheckOn}) no-repeat;
    }
`;

export const TermsRequired = styled.span`
    color: #1564f9;
`;

export const ModalBtn = styled(Btn)`
    width: 100%;
    height: 60px;
    margin: 10px 0 0;
`;

export const ModalAddMem = styled.div`
    padding: 24px 0 40px;
    font-size: 14px;
    text-align: center;

    span {
        color: #1564f9;
    }
`;

export const ModalLinkState = styled.span`
    cursor: pointer;
`;

export const ModalTermWrap = styled.div`
    /* margin: 0 0 30px; */
`;

export const ModalTermContent = styled.div`
    overflow-y: auto;
    width: 100%;
    height: 120px;
    padding: 15px;
    background: #eee;

    pre {
        font-size: 13px;
        color: #212121;
        white-space: pre-wrap;
    }
`;

```
<br />
여기에서 불러오는 이미지 파일들은 Vetor Icon 또는 Font Awesome을 이용해주시면 됩니다. <br />

index.tsx에서는 로그인, 회원가입, 약관 3개의 레이아웃이 다르기 때문에 함수 3개를 만듭니다.<br />

```javascript 
// index.tsx

import React from 'react';

import * as S from './style';

export interface ModalItemProps {}

export function LoginModal({}: ModalItemProps): React.ReactElement {
    return (
        <>
            <S.ModalLoginTitle>로그인</S.ModalLoginTitle>
            <S.ModalInput placeholder="아이디" />
            <S.ModalInput inputType="password" placeholder="비밀번호" />
            <S.ModalLoginCheckWrap>
                <S.ModalInput id="idSave" inputType="checkbox" />
                <S.ModalLabel htmlFor="idSave">아이디 저장</S.ModalLabel>
                <S.ModalLinkState>비밀번호 재설정</S.ModalLinkState>
            </S.ModalLoginCheckWrap>
            <S.ModalBtn btnType="secondary">로그인</S.ModalBtn>
            <S.ModalAddMem>
                아직 회원이 아니세요? <S.ModalLinkState>이메일로 회원가입</S.ModalLinkState>
            </S.ModalAddMem>
        </>
    );
}

export function RegisterModal({}: ModalItemProps): React.ReactElement {
    return (
        <>
            <S.ModalCommonTitle>회원가입</S.ModalCommonTitle>
            <S.ModalCommonWrap>
                <S.ModalInputWrap>
                    <S.ModalRegisterLabel htmlFor="name">이름</S.ModalRegisterLabel>
                    <S.ModalRegisterInput id="name" />
                </S.ModalInputWrap>

                <S.ModalInputWrap>
                    <S.ModalRegisterLabel htmlFor="email">이메일</S.ModalRegisterLabel>
                    <S.ModalRegisterEmail id="email" />
                    <S.ModalEmailAt>@</S.ModalEmailAt>
                    <S.ModalEmailTail name="" id="">
                        <option value="">aa</option>
                    </S.ModalEmailTail>
                </S.ModalInputWrap>

                <S.ModalInputWrap>
                    <S.ModalRegisterLabel htmlFor="password1">비밀번호</S.ModalRegisterLabel>
                    <S.ModalRegisterInput id="password1" inputType="password" />
                </S.ModalInputWrap>

                <S.ModalInputWrap>
                    <S.ModalRegisterLabel htmlFor="password2">비밀번호 확인</S.ModalRegisterLabel>
                    <S.ModalRegisterInput id="password2" inputType="password" />
                </S.ModalInputWrap>

                <S.ModalInputWrap>
                    <S.ModalRegisterLabel htmlFor="tel">휴대폰 번호</S.ModalRegisterLabel>
                    <S.ModalTelInput id="tel" inputType="tel" />
                    <S.ModalTelAt>-</S.ModalTelAt>
                    <S.ModalTelInput inputType="tel" />
                    <S.ModalTelAt>-</S.ModalTelAt>
                    <S.ModalTelInput inputType="tel" />
                    <S.ModalTelConfirm btnType="secondary">인증번호 요청</S.ModalTelConfirm>
                </S.ModalInputWrap>

                <S.ModalInputWrap>
                    {/* <S.ModalRegisterLabel htmlFor="tel"></S.ModalRegisterLabel> */}
                    <S.ModalTelInputCheck inputType="tel" />
                    <S.ModalTelConfirm btnType="secondary">인증번호 요청</S.ModalTelConfirm>
                </S.ModalInputWrap>
            </S.ModalCommonWrap>

            <S.ModalBtn btnType="secondary">이메일 회원가입</S.ModalBtn>
        </>
    );
}

export function TermModal({}: ModalItemProps): React.ReactElement {
    return (
        <>
            <S.ModalCommonWrap>
                <S.ModalInput id="Term1" inputType="checkbox" />
                <S.TermsTxt htmlFor="Term1">
                    <>
                        약관동의1<S.TermsRequired> (필수)</S.TermsRequired>
                    </>
                </S.TermsTxt>
                <S.ModalTermContent dangerouslySetInnerHTML={{ __html: 'aa' }}></S.ModalTermContent>
            </S.ModalCommonWrap>

            <S.ModalCommonWrap>
                <S.ModalInput id="Term1" inputType="checkbox" />
                <S.TermsTxt htmlFor="Term1">
                    <>
                        약관동의1<S.TermsRequired> (필수)</S.TermsRequired>
                    </>
                </S.TermsTxt>
                <S.ModalTermContent dangerouslySetInnerHTML={{ __html: 'aa' }}></S.ModalTermContent>
            </S.ModalCommonWrap>

            <S.ModalCommonWrap>
                <S.ModalInput id="Term1" inputType="checkbox" />
                <S.TermsTxt htmlFor="Term1">
                    <>
                        약관동의1<S.TermsRequired> (필수)</S.TermsRequired>
                    </>
                </S.TermsTxt>
                <S.ModalTermContent dangerouslySetInnerHTML={{ __html: 'aa' }}></S.ModalTermContent>
            </S.ModalCommonWrap>

            <S.ModalAgreeWrap>
                <S.ModalInput id="Term1" inputType="checkbox" />
                <S.TermsTxt htmlFor="Term1">모두 동의합니다.</S.TermsTxt>
            </S.ModalAgreeWrap>

            <S.ModalBtn btnType="secondary">이메일 회원가입</S.ModalBtn>
        </>
    );
}

```
로그인, 회원가입, 약관별 내요을 만들었습니다. <br />
또한, 조금 있다가 화면으로 보실 때, 화면이 꽉차게 보이실텐데 이건 <u>organisms</u>에서 수정하겠습니다.<br />

이제 스토리북으로 연결하여 화면으로 봅시다.

```javascript
// index.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react';

import { LoginModal, RegisterModal, TermModal, ModalItemProps } from './index';

export default {
    title: 'Molecules/ModalItem'
} as Meta;

export const Template1 = (args: ModalItemProps) => <LoginModal {...args} />;

export const Template2 = (args: ModalItemProps) => <RegisterModal {...args} />;

export const Template3 = (args: ModalItemProps) => <TermModal {...args} />;

```
<br />


### 카드(Card)
<span style="background: lightred;">카드는 훗날 리팩토링 예정입니다.</span><br />

다방에서 카드형식은 매우 많습니다. 그렇기에 레이아웃이 일정하지 않고, props도 많기 때문에 아래 코드에서는 하나의 함수에서 모두 처리하게 만든 상태입니다. 위에 말씀드린 것처럼 Card는 다시 만들 예정입니다. (사용은 가능합니다.)
<br />

Molecules/Card 폴더를 만들고 style.ts부터 만들겠습니다.

```javascript
// style.ts

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
    boxWidth?: string;
    cardImgHeight?: string; // 이미지 크기
    FlagValid?: boolean;
    styleroom?: boolean;
    hasLink?: boolean;
    CardType?: string;
    borderColor?: string;
}

export const CardWrapper = styled.li<Props>`
    position: relative;
    width: ${(props) => props.boxWidth && props.boxWidth};
    text-align: left;

    ${(props) =>
        props.CardType === 'type05' &&
        css`
            vertical-align: top;
        `}
`;

export const SubWrapper = styled.div<Props>`
    ${(props) =>
        props.CardType === 'type02' &&
        css`
            padding: 0 0 30px;
        `}
    
    ${(props) =>
        props.CardType === 'type03' &&
        css`
            padding: 0 0 15px;
        `}

    ${(props) =>
        props.CardType === 'type04' &&
        css`
            padding: 10px 14px;
            border: 1px solid #eeeeee;
        `}
`;

export const LinkWrapper = styled(Link)``;

export const ImgWrapper = styled.div<Props>`
    width: 100%;
    height: ${(props) => props.cardImgHeight};
    border-radius: 10px 10px 0 0;
    font-size: 0;

    ${(props) =>
        props.CardType === 'type01' &&
        css`
            border-radius: 0;
        `}

    ${(props) =>
        (props.CardType === 'type02' || props.CardType === 'type03') &&
        css`
            margin: 0 0 10px;
        `}
`;

export const FlagWrapper = styled.div``;

export const Flag = styled.div<Props>`
    display: inline-block;
    margin: 0 5px 0 0;
    padding: 0 5px;
    border: 1px solid #326cf9;
    border-radius: 3px;
    font-size: 11px;
    color: #326cf9;

    ${(props) =>
        props.FlagValid &&
        css`
            border-color: #cdaf84;
            color: #fff;
            background: #cdaf84;
        `}
`;

export const RoomInfoWrapper = styled.div<Props>`
    display: inline-block;
    font-size: 14px;
    color: #787878;

    ${(props) =>
        props.styleroom &&
        css`
            color: #000000;
        `}
`;

export const DetailWrapper = styled.div<Props>`
    overflow: hidden;
    width: 100%;
    font-size: 14px;
    color: #666666;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${(props) =>
        props.CardType === 'type04' &&
        css`
            font-size: 15px;
            color: #444444;
        `}
`;

export const AndWrapper = styled.span`
    display: inline-block;
    padding: 0 5px;
`;

export const TitleWrapper = styled.div<Props>`
    ${(props) =>
        props.CardType === 'type01' &&
        css`
            position: absolute;
            left: 20px;
            bottom: 28px;
            font-size: 26px;
            color: #ffffff;
        `}

    ${(props) =>
        (props.CardType === 'type02' || props.CardType === 'type03') &&
        css`
            margin: 0 0 6px;
            font-size: 18px;
        `}

    ${(props) =>
        (props.CardType === 'type01' || props.CardType === 'type02') &&
        css`
            font-weight: bold;
        `}
`;

export const InfoListWrapper = styled.div`
    position: relative;
    padding: 5px 0;
    border-bottom: 1px solid #d8d8d8;

    &:first-of-type {
        border-top: 1px solid #d8d8d8;
    }
`;

export const InfoDataWrapper = styled.div`
    position: absolute;
    top: 5px;
    right: 0;
    line-height: 1.1;
`;

export const AddressWrapper = styled.div`
    font-size: 14px;
    color: #dedede;
`;

export const SeeWrapper = styled.div`
    /* width: 280px; */
    height: 186px;
    border: 1px dotted #d6d8db;
    background: #fbfbfc;
    text-align: center;
`;

export const SeeText = styled.p<Props>`
    font-weight: 300;
    font-size: 14px;
    line-height: 186px;
    color: #9498a0;

    ${(props) =>
        props.hasLink &&
        css`
            margin: 0 0 10px;
            padding: 67px 0 0;
            line-height: 1.1;
            color: #3185f8;
            background: #ffffff;
        `}
`;
```
<br />

```javascript
// index.tsx

import React from 'react';

import * as S from './style';
import { Img, EventDate } from 'components';
import TabIcon from 'assets/images/tab.svg';

export interface CardProps {
    CardType?: string; // 카트 유형 선택
    to?: string; // 이동 페이지
    imgSrc?: string; // 이미지 주소
    alt: string; // 이미지 설명
    title?: string | number; // 제목
    noneTitle?: string; // 제목
    address?: string; // 상품 주소
    description1?: string; // 상세설명1
    description2?: string; // 상세설명2
    chkDate?: Date; // 확인 날짜
    FlagValid?: boolean; // 태그광고 on/off
    Flag?: string; // 태그내용
    room?: string; // 건물유형
    roomInfo?: string; // 건물 추가 정보
    ableRoom?: number; // 거래가능한 방 개수
    complexData?: boolean; // 단지정보 on/off
    boxWidth?: string; // 박스 크기
    cardImgHeight?: string; // 이미지 크기
}

export function Card({
    CardType,
    noneTitle,
    to,
    imgSrc,
    alt,
    title,
    address,
    description1,
    description2,
    FlagValid,
    Flag,
    chkDate,
    room,
    roomInfo,
    complexData,
    ableRoom,
    boxWidth,
    cardImgHeight,
    ...props
}: CardProps) {
    return (
        <S.CardWrapper CardType={CardType} boxWidth={boxWidth} {...props}>
            {to ? (
                <S.LinkWrapper to="">
                    {imgSrc && (
                        <S.ImgWrapper cardImgHeight={cardImgHeight}>
                            <Img src={imgSrc} alt={alt} />
                        </S.ImgWrapper>
                    )}

                    {(FlagValid || Flag) && (
                        <S.FlagWrapper>
                            {FlagValid && <S.Flag FlagValid>플러스+</S.Flag>}
                            {Flag && (
                                <S.Flag>
                                    {Flag}
                                    {chkDate && <EventDate eventDateType="type01" dateAt={chkDate} />}
                                </S.Flag>
                            )}
                        </S.FlagWrapper>
                    )}

                    {(room || roomInfo) && (
                        <>
                            {room && <S.RoomInfoWrapper styleroom>{room}</S.RoomInfoWrapper>}
                            {roomInfo && (
                                <S.RoomInfoWrapper>
                                    <S.AndWrapper>·</S.AndWrapper>
                                    {roomInfo}
                                </S.RoomInfoWrapper>
                            )}
                        </>
                    )}

                    {title && (
                        <S.TitleWrapper CardType={CardType}>
                            {address && <S.AddressWrapper>{address}</S.AddressWrapper>}
                            {title}
                        </S.TitleWrapper>
                    )}

                    {(description1 || description2) && (
                        <S.SubWrapper CardType={CardType}>
                            {description1 && <S.DetailWrapper>{description1}</S.DetailWrapper>}
                            {description2 && <S.DetailWrapper> {description2}</S.DetailWrapper>}
                        </S.SubWrapper>
                    )}

                    {(complexData || ableRoom) && (
                        <>
                            {ableRoom && (
                                <S.InfoListWrapper>
                                    거래가능한 방<S.InfoDataWrapper>{ableRoom} 개</S.InfoDataWrapper>
                                </S.InfoListWrapper>
                            )}
                            {complexData && (
                                <S.InfoListWrapper>
                                    단지 정보
                                    <S.InfoDataWrapper>
                                        <Img src={TabIcon} alt="탭 아이콘" height="18px" />
                                    </S.InfoDataWrapper>
                                </S.InfoListWrapper>
                            )}
                        </>
                    )}

                    {CardType === 'type05' && (
                        <S.SeeWrapper>
                            <S.SeeText hasLink>{noneTitle}</S.SeeText>
                            <svg width="35" height="35" viewBox="0 0 35 35">
                                <g fill="none" fillRule="evenodd">
                                    <circle cx="17.5" cy="17.5" r="17.5" fill="#3185F8"></circle>
                                    <g fill="#FFF">
                                        <path d="M10 17h15v1H10z"></path>
                                        <path d="M17 10h1v15h-1z"></path>
                                    </g>
                                </g>
                            </svg>
                        </S.SeeWrapper>
                    )}
                </S.LinkWrapper>
            ) : (
                <>
                    {CardType === 'type05' && (
                        <S.SeeWrapper>
                            <S.SeeText>{noneTitle}</S.SeeText>
                        </S.SeeWrapper>
                    )}
                </>
            )}
        </S.CardWrapper>
    );
}

```
<br />

```javascript
// index.stories.tsx

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card, CardProps } from './index';
import TestImg from 'assets/images/test.png';

export default {
    title: 'Molecules/Card'
} as Meta;

const Now = new Date();
const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Main = Template.bind({});
Main.args = {
    CardType: 'type01',
    imgSrc: `${TestImg}`,
    to: '/',
    title: '메인',
    chkDate: Now,
    boxWidth: '580px'
};

export const Detail1 = Template.bind({});
Detail1.args = {
    CardType: 'type02',
    title: 'test',
    FlagValid: true,
    Flag: '플러스',
    room: '오피스텔',
    roomInfo: '래미안',
    to: '/',
    imgSrc: `${TestImg}`,
    description1: '반지층, 라라라',
    description2: '밥밥지지츠츠',
    chkDate: Now,
    boxWidth: '216px'
};

export const Detail2 = Template.bind({});
Detail2.args = {
    CardType: 'type03',
    to: '/',
    title: '강변',
    room: '오피스텔',
    roomInfo: '510세대',
    description1: 'ㅁㅁㅁㅁ',
    imgSrc: `${TestImg}`,
    ableRoom: 4,
    complexData: true,
    chkDate: Now,
    boxWidth: '280px'
};

export const Detail3 = Template.bind({});
Detail3.args = {
    CardType: 'type04',
    to: '/',
    imgSrc: `${TestImg}`,
    description1: '보증금',
    description2: '5억',
    boxWidth: '185px'
};

export const SeeRoom = Template.bind({});
SeeRoom.args = {
    CardType: 'type05',
    to: '',
    noneTitle: '아직 못 본 더 많은 방이 있어요.',
    boxWidth: '280px'
};

export const SeeComplex = Template.bind({});
SeeComplex.args = {
    CardType: 'type05',
    to: '',
    noneTitle: '아직 못 본 더 많은 단지가 있어요.',
    boxWidth: '280px'
};

export const ChkSeeRoom = Template.bind({});
ChkSeeRoom.args = {
    CardType: 'type05',
    to: '/',
    noneTitle: '최근 본 지역의 다른 방을 찾아보세요',
    boxWidth: '280px'
};

export const ChkSeeComplex = Template.bind({});
ChkSeeComplex.args = {
    CardType: 'type05',
    to: '/',
    noneTitle: '최근 본 지역의 다른 단지를 찾아보세요',
    boxWidth: '280px'
};

```
<br />

웬만한 내용은 주석에 있고 Card만 나중에 리팩토링을 하게 되면 더 자세히 글을 작성하겠습니다.<br />

이것으로 Molecules 제작을 완료하였습니다. 다음 글에서는 Organisms를 제작해보겠습니다.