## 안녕하세요! 👏
  
이번에 <span style="color: #1564f9">다방</span>을 클론코딩 강의글을 남길려고 합니다.  
클론코딩이라고 하지만 이 글에서는 <span style="color: #F74581">StoryBook</span>, <span style="color: #5ED3F3">React</span>와 <span style="color: #2D79C7">TypeScript</span>를 이용하여 <span style="text-decoration: underline; text-underline-position: under;">화면</span>만 구현할 예정입니다.  
  

<span style="color:#99B5D7">_사실.. 화면만 만드는 것이 클론코딩인지는 잘 모르겠습니다......_</span>  
  
또한, 중복된 디자인과 레이아웃이 많아 모든 페이지를 만드는 것이 아닌 아래 항목 페이지들만 제작합니다.  
  
* [메인](https://www.dabangapp.com/)
* [방찾기](https://www.dabangapp.com/search/)
* [관심목록](https://www.dabangapp.com/favorite/recent-room)
* 회원가입 팝업
  
  
## 개요 📘
  
먼저, 스토리북을 이용하는 이유는 <span style="text-decoration: underline; text-underline-position: under;">**Atomic Design**</span>방식을 사용하기 위해서 입니다.  
  
> Atomic Design(아토믹 디자인)이란? 요소 하나부터 만들어가는 과정입니다.
> 이 방식을 이용하면 재사용이 용이하기 때문에 사용합니다.
> [Atomic Design 공식문서](https://bradfrost.com/blog/post/atomic-web-design/)를 참고해주시면 될 것 같습니다.
>
> Atomic Design의 단점 중 하나가 만든 요소를 확인하기 어렵습니다. 그렇기에 스토리북을 이용하여 만든 요소를 해당 단계에서 확인할 수 있기 때문에 사용합니다!
> [스토리북관련 글](https://toby2009.tistory.com/tag/Storybook)도 참고해주시면 좋을 것 같습니다.
  
환경
- Windows 10
- Visual Studio Code
- Npm
  
  
## 세팅하기 🔨
cmd에 명령어를 입력해줍니다.  
  
```console
npx create-react-app 프로젝트명 --typescript
```  
  
※ 참고로 현위치 폴더에 생성하고 싶은 경우 프로젝트명에 . 을 입력해주시면 됩니다.  

```console
npx create-react-app . --typescript
```  
  
src폴더에 필요없는 파일을 지워주시면 아래와 같아집니다.  

```
project
└───node_modules
└───public
│
└───src
│   │   App.tsx
│   │   index.tsx
│   │   react-app-env.d.ts
│   │   reportWebVitals.ts
│   │   setupTests.ts
│   │
│   └───subfolder1
│   
│   .eslintcache
│   .gitignore
│   package.json
│   README.md
└── tsconfig.json
```  
  
후에 App.tsx와 index.tsx에 import 되어있던 코드를 지워줍니다.  
※ 혹여 GitHub에 저장시, .eslintache를 .gitignore에 추가하는 것을 잊지맙시다!
  
```javascript
// App.tsx

import React from 'react';

function App() {
    return <div className="App">Hello</div>;
}

export default App;
```

```javascript
// index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```
  
  
npm start 명령어로 문제가 없는지 확인 후 진행합니다.  
문제가 없다면 아래 명령어를 입력해줍니다.  
  
```console
npx -p @storybook/cli sb init --type react_scripts
```
  
root폴더에 **.env**파일을 만듭니다.  
  
```
NODE_PATH=src/
```  
  
이 코드를 입력하면 상대경로 대신 절대경로를 사용할 수 있습니다.  

> 상대경로 ex) import ... from ../../../src/App.tsx
> 절대경로 ex) import ... from App.tsx

tsconfig.json에 "compilerOptions"에 __"baseUrl": "./src"__ 를 입력해줍니다.  
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": "./src" // 추가
  },
  "include": [
    "src"
  ]
}
```  
  
스토리북 내에서 링크같은 기능을 사용하려면 따로 설정해야합니다.  
먼저 __react-router-dom__ 을 설치해줍니다.  
  
```console
$ npm install react-router-dom @types/react-router-dom
```  
  
설치후, root폴더에 .storybook에 __router-decorator.tsx__ 파일을 추가해줍니다.  

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default (story) => (
    <Router>
        <Switch>
            <Route path="*">{story()}</Route>
        </Switch>
    </Router>
);

```  
  
해당 파일을 .storybook/preview.js에 적용시켜줍니다.  
  
```javascript
import { addDecorator } from '@storybook/react';
import routerDecorator from './router-decorator';

addDecorator(routerDecorator);

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' }
};
```
  
이렇게 작성하신 후 __npm run storybook__ 으로 실행하셨을 때 문제없이 실행되신다면 __src/stories__ 폴더를 삭제해주시면 기본세팅이 끝납니다.