import "./homepage.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { recommend, classify } from "../const/postData";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const showAll = function () {};

  useEffect(() => {
    onChangeClassify();
  }, []);

  const onChangeClassify = function (data) {
    const alias = data ? data["alias"] : "fragments";
    const curClassify = classify.find((post) => post.alias === alias);
    setPosts(curClassify["contents"]);
  };

  return (
    <div className="wrap">
      <header className="header">
        <div className="header-title">揣兜猫</div>
      </header>

      <div className="recommend">
        {recommend.map((post, i) => {
          return (
            <Link to={`/docs/${post.pageid}`} key={`recommend${i}`}>
              <div
                className="re-post"
                style={{
                  backgroundImage: `url("${post.image}")`,
                }}
              >
                <div className="re-post-title">{post.title}</div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="content">
        <div className="classify">
          {classify.map((c, i) => {
            return (
              <div className="classify-item" key={`classify${i}`}>
                <span
                  className="classify-name"
                  data-alias={c.alias}
                  onClick={(e) => onChangeClassify(e.target.dataset)}
                >
                  {c.name}
                </span>
                <span className="classify-nums">{c.nums}</span>
              </div>
            );
          })}
          <span className="expend-btn" onClick={showAll()}>
            展开
          </span>
        </div>

        <div className="docpage">
          {!posts.length ? (
            <div className="post-empty">{`敬请期待 :)`}</div>
          ) : (
            posts.map((p, i) => {
              let bgStyle = {
                backgroundImage: `url(${p.image})`,
              };
              return (
                <Link to={`/docs/${p.pageid}`} key={`docpage${i}`}>
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
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
