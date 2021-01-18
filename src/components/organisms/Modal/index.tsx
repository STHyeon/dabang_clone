import React from 'react';

import * as S from './style';

export interface ModalProps {}

export function Modal({}: ModalProps): React.ReactElement {
    return (
        <S.ModalOverlay>
            <S.ModalInner>
                <S.ModalTitle>로그인</S.ModalTitle>
                <S.ModalInput placeholder="아이디" inputHeight="46px" />
                <S.ModalInput placeholder="비밀번호" inputHeight="46px" />
                <S.ModalCheckWrap>
                    <S.ModalInput id="idSave" inputType="checkbox" />
                    <S.ModalLabel htmlfor="idSave">아이디 저장</S.ModalLabel>
                    <S.ModalLinkState>비밀번호 재설정</S.ModalLinkState>
                </S.ModalCheckWrap>
                <S.ModalBtn styletype="secondary">로그인</S.ModalBtn>
                <S.ModalAddMem>
                    아직 회원이 아니세요? <S.ModalLinkState>이메일로 회원가입</S.ModalLinkState>
                </S.ModalAddMem>
            </S.ModalInner>
        </S.ModalOverlay>
    );
}
