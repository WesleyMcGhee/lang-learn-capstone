import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Tips() {
  return (
    <div>
      <Header />
      <h1>Tips</h1>
      <section className="tipsSection">
        <Link to="/tips/1" className="tipsLesson">
          <h2 className="tipsLogo">あ</h2>
          <p className="tipsName">ひらがな１</p>
        </Link>
        <Link to="/tips/2" className="tipsLesson">
          <h2 className="tipsLogo">か</h2>
          <p className="tipsName">ひらがな２</p>
        </Link>
      </section>
    </div>
  );
}
