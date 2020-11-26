import React, { useState } from 'react';
import { Input, SearchMap } from 'components';

export function FormMap(): React.ReactElement {
    const [keyword, setKeyword] = useState<string>('');

    const handleKeywordChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        setKeyword(e.target.value);
        // setVisible(true);
    };

    const handleKeyPress = (e: React.KeyboardEvent): void => {
        if (e.key === 'Enter') {
            // setVisible(false);
        }
    };

    return (
        <div>
            <Input
                value={keyword}
                onChange={handleKeywordChange}
                placeholder="주소를 입력해주세요."
                description="주소입력칸"
                onKeyPress={handleKeyPress}
            />
            <SearchMap address={keyword} />
        </div>
    );
}
