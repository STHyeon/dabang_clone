import React from 'react';
import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import * as S from './style';

export interface IconProps {
    iconType: IconPrefix; // FontAwesome 타입
    iconTitle: IconName; // FontAwesome 이름
    iconSize?: string;
}

export function Icon({ iconType, iconTitle, ...props }: IconProps): React.ReactElement {
    library.add(fas);

    return <S.Icon icon={[iconType, iconTitle]} {...props} />;
}
