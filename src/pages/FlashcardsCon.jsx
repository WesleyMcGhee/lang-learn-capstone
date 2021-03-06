import React, { useState } from "react";
import Header from "../components/Header";
import useAxios from "../components/useAxios";
import { useParams } from "react-router-dom";
export default function FlashcardsCon() {
  const { id } = useParams();
  const { data, loading, error } = useAxios(`/flashcards/${id}`);
  const [side, setSide] = useState(true);
  const [currentCard, setCurrentCard] = useState(0);

  function flip() {
    if (side) {
      setSide(false);
    } else if (side === false) {
      setSide(true);
    }
  }
  function nextCard() {
    if (currentCard + 1 === data.length) {
      setCurrentCard(0);
      setSide(true);
    } else {
      setCurrentCard(currentCard + 1);
      setSide(true);
    }
  }
  function backCard() {
    if (currentCard === 0) {
      setCurrentCard(data.length - 1);
      setSide(true);
    } else {
      setCurrentCard(currentCard - 1);
      setSide(true);
    }
  }
  if (loading) return <h1>Getting Flash Cards</h1>;
  if (error) return <h1>Something went wrong O-O</h1>;
  if (side) {
    return (
      <div>
        <Header />
        <section className="flashcard">
          <h1 className="flashQ">{data[currentCard].cardfront}</h1>
        </section>
        <section className="navigate">
          <button
            className="flash-btn"
            onClick={() => {
              backCard();
            }}
          >
            Back
          </button>
          <button
            className="flash-btn"
            onClick={() => {
              flip();
            }}
          >
            Flip
          </button>
          <button
            className="flash-btn"
            onClick={() => {
              nextCard();
            }}
          >
            Next
          </button>
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <section className="flashcard">
          <h1 className="flashQ">{data[currentCard].cardback1}</h1>
          <h1 className="flashQ">{data[currentCard].cardback2}</h1>
        </section>
        <section className="navigate">
          <button
            className="flash-btn"
            onClick={() => {
              backCard();
            }}
          >
            Back
          </button>
          <button
            className="flash-btn"
            onClick={() => {
              flip();
            }}
          >
            Flip
          </button>
          <button
            className="flash-btn"
            onClick={() => {
              nextCard();
            }}
          >
            Next
          </button>
        </section>
      </div>
    );
  }
}
