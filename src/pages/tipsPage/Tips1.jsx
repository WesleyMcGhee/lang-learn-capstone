import React from "react";
import Header from "../../components/Header";

export default function Tips1() {
  return (
    <div>
      <Header />
      <h1 className="lessonBannar">Tips 1</h1>
      <section className="learningSection">
        <div className="charLearn">
          <h2 className="curChar">あ</h2>
          <p className="tips">
            あ is pronouced like the Aw in Awful, you can remember it by seeing
            the A in the center.
          </p>
          <div className="charLearn">
            <h2 className="curChar">い</h2>

            <p className="tips">
              い is pronouced like ee in eel, and you can remember it because it
              looks like two eels.
            </p>
          </div>
          <div className="charLearn">
            <h2 className="curChar">え</h2>

            <p className="tips">
              え is pronouced like the e in egg, remember it like a bird about
              to lay an egg.
            </p>
          </div>
          <div className="charLearn">
            <h2 className="curChar">お</h2>

            <p className="tips">
              お is pronounced like Oh, and you can look and see the to Os at
              the bottom.
            </p>
          </div>
          <div className="charLearn">
            <h2 className="curChar">う</h2>

            <p className="tips">
              う is pronounced like u in blue, and you can remember it by seeing
              the sideways U.
            </p>
          </div>
          <div className="charLearn">
            <h2 className="curChar">あお</h2>

            <p className="tips">あお means blue</p>
          </div>
          <div className="charLearn">
            <h2 className="curChar">うえ</h2>

            <p className="tips">
              うえ means Above and the Kanji for this is 上.
            </p>
          </div>
          <div className="charLearn">
            <h2 className="curChar">いええ</h2>

            <p className="tips">
              いええ means no, but can also be don't mention it, or no problem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
