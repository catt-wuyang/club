import "./App.css";
import { classify } from "./data";
import Post from "./fragments/2022.06.js";

function HomePage() {
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

        <div className="article">
          <Post />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
