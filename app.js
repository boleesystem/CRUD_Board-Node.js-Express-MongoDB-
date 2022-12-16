const express = require("express");                 // require에서 express 모듈을 가져다 쓰겠다는 변수 선언
const app = express();                              // express라는 모듈은 변수 app에 넣음 - 실행된 채로 담겼다 
const port = 4000;

const connect = require("./schemas");               // schemas 폴더에 있는 것을 가져다(require) connect라는 변수로 선언하겠다 
const postRouters = require("./routes/posts");      // 수정1
const commentRouters = require("./routes/comments");// 수정1         
connect();                                          // connect라는 함수를 호출하겠다 (require에서 가져온 것을 변수로 만들어서 실행시키겠다)
                                                    // connect 함수를 호출함으로써 index.js가 실행된다

app.use(express.json());                            // json을 사용하겠다고 선언
app.use(express.urlencoded({ extended: true }));    // extended: true를 하면 추가적인 배열 등의 데이터도 받아서 쓸 수 있음

app.use("/", [postRouters, commentRouters])         // routers 미들웨어 사용 // 수정1

app.listen(port, () => {                            // 4000 포트로 서버를 실행
  console.log(port, "포트로 서버가 열렸습니다.");
});