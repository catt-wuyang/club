import "./post.scss";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function DocPage() {
  const [post, setPost] = useState("");

  useEffect(() => {
    const hashnames = window.location.hash.split("/");
    const pageId = hashnames[hashnames.length - 1];
    import(`../fragments/${pageId}.md`).then((res) => setPost(res.default));
  }, []);

  return (
    <div className="post-content">
      <div className="post">
        <ReactMarkdown children={post} />
      </div>
    </div>
  );
}

export default DocPage;
