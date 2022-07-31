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

          <div className="docpage-item">
            <div className="post-cover"></div>
            <div className="post-preview-content">
              <div className="post-preview-title">
                阅览室 2022 年 4 月工作简报
              </div>
              <div className="post-preview-description">
                各位好： 过去三个月中，在我们筹备阅览室产品的同时，阅览室的 13
                位共同发起人也花了许多时间一起讨论、确定了阅览室的「原则」。今天是世界读书日。虽然谈论的并非如何阅读书籍，但我们仍然想在这个日子里和大家分享这份文本——毕竟一年之中我们能讨论阅读、思考阅读的意义的日子并不是很多。…
              </div>
              <div className="post-others">catt_wuyang|无恙 APR 12</div>
            </div>
          </div>
          <div className="docpage-item">
            <div className="post-cover"></div>
            <div className="post-preview-content">
              <div className="post-preview-title">
                阅览室 2022 年 4 月工作简报
              </div>
              <div className="post-preview-description">
                各位好： 过去三个月中，在我们筹备阅览室产品的同时，阅览室的 13
                位共同发起人也花了许多时间一起讨论、确定了阅览室的「原则」。今天是世界读书日。虽然谈论的并非如何阅读书籍，但我们仍然想在这个日子里和大家分享这份文本——毕竟一年之中我们能讨论阅读、思考阅读的意义的日子并不是很多。…
              </div>
              <div className="post-others">catt_wuyang|无恙 APR 12</div>
            </div>
          </div>
          <div className="docpage-item">
            <div className="post-cover"></div>
            <div className="post-preview-content">
              <div className="post-preview-title">
                阅览室 2022 年 4 月工作简报
              </div>
              <div className="post-preview-description">
                各位好： 过去三个月中，在我们筹备阅览室产品的同时，阅览室的 13
                位共同发起人也花了许多时间一起讨论、确定了阅览室的「原则」。今天是世界读书日。虽然谈论的并非如何阅读书籍，但我们仍然想在这个日子里和大家分享这份文本——毕竟一年之中我们能讨论阅读、思考阅读的意义的日子并不是很多。…
              </div>
              <div className="post-others">catt_wuyang|无恙 APR 12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
