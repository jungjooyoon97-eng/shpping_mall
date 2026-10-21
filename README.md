### 쇼핑몰 프로젝트

### 개발 실행
프로젝트 최상위 폴더(`shop-mall (deploy)`)에서 실행합니다.

```bash
npm run dev
```

React 개발 화면을 실행합니다. 터미널에 표시되는 주소로 접속하세요.
API 서버는 같은 폴더에서 별도 터미널을 열어 실행합니다.

```bash
npm run dev:server
```

각 터미널에서 `Ctrl+C`를 누르면 해당 프로그램이 종료됩니다.
API 서버의 데이터베이스 접속 설정은 별도로 필요합니다.

### 프로젝트 구조
#### client 폴더 : 리엑트 설치
#### server 폴더 : 웹서버(express)

<!-- 프런트와 서버 통신 -->
리엑트 - axios 설치
- npm install axios

서버 - cors() 설치
- npm i cors

#### 리엑트 라우팅
npm i react-router-dom

### 프런트엔드 프로그래밍
#### 상품(프런트 개발)
- 상품 등록
- 상품 수정
- 상품 삭제
- 상품 목록(검색 기능)

#### 회원
- api 개발(REST API)
- 회원(프런트 개발)
