import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { classify } from "./data";

function HomePage() {
  useEffect(() => {}, []);

  const showAll = function () {};
  return (
    <div className="wrap">
      <header className="header">
        <div className="title">揣兜猫</div>
      </header>
      <div className="content">
        <div className="classify">
          {classify.map((c) => {
            return (
              <div className="classify-item">
                <span className="classify-name">{c.name}</span>
                <span className="classify-nums">{c.nums}</span>
              </div>
            );
          })}
          <span className="expend-btn" onClick={showAll()}>
            展开
          </span>
        </div>

        <div className="docpage">
          <Link to="/docs/20220622">六月的碎片，我的回忆</Link>
          <Link to="/docs/20211122">十一月，往事与回想</Link>
          <Link to="/docs/20200322">生活在我们身边的房思琪</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
