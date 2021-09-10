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
          <div className="lessonChoice disabled">
            <h2 className="lessonLogo">あ</h2>
          </div>
          <p className="lessonName">ひらがな１</p>
        </div>
      </section>
    </div>
  );
}
export default Lessons;
