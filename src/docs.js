import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function DocPage() {
  const [post, setPost] = useState("");

  useEffect(() => {
    const pathnames = window.location.pathname.split("/");
    const pageId = pathnames[pathnames.length - 1];
    import(`./fragments/${pageId}.md`).then((res) => setPost(res.default));
  }, []);

  return (
    <div className="content">
      <div className="article">
        <ReactMarkdown children={post} />
      </div>
    </div>
  );
}

export default DocPage;
