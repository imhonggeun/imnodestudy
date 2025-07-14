# Node.js 1일차

### 프로젝트 초기화
```cmd
npm init
```

### main 파일 생성 `index.js`

### `package.json` 알아 보기
```json
{
  "name": "study02",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {}
}
```
> `name` : 프로젝트명

> `version`: 프로젝트 버젼

> `main` : 프로젝트 실행 시 시작하는 파일

> `type` : cjs or mjs 설정

> `scripts` : npm run 명령 시 실행 하는 명령어

> `dependeencies` : 외부 라이버리 목록

### 웹 서비스 알아보기
1. 라이버리 설치
```cmd
npm i express
```
2. `index.js` 필요 코드 추가
```js
import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})
```

3. 서비스 실행 하기
```cmd
node index.js
```
or
```cmd
npm start
```

