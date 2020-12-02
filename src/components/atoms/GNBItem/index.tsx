import React, { useState } from 'react';
import * as S from './style';

export interface GNBItemProps {
    children?: string | React.ReactElement;
    active?: boolean;
    GNBType?: string;
    fontColor?: string;
    fontSize?: string;
    hoverColor?: string;
    onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
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
            onClick={(event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                onClick && onClick(event);
                !isActive && setIsActive(true);
            }}
            {...props}
        >
            {children}
        </S.Container>
    );
}
