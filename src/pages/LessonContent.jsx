import Header from "../components/Header";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../components/useAxios";

export default function LessonContent() {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [wrong, setWrong] = useState(null);

  const { data, error, loading } = useAxios(`/lessons/${id}`);
  function checkAnswer(question) {
    if (question === data[currentQuestion].answer) {
      if (currentQuestion + 1 !== data.length) {
        setCurrentQuestion(currentQuestion + 1);
        setWrong(null);
      } else {
        setWrong("Congrats You passed");
      }
    } else {
      setWrong("Incorrect");
    }
  }
  if (loading) return <h1>Loading Lesson</h1>;
  if (error) return <h1>Something went wrong</h1>;

  return (
    <div>
      <Header />
      <h1>{wrong}</h1>
      <section className="lessonContentPage">
        <div className="lessonQuestion">
          <h1 className="pan">{data[currentQuestion].lessonQ}</h1>
        </div>
        <div className="buttonControl">
          <button
            className="lessonAnswer"
            onClick={() => {
              checkAnswer(data[currentQuestion].option1);
            }}
          >
            {data[currentQuestion].option1}
          </button>
          <button
            className="lessonAnswer"
            onClick={() => {
              checkAnswer(data[currentQuestion].option2);
            }}
          >
            {data[currentQuestion].option2}
          </button>
          <button
            className="lessonAnswer"
            onClick={() => {
              checkAnswer(data[currentQuestion].option3);
            }}
          >
            {data[currentQuestion].option3}
          </button>
          <button
            className="lessonAnswer"
            onClick={() => {
              checkAnswer(data[currentQuestion].option4);
            }}
          >
            {data[currentQuestion].option4}
          </button>
        </div>
      </section>
    </div>
  );
}
