import "./homepage.scss";
import React from "react";
import { Link } from "react-router-dom";
import { classify } from "../const/classifyData";
import { post } from "../const/postData";

function HomePage() {
  const showAll = function () {};
  return (
    <div className="wrap">
      <header className="header">
        <div className="header-title">揣兜猫</div>
      </header>

      <div className="recommend">
        <div
          className="re-post"
          style={{
            backgroundImage: `url("https://i.postimg.cc/447wXGVy/640-3.png")`,
          }}
        >
          <div className="re-post-title">十一月，往事与随想</div>
        </div>
        <div
          className="re-post"
          style={{
            backgroundImage: `url("https://i.postimg.cc/447wXGVy/640-3.png")`,
          }}
        >
          <div className="re-post-title">十一月，往事与随想</div>
        </div>
      </div>

      <div className="content">
        <div className="classify">
          {classify.map((c, i) => {
            return (
              <div className="classify-item" key={`classify${i}`}>
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
          {post.map((p, i) => {
            let bgStyle = {
              backgroundImage: `url(${p.image})`,
            };
            return (
              <Link to={`/docs/${p.pageid}`}>
                <div className="docpage-item">
                  <div className="post-cover" style={bgStyle}></div>
                  <div className="post-preview-content">
                    <div className="post-preview-title">{p.title}</div>
                    <div className="post-preview-description">
                      {p.description}
                    </div>
                    <div className="post-others">{p.date}</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
