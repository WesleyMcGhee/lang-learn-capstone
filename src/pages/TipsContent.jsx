import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import useAxios from "../components/useAxios";

export default function TipsContent() {
  const { id } = useParams();
  const { data, error, loading } = useAxios(`/tips/${id}`);
  function renderTips(p) {
    return (
      <div key={p.id} className="charLearn">
        <h2 className="curChar">{p.header}</h2>
        <p className="tips">{p.content}</p>
      </div>
    );
  }
  if (error) return <h1>Something Went Wrong</h1>;
  if (loading) return <h1>Fething Tips</h1>;
  if (data.length === 0) return <h1>404 page not found</h1>;
  return (
    <div>
      <Header />
      <h1 className="lessonBannar">Tips {data[0].lessonid}</h1>
      <section className="learningSection">{data.map(renderTips)}</section>
    </div>
  );
}
