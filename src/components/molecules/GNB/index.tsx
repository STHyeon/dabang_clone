import React, { useState, useEffect } from 'react';

import * as S from './style';
import { GNBItem } from 'components';

export interface GNBProps {
    GNBType?: string;
    items: string[];
    itemWidth?: string;
    tabIndex?: number;
    fontColor?: string;
    fontSize?: string;
    hoverColor?: string;
    onTabClicked?: (tabIndex: number) => void;
}

export function GNB({
    GNBType,
    items,
    tabIndex = 0,
    onTabClicked,
    ...props
}: GNBProps): React.ReactElement {
    const [currentTabIndex, setCurrentTabIndex] = useState(tabIndex);

    useEffect(() => {
        setCurrentTabIndex(tabIndex);
    }, [tabIndex]);

    return (
        <S.Container key={currentTabIndex}>
            {items.map((item: string, index: number) => (
                <GNBItem
                    key={index}
                    active={currentTabIndex - 1 === index}
                    children={item}
                    GNBType={GNBType}
                    onClick={(): void => {
                        setCurrentTabIndex(index + 1);
                        onTabClicked && onTabClicked(index + 1);
                    }}
                    {...props}
                />
            ))}
        </S.Container>
    );
}
