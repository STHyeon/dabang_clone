import React from 'react';

import * as S from './style';

export interface ModalItemProps {}

export function LoginItemModal({}: ModalItemProps): React.ReactElement {
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
            <S.ModalBtn btnType="blue">로그인</S.ModalBtn>
            <S.ModalAddMem>
                아직 회원이 아니세요? <S.ModalLinkState>이메일로 회원가입</S.ModalLinkState>
            </S.ModalAddMem>
        </>
    );
}

export function RegisterItemModal({}: ModalItemProps): React.ReactElement {
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
                    <S.ModalTelConfirm btnType="blue">인증번호 요청</S.ModalTelConfirm>
                </S.ModalInputWrap>

                <S.ModalInputWrap>
                    {/* <S.ModalRegisterLabel htmlFor="tel"></S.ModalRegisterLabel> */}
                    <S.ModalTelInputCheck inputType="tel" />
                    <S.ModalTelConfirm btnType="blue">인증번호 요청</S.ModalTelConfirm>
                </S.ModalInputWrap>
            </S.ModalCommonWrap>

            <S.ModalBtn btnType="blue">이메일 회원가입</S.ModalBtn>
        </>
    );
}

export function TermItemModal({}: ModalItemProps): React.ReactElement {
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
