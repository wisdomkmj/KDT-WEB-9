import http from "k6/http";

export const options = {
    vus: 100, // vus(virtual users) : 가상 유저 설정.
    duration: "10s", // 테스트 시간 설정.
};

export default function() { // 성능 테스트 시에 실행되는 함수.
    http.get("http://localhost:8000"); // GET 메서드를 사용해서 http://localhost:8000에 요청을 보낸다는 의미.
} 