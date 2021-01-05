import React from 'react';

import * as S from './style';
import { TermTxt } from 'utils/contents/string';

export interface ModalItemProps {}

export function LoginModal({}: ModalItemProps): React.ReactElement {
    return (
        <>
            <S.ModalLoginTitle>로그인</S.ModalLoginTitle>
            <S.ModalInput placeholder="아이디" inputHeight="46px" />
            <S.ModalInput inputType="password" placeholder="비밀번호" inputHeight="46px" />
            <S.ModalLoginCheckWrap>
                <S.ModalInput id="idSave" inputType="checkbox" />
                <S.ModalLabel htmlfor="idSave">아이디 저장</S.ModalLabel>
                <S.ModalLinkState>비밀번호 재설정</S.ModalLinkState>
            </S.ModalLoginCheckWrap>
            <S.ModalBtn styletype="secondary">로그인</S.ModalBtn>
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
                    <S.ModalRegisterLabel htmlfor="name">이름</S.ModalRegisterLabel>
                    <S.ModalRegisterInput id="name" inputHeight="46px" />
                </S.ModalInputWrap>

                <S.ModalInputWrap>
                    <S.ModalRegisterLabel htmlfor="email">이메일</S.ModalRegisterLabel>
                    <S.ModalRegisterEmail id="email" inputHeight="46px" />
                    <S.ModalEmailAt>@</S.ModalEmailAt>
                    <S.ModalEmailTail name="" id="">
                        <option value="">aa</option>
                    </S.ModalEmailTail>
                </S.ModalInputWrap>

                <S.ModalInputWrap>
                    <S.ModalRegisterLabel htmlfor="password1">비밀번호</S.ModalRegisterLabel>
                    <S.ModalRegisterInput id="password1" inputType="password" inputHeight="46px" />
                </S.ModalInputWrap>

                <S.ModalInputWrap>
                    <S.ModalRegisterLabel htmlfor="password2">비밀번호 확인</S.ModalRegisterLabel>
                    <S.ModalRegisterInput id="password2" inputType="password" inputHeight="46px" />
                </S.ModalInputWrap>

                <S.ModalInputWrap>
                    <S.ModalRegisterLabel htmlfor="tel">휴대폰 번호</S.ModalRegisterLabel>
                    <S.ModalTelInput id="tel" inputType="tel" inputHeight="46px" />
                    <S.ModalTelAt>-</S.ModalTelAt>
                    <S.ModalTelInput inputType="tel" inputHeight="46px" />
                    <S.ModalTelAt>-</S.ModalTelAt>
                    <S.ModalTelInput inputType="tel" inputHeight="46px" />
                    <S.ModalTelConfirm styletype="secondary">인증번호 요청</S.ModalTelConfirm>
                </S.ModalInputWrap>

                <S.ModalInputWrap>
                    <S.ModalRegisterLabel htmlfor="tel"></S.ModalRegisterLabel>
                    <S.ModalTelInputCheck inputType="tel" inputHeight="46px" />
                    <S.ModalTelConfirm styletype="secondary">인증번호 요청</S.ModalTelConfirm>
                </S.ModalInputWrap>
            </S.ModalCommonWrap>

            <S.ModalBtn styletype="secondary">이메일 회원가입</S.ModalBtn>
        </>
    );
}

export function TermModal({}: ModalItemProps): React.ReactElement {
    return (
        <>
            <S.ModalCommonWrap>
                <S.ModalInput id="Term1" inputType="checkbox" />
                <S.TermsTxt htmlfor="Term1">
                    <>
                        약관동의1<S.TermsRequired> (필수)</S.TermsRequired>
                    </>
                </S.TermsTxt>
                <S.ModalTermContent dangerouslySetInnerHTML={{ __html: TermTxt }}></S.ModalTermContent>
            </S.ModalCommonWrap>

            <S.ModalCommonWrap>
                <S.ModalInput id="Term1" inputType="checkbox" />
                <S.TermsTxt htmlfor="Term1">
                    <>
                        약관동의1<S.TermsRequired> (필수)</S.TermsRequired>
                    </>
                </S.TermsTxt>
                <S.ModalTermContent dangerouslySetInnerHTML={{ __html: TermTxt }}></S.ModalTermContent>
            </S.ModalCommonWrap>

            <S.ModalCommonWrap>
                <S.ModalInput id="Term1" inputType="checkbox" />
                <S.TermsTxt htmlfor="Term1">
                    <>
                        약관동의1<S.TermsRequired> (필수)</S.TermsRequired>
                    </>
                </S.TermsTxt>
                <S.ModalTermContent dangerouslySetInnerHTML={{ __html: TermTxt }}></S.ModalTermContent>
            </S.ModalCommonWrap>

            <S.ModalAgreeWrap>
                <S.ModalInput id="Term1" inputType="checkbox" />
                <S.TermsTxt htmlfor="Term1">모두 동의합니다.</S.TermsTxt>
            </S.ModalAgreeWrap>

            <S.ModalBtn styletype="secondary">이메일 회원가입</S.ModalBtn>
        </>
    );
}
