# 컴포넌트 
- 유저인증
AuthContext.js
AuthProvider.js (user state 관리)
AuthRequired.js

- 계정
Login.js (로그인)
Register.js (회원가입)
Account.js (정보 수정)

- 게시물
ArticleCreate.js (게시물 작성)
ArticleList.js (게시물 전체보기)
ArticleView.js (게시물 한개보기)
Feed.js (피드)

- 댓글
Comments.js

- 검색
Search.js

- 프로필
Profile.js
FollowersList.js (팔로워 리스트)
Following.js (팔로잉 리스트)

- 404 페이지
NotFound.js

- 기타 (합성용 컴포넌트)
Layout.js (레이아웃)
Avatar.js (아바타)
ArticleTemplate.js (게시물 템플릿)
Carousel.js (캐러셀)
Modal.js (모달)

# 유틸리티 함수
- 데이터 가져오기
fetchData.js

<<<<<<< HEAD
# production environment 구축하기

클라이언트 : Github pages (https://pages.github.com/)
서버 : Railway(railway.app / https://docs.railway.app/)
데이터베이스 : Mongodb Atlas 


[ server open ]

/social-media-app/server

npm run devstart

[server close]

ctrl + c 서버끄기

서버를 끄지않고 닫고 다시 오픈하는경우 
서버를 종료시키고 새로운 서버를 다시 오픈해야 작동을함. 



명령어 실행 about populatedb 
ternemal

/social-media-app/server

// node에게 populatedb.js 파일을 실행
명령어:::

node populatedb mongodb://127.0.0.1:27017/social_media_db



>>>>>>> origin/main
