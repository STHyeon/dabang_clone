import React, { useState, useEffect } from 'react';

import * as S from './style';
import { GNBItem } from 'components/UI';

export interface GNBProps {
    selectType: string;
    items: string[];
    tabIndex?: number;
    onTabClicked?: (tabIndex: number) => void;
}

export function GNBType({
    selectType,
    items,
    tabIndex = 0,
    onTabClicked
}: GNBProps): React.ReactElement {
    const [currentTabIndex, setCurrentTabIndex] = useState(tabIndex);

    useEffect(() => {
        setCurrentTabIndex(tabIndex);
    }, [tabIndex]);

    return (
        <S.Container key={currentTabIndex}>
            {selectType === 'type01' && (
                <>
                    {items.map((item: string, index: number) => (
                        <GNBItem
                            key={index}
                            active={currentTabIndex - 1 === index}
                            children={item}
                            type01
                            onClick={(): void => {
                                setCurrentTabIndex(index + 1);
                                onTabClicked && onTabClicked(index + 1);
                            }}
                        />
                    ))}
                </>
            )}

            {selectType === 'type02' && (
                <>
                    {items.map((item: string, index: number) => (
                        <GNBItem
                            key={index}
                            active={currentTabIndex - 1 === index}
                            children={item}
                            type02
                            onClick={(): void => {
                                setCurrentTabIndex(index + 1);
                                onTabClicked && onTabClicked(index + 1);
                            }}
                        />
                    ))}
                </>
            )}

            {selectType === 'type03' && (
                <>
                    {items.map((item: string, index: number) => (
                        <GNBItem
                            key={index}
                            active={currentTabIndex - 1 === index}
                            children={item}
                            type03
                            onClick={(): void => {
                                setCurrentTabIndex(index + 1);
                                onTabClicked && onTabClicked(index + 1);
                            }}
                        />
                    ))}
                </>
            )}
        </S.Container>
    );
}
