import React from 'react';

import * as S from './style';
import { TermTxt } from 'utils/contents/string';

export interface ModalItemProps {}

export function LoginModal({}: ModalItemProps): React.ReactElement {
    return (
        <>
            <S.ModalTitle>로그인</S.ModalTitle>
            <S.ModalInput placeholder="아이디" inputHeight="46px" />
            <S.ModalInput inputType="password" placeholder="비밀번호" inputHeight="46px" />
            <S.ModalCheckWrap>
                <S.ModalInput id="idSave" inputType="checkbox" />
                <S.ModalLabel name="아이디 저장" htmlfor="idSave" />
                <S.ModalLinkState>비밀번호 재설정</S.ModalLinkState>
            </S.ModalCheckWrap>
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
            <S.ModalTitle>회원가입</S.ModalTitle>
            <S.ModalInput placeholder="아이디" inputHeight="46px" />
            <S.ModalInput inputType="password" placeholder="비밀번호" inputHeight="46px" />
            <S.ModalCheckWrap>
                <S.ModalInput id="idSave" inputType="checkbox" />
                <S.ModalLabel name="아이디 저장" htmlfor="idSave" />
                <S.ModalLinkState>비밀번호 재설정</S.ModalLinkState>
            </S.ModalCheckWrap>
            <S.ModalBtn styletype="secondary">로그인</S.ModalBtn>
            <S.ModalAddMem>
                아직 회원이 아니세요? <S.ModalLinkState>이메일로 회원가입</S.ModalLinkState>
            </S.ModalAddMem>
        </>
    );
}

export function TermModal({}: ModalItemProps): React.ReactElement {
    return (
        <>
            <S.ModalTitle>약관동의</S.ModalTitle>
            <S.ModalCheckWrap>
                <S.ModalInput id="Term1" inputType="checkbox" />
                <S.ModalLabel name="약관동의1" htmlfor="Term1" />
            </S.ModalCheckWrap>
            <S.ModalTermWrap dangerouslySetInnerHTML={{ __html: TermTxt }}></S.ModalTermWrap>
        </>
    );
}
