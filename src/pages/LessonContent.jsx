import React from "react";
import { useParams } from "react-router-dom";

export default function LessonContent() {
  const { id } = useParams();
  return (
    <div>
      <section className="lessonContentPage">
        <div className="lessonQuestion"></div>
        <div className="buttonControl">
          <button className="lessonAnswer"></button>
          <button className="lessonAnswer"></button>
          <button className="lessonAnswer"></button>
          <button className="lessonAnswer"></button>
        </div>
      </section>
    </div>
  );
}
