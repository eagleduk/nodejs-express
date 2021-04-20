# FastCompaus NodeJS Express 강의

1. express 시작

2. nodemon

3. Routing

4. view engine - nunjucks

- html Template 에 변수를 할당 한다..
- python의 Flask와 비슷한 라이브러리..

5. 템플릿 상속

- 기본 베이스가 되는 html 파일을 참조하여 html 파일을 작성한다.
- Spring tiles 와 비슷한 기능
- 베이스가 되는 html 파일에 라이브러리를 참조하면 베이스를 사용하는 페이지에서 참조된 라이브러리를 사용할 수 있다.

6. 미들웨어

- URL 요청을 받았을 때, 중간에서 한번 요청을 캐치하여 필요 로직을 수행할 수 있다.
- URL 에 따른 권한을 부여할 때 사용하기 유용하다.

7. form ( body-parser )

- html 의 form 데이터를 추출해주는 미들웨어
- 같은 URL 이라도 router 에서 Get, Post, Delete 등의 method 방식으로 요청을 분리 할 수있다.
- REST API 에서 URL 은 같아도 method 방식에 따른 결과가 다른 이유이다.
