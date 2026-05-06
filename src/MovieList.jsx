import React, { useState, useEffect } from "react";

const MovieList = () => {
  // 영화 목록을 저장할 상태 변수
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // useEffect 내부에서 데이터를 가져오는 비동기 함수 정의
    const fetchMovies = async () => {
      try {
        // JSONPlaceholder API로부터 영화 목록 데이터 가져오기
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        // HTTP 요청이 성공하면 JSON 데이터로 변환
        if (response.ok) {
          const data = await response.json();
          // 가져온 데이터를 상태 변수에 설정
          setMovies(data);
        } else {
          // HTTP 요청이 실패하면 에러 발생
          throw new Error("Failed to fetch movies");
        }
      } catch (error) {
        console.error("영화 목록 가져오기 실패:", error.message);
      }
    };

    // 데이터 가져오는 함수 호출
    fetchMovies();
  }, []); // 의존성 배열이 빈 배열이므로 컴포넌트가 마운트될 때 한 번만 실행됨

  return (
    <div>
      <h1 className="text-3xl font-bold text-red-600">Movie List</h1>
      <ul>
        {/* 영화 목록을 매핑하여 목록 항목 렌더링 */}
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;