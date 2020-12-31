import React from 'react';

import * as S from './style';
import { Label } from 'components';

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
                    <S.ModalLabel name="아이디 저장" htmlfor="idSave" />
                    비밀번호 재설정
                </S.ModalCheckWrap>
                <S.ModalBtn styletype="secondary">로그인</S.ModalBtn>
                <S.ModalAddMem>
                    아직 회원이 아니세요? <span>이메일로 회원가입</span>
                </S.ModalAddMem>
            </S.ModalInner>
        </S.ModalOverlay>
    );
}

export default Modal;
