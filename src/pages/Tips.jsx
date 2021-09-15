import React from "react";
import Header from "../components/Header";
export default function Tips() {
  return (
    <div>
      <Header />
      <h1>Tips</h1>
      <section className="tipsSection">
        <div className="tipsLesson">
          <h2 className="tipsLogo">あ</h2>
          <p className="tipsName">ひらがな１</p>
        </div>
        <div className="tipsLesson">
          <h2 className="tipsLogo">か</h2>
          <p className="tipsName">ひらがな２</p>
        </div>
      </section>
    </div>
  );
}