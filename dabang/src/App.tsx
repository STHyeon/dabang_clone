import React from 'react';

import { KakaoMap } from 'components/atoms/KakaoMap/index';

function App() {
    return (
        <div className="App">
            {/* <header className="App-header">jjjjjj</header> */}
            <KakaoMap latitude={37.5662952} longitude={126.9779451} />
        </div>
    );
}

export default App;
