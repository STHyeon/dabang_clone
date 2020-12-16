import React from 'react';
import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import * as S from './style';

export interface IconProps {
    IconType: IconPrefix;
    IconTitle: IconName;
    IconSize?: string;
}

export function Icon({ IconType, IconTitle, IconSize }: IconProps): any {
    library.add(fas);

    return <S.IconStyle icon={[IconType, IconTitle]} IconSize={IconSize} />;
}
