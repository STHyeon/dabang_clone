import React, { useState } from 'react';
import * as S from './style';

export interface GNBItemProps {
    children?: string | React.ReactElement;
    active?: boolean;
    type01?: boolean; // 탭 유형1
    type02?: boolean; // 탭 유형2
    type03?: boolean; // 탭 유형3
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export function GNBItem({
    children,
    active = false,
    onClick,
    ...props
}: GNBItemProps): React.ReactElement {
    const [isActive, setIsActive] = useState(active);

    return (
        <S.Container
            active={isActive}
            onClick={(event) => {
                onClick && onClick(event);
                !isActive && setIsActive(true);
            }}
            {...props}
        >
            {children}
        </S.Container>
    );
}
