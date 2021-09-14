import React from "react";
import Header from "../components/Header";
// import { withRouter } from "react-router";
function Lessons() {
  return (
    <div>
      <Header />
      <h1>日本語</h1>
      <p>(Japanese)</p>
      <section className="lessonSelect">
        <div className="lesson">
          <div className="lessonChoice start">
            <h2 className="lessonLogo">あ</h2>
          </div>
          <p className="lessonName">ひらがな１</p>
        </div>
        <br />
        <div className="lesson">
          <div className="lessonChoice start">
            <h2 className="lessonLogo">か</h2>
          </div>
          <p className="lessonName">ひらがな２</p>
        </div>
      </section>
    </div>
  );
}
export default Lessons;
