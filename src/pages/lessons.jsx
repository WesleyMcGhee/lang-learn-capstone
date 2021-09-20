import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { withRouter } from "react-router";
function Lessons() {
  return (
    <div>
      <Header />
      <h1>日本語</h1>
      <p>(Japanese)</p>
      <section className="lessonSelect">
        <Link to="/lessons/1" className="lessonLink">
          <div className="lesson">
            <div className="lessonChoice start">
              <h2 className="lessonLogo">あ</h2>
            </div>
            <p className="lessonName">ひらがな１</p>
          </div>
        </Link>
        <br />
        <Link to="/lessons/2" className="lessonLink">
          <div className="lesson">
            <div className="lessonChoice start">
              <h2 className="lessonLogo">か</h2>
            </div>
            <p className="lessonName">ひらがな２</p>
          </div>
        </Link>
      </section>
    </div>
  );
}
export default withRouter(Lessons);
